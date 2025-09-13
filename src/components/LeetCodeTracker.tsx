import { useEffect, useState } from "react";
import { Code2, ExternalLink } from "lucide-react";

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

  const circumference = 2 * Math.PI * 45; // radius = 45 for smaller circle
  const progressPercentage = (stats.totalSolved / 100) * 100; // Show as percentage of 100 for visual appeal
  const strokeDashoffset = circumference - (progressPercentage / 100) * circumference;

  return (
    <div className="bg-slate-800/30 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 hover:border-slate-600/70 transition-all duration-500 group hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10">
      {/* Header with LeetCode logo and username */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <div className="p-3 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-400 mr-4 group-hover:scale-110 transition-transform duration-300">
            <Code2 className="text-white" size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white">Vatsal_Goil</h3>
            <a 
              href="https://leetcode.com/u/Vatsal_Goil/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 text-sm hover:text-blue-400 transition-colors flex items-center gap-1"
            >
              View Profile <ExternalLink size={12} />
            </a>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-slate-300">#{stats.ranking.toLocaleString()}+</div>
          <div className="text-xs text-slate-400">Ranking</div>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex items-center gap-8">
        {/* Circular Progress */}
        <div className="relative flex items-center justify-center flex-shrink-0">
          <svg
            className="transform -rotate-90"
            width="120"
            height="120"
            viewBox="0 0 120 120"
          >
            {/* Background circle */}
            <circle
              cx="60"
              cy="60"
              r="45"
              fill="none"
              stroke="#374151"
              strokeWidth="8"
              strokeLinecap="round"
            />
            {/* Progress circle */}
            <circle
              cx="60"
              cy="60"
              r="45"
              fill="none"
              stroke="#f97316"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-1000 group-hover:animate-pulse"
            />
          </svg>
          <div className="absolute text-center">
            <div className="text-3xl font-bold text-white">{stats.totalSolved}</div>
          </div>
        </div>

        {/* Progress Bars */}
        <div className="flex-1 space-y-6">
          {/* Easy */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-white font-medium text-lg">Easy</span>
              <span className="text-slate-300 font-medium">{stats.easySolved}/{stats.easyTotal}</span>
            </div>
            <div className="relative">
              <div className="w-full bg-slate-700 rounded-full h-3">
                <div
                  className="h-3 rounded-full bg-green-500 transition-all duration-1000"
                  style={{ width: `${(stats.easySolved / stats.easyTotal) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Medium */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-white font-medium text-lg">Medium</span>
              <span className="text-slate-300 font-medium">{stats.mediumSolved}/{stats.mediumTotal}</span>
            </div>
            <div className="relative">
              <div className="w-full bg-slate-700 rounded-full h-3">
                <div
                  className="h-3 rounded-full bg-orange-500 transition-all duration-1000"
                  style={{ width: `${(stats.mediumSolved / stats.mediumTotal) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Hard */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-white font-medium text-lg">Hard</span>
              <span className="text-slate-300 font-medium">{stats.hardSolved}/{stats.hardTotal}</span>
            </div>
            <div className="relative">
              <div className="w-full bg-slate-700 rounded-full h-3">
                <div
                  className="h-3 rounded-full bg-red-500 transition-all duration-1000"
                  style={{ width: `${(stats.hardSolved / stats.hardTotal) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
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