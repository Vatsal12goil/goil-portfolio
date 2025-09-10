import { useEffect, useState } from "react";
import { Code2, Trophy, Target, TrendingUp } from "lucide-react";

interface LeetCodeStats {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  easyTotal: number;
  mediumSolved: number;
  mediumTotal: number;
  hardSolved: number;
  hardTotal: number;
  ranking: number;
}

const LeetCodeTracker = () => {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        // Using a public API proxy to avoid CORS issues
        const response = await fetch(`https://leetcode-stats.tashif.codes/Vatsal%20Goil`);
        const data = await response.json();
        
        if (data.status === "success") {
          setStats({
            totalSolved: data.totalSolved || 58,
            totalQuestions: data.totalQuestions || 3000,
            easySolved: data.easySolved || 30,
            easyTotal: data.easyTotal || 800,
            mediumSolved: data.mediumSolved || 25,
            mediumTotal: data.mediumTotal || 1700,
            hardSolved: data.hardSolved || 3,
            hardTotal: data.hardTotal || 500,
            ranking: data.ranking || 150000
          });
        } else {
          // Fallback to static data if API fails
          setStats({
            totalSolved: 58,
            totalQuestions: 3000,
            easySolved: 30,
            easyTotal: 800,
            mediumSolved: 25,
            mediumTotal: 1700,
            hardSolved: 3,
            hardTotal: 500,
            ranking: 150000
          });
        }
      } catch (err) {
        console.error("LeetCode API error:", err);
        // Fallback to static data
        setStats({
          totalSolved: 58,
          totalQuestions: 3000,
          easySolved: 30,
          easyTotal: 800,
          mediumSolved: 25,
          mediumTotal: 1700,
          hardSolved: 3,
          hardTotal: 500,
          ranking: 150000
        });
        setError("Using cached data");
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeStats();
    // Refresh every 30 minutes
    const interval = setInterval(fetchLeetCodeStats, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="bg-slate-800/30 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50">
        <div className="flex items-center justify-center h-48">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400"></div>
        </div>
      </div>
    );
  }

  if (!stats) return null;

  const progressPercentage = (stats.totalSolved / stats.totalQuestions) * 100;
  const circumference = 2 * Math.PI * 90; // radius = 90
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progressPercentage / 100) * circumference;

  return (
    <div className="bg-slate-800/30 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 hover:border-slate-600/70 transition-all duration-500 group hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10">
      <div className="flex items-center mb-6">
        <div className="p-3 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-400 mr-4 group-hover:scale-110 transition-transform duration-300">
          <Code2 className="text-white" size={24} />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-white">LeetCode Progress</h3>
          <p className="text-slate-400 text-sm">@Vatsal Goil</p>
        </div>
      </div>

      <div className="flex items-center justify-between mb-8">
        {/* Semicircle Progress */}
        <div className="relative flex items-center justify-center">
          <svg
            className="transform -rotate-90"
            width="200"
            height="120"
            viewBox="0 0 200 120"
          >
            {/* Background semicircle */}
            <path
              d="M 20 100 A 90 90 0 0 1 180 100"
              fill="none"
              stroke="#374151"
              strokeWidth="8"
              strokeLinecap="round"
            />
            {/* Progress semicircle */}
            <path
              d="M 20 100 A 90 90 0 0 1 180 100"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${(progressPercentage / 100) * 251.33} 251.33`}
              className="transition-all duration-1000 group-hover:animate-pulse"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute text-center">
            <div className="text-3xl font-bold text-white">{stats.totalSolved}</div>
            <div className="text-sm text-slate-400">Solved</div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-4 ml-8">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-green-400 rounded-full"></div>
            <span className="text-slate-300">Easy: {stats.easySolved}/{stats.easyTotal}</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
            <span className="text-slate-300">Medium: {stats.mediumSolved}/{stats.mediumTotal}</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-red-400 rounded-full"></div>
            <span className="text-slate-300">Hard: {stats.hardSolved}/{stats.hardTotal}</span>
          </div>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-700/50">
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Trophy className="text-yellow-400 mr-2" size={20} />
          </div>
          <div className="text-lg font-semibold text-white">{progressPercentage.toFixed(1)}%</div>
          <div className="text-xs text-slate-400">Completion</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Target className="text-purple-400 mr-2" size={20} />
          </div>
          <div className="text-lg font-semibold text-white">#{stats.ranking.toLocaleString()}</div>
          <div className="text-xs text-slate-400">Ranking</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <TrendingUp className="text-blue-400 mr-2" size={20} />
          </div>
          <div className="text-lg font-semibold text-white">{stats.totalQuestions}</div>
          <div className="text-xs text-slate-400">Total Problems</div>
        </div>
      </div>

      {error && (
        <div className="mt-4 text-xs text-yellow-400 text-center">
          {error} - Updates every 30 minutes
        </div>
      )}
    </div>
  );
};

export default LeetCodeTracker;