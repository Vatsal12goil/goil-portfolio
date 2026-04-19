import { useEffect, useState } from "react";
import { Github, ExternalLink, Star, GitFork, Users, BookOpen, Flame, Trophy } from "lucide-react";

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  name: string;
  bio: string;
  html_url: string;
}

interface GitHubRepo {
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
}

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

const USERNAME = "Vatsal12goil";

const GitHubTracker = () => {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [totalStars, setTotalStars] = useState(0);
  const [totalForks, setTotalForks] = useState(0);
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bust = `_=${Date.now()}`;
        const [userRes, reposRes, contribRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}?${bust}`, { cache: "no-store" }),
          fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&type=owner&${bust}`, { cache: "no-store" }),
          fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last&${bust}`, { cache: "no-store" }),
        ]);

        if (userRes.ok) setUser(await userRes.json());

        if (reposRes.ok) {
          const repos: GitHubRepo[] = await reposRes.json();
          setTotalStars(repos.reduce((s, r) => s + r.stargazers_count, 0));
          setTotalForks(repos.reduce((s, r) => s + (r.fork ? 0 : r.forks_count), 0));
        }

        if (contribRes.ok) {
          const data = await contribRes.json();
          const days: ContributionDay[] = data.contributions || [];
          // Take the last ~52 weeks (364 days)
          const recent = days.slice(-364);
          setContributions(recent);
          setTotalContributions(recent.reduce((s, d) => s + d.count, 0));
        }
      } catch (err) {
        console.error("GitHub API error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const levelColor = (level: number) => {
    switch (level) {
      case 0: return "bg-slate-700/60";
      case 1: return "bg-emerald-900";
      case 2: return "bg-emerald-700";
      case 3: return "bg-emerald-500";
      case 4: return "bg-emerald-400";
      default: return "bg-slate-700/60";
    }
  };

  // Group contributions into weeks (columns)
  const weeks: ContributionDay[][] = [];
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7));
  }

  // Calculate streaks
  const { currentStreak, longestStreak } = (() => {
    let longest = 0;
    let running = 0;
    for (const d of contributions) {
      if (d.count > 0) {
        running++;
        if (running > longest) longest = running;
      } else {
        running = 0;
      }
    }
    // Current streak: count back from the most recent day (skip today if 0, since day not over)
    let current = 0;
    const today = new Date().toISOString().slice(0, 10);
    for (let i = contributions.length - 1; i >= 0; i--) {
      const d = contributions[i];
      if (d.count > 0) {
        current++;
      } else if (d.date === today) {
        // allow today to be 0 without breaking streak
        continue;
      } else {
        break;
      }
    }
    return { currentStreak: current, longestStreak: longest };
  })();

  if (loading) {
    return (
      <div className="bg-slate-800/30 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50">
        <div className="flex items-center justify-center h-48">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-800/30 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 hover:border-slate-600/70 transition-all duration-500 group hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div className="flex items-center">
          <div className="p-3 rounded-lg bg-gradient-to-r from-slate-600 to-slate-800 mr-4 group-hover:scale-110 transition-transform duration-300">
            <Github className="text-white" size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white">{user?.name || USERNAME}</h3>
            <a
              href={`https://github.com/${USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 text-sm hover:text-blue-400 transition-colors flex items-center gap-1"
            >
              @{USERNAME} <ExternalLink size={12} />
            </a>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-emerald-400">{totalContributions.toLocaleString()}</div>
          <div className="text-xs text-slate-400">contributions in the last year</div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
        <div className="bg-slate-900/40 rounded-lg p-3 flex items-center gap-2">
          <BookOpen size={18} className="text-blue-400" />
          <div>
            <div className="text-white font-bold">{user?.public_repos ?? 0}</div>
            <div className="text-xs text-slate-400">Repos</div>
          </div>
        </div>
        <div className="bg-slate-900/40 rounded-lg p-3 flex items-center gap-2">
          <Star size={18} className="text-yellow-400" />
          <div>
            <div className="text-white font-bold">{totalStars}</div>
            <div className="text-xs text-slate-400">Stars</div>
          </div>
        </div>
        <div className="bg-slate-900/40 rounded-lg p-3 flex items-center gap-2">
          <GitFork size={18} className="text-purple-400" />
          <div>
            <div className="text-white font-bold">{totalForks}</div>
            <div className="text-xs text-slate-400">Forks</div>
          </div>
        </div>
        <div className="bg-slate-900/40 rounded-lg p-3 flex items-center gap-2">
          <Users size={18} className="text-pink-400" />
          <div>
            <div className="text-white font-bold">{user?.followers ?? 0}</div>
            <div className="text-xs text-slate-400">Followers</div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-orange-500/20 to-red-500/10 border border-orange-500/30 rounded-lg p-3 flex items-center gap-2">
          <Flame size={18} className="text-orange-400" />
          <div>
            <div className="text-white font-bold">{currentStreak}d</div>
            <div className="text-xs text-slate-400">Current streak</div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-yellow-500/20 to-amber-500/10 border border-yellow-500/30 rounded-lg p-3 flex items-center gap-2">
          <Trophy size={18} className="text-yellow-400" />
          <div>
            <div className="text-white font-bold">{longestStreak}d</div>
            <div className="text-xs text-slate-400">Longest streak</div>
          </div>
        </div>
      </div>

      {/* Contribution Heatmap */}
      <div className="bg-slate-900/40 rounded-lg p-4 overflow-x-auto">
        <div className="flex gap-[3px] min-w-max">
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {week.map((day, di) => (
                <div
                  key={di}
                  className={`w-[10px] h-[10px] rounded-sm ${levelColor(day.level)} hover:ring-1 hover:ring-white/40 transition-all`}
                  title={`${day.date}: ${day.count} contribution${day.count !== 1 ? "s" : ""}`}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-end gap-2 mt-3 text-xs text-slate-400">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((l) => (
            <div key={l} className={`w-[10px] h-[10px] rounded-sm ${levelColor(l)}`} />
          ))}
          <span>More</span>
        </div>
      </div>

      <div className="mt-4 text-xs text-slate-500 text-center">
        Live from GitHub · auto-refreshes every 30 minutes
      </div>
    </div>
  );
};

export default GitHubTracker;
