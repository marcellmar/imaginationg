import React, { useState } from 'react';
import { Check, AlertTriangle, ArrowRight, Award, BarChart } from 'lucide-react';

interface MomentumData {
  decisionsLastWeek: number;
  meetingsCanceled: number;
  projectsShipped: number;
  projectsKilled: number;
  hoursInFocus: number;
  driftSignalsDetected: number;
}

const defaultData: MomentumData = {
  decisionsLastWeek: 0,
  meetingsCanceled: 0,
  projectsShipped: 0,
  projectsKilled: 0,
  hoursInFocus: 0,
  driftSignalsDetected: 0
};

const MomentumTracker: React.FC = () => {
  const [data, setData] = useState<MomentumData>(defaultData);
  const [submitted, setSubmitted] = useState(false);
  const [showDriftWarning, setShowDriftWarning] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: parseInt(value) || 0
    });
  };

  const calculateMomentumScore = (data: MomentumData): number => {
    // Simple algorithm to calculate momentum score
    const positives = data.decisionsLastWeek + data.meetingsCanceled + data.projectsShipped + 
                      data.projectsKilled + data.hoursInFocus;
    const negatives = data.driftSignalsDetected * 2;
    
    const rawScore = positives - negatives;
    return Math.max(0, Math.min(100, rawScore * 5)); // Scale to 0-100
  };

  const getMomentumStatus = (score: number): { label: string; color: string } => {
    if (score >= 80) return { label: "Unstoppable", color: "text-green-500" };
    if (score >= 60) return { label: "Strong Momentum", color: "text-blue-500" };
    if (score >= 40) return { label: "Building Momentum", color: "text-yellow-500" };
    if (score >= 20) return { label: "Early Signs of Movement", color: "text-orange-500" };
    return { label: "Drift Warning", color: "text-red-500" };
  };

  const getRecommendedActions = (data: MomentumData): string[] => {
    const actions = [];
    
    if (data.decisionsLastWeek < 5) {
      actions.push("Schedule a daily 15-minute decision sprint");
    }
    
    if (data.meetingsCanceled < 1) {
      actions.push("Cancel your least productive recurring meeting this week");
    }
    
    if (data.projectsShipped < 1) {
      actions.push("Ship something small within the next 48 hours");
    }
    
    if (data.hoursInFocus < 4) {
      actions.push("Block 2 hours of uninterrupted focus time daily");
    }
    
    if (data.driftSignalsDetected > 2) {
      actions.push("Book a Clarity Catalyst Call to break persistent drift patterns");
      setShowDriftWarning(true);
    }
    
    return actions.length > 0 ? actions : ["Great work! Keep tracking your metrics weekly to maintain momentum."];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const momentumScore = calculateMomentumScore(data);
  const momentumStatus = getMomentumStatus(momentumScore);
  const recommendedActions = getRecommendedActions(data);

  return (
    <div className="bg-black rounded-lg shadow-xl overflow-hidden">
      <div className="bg-zinc-900 p-6">
        <h2 className="text-2xl font-bold mb-2">Momentum Tracker</h2>
        <p className="text-gray-400">Track your key movement metrics to prevent drift</p>
      </div>
      
      {!submitted ? (
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-gray-400 mb-2">Decisions Made Last Week</label>
              <input
                type="number"
                name="decisionsLastWeek"
                value={data.decisionsLastWeek}
                onChange={handleInputChange}
                min="0"
                className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-2 text-white focus:outline-none focus:border-white"
              />
            </div>
            
            <div>
              <label className="block text-gray-400 mb-2">Meetings Canceled</label>
              <input
                type="number"
                name="meetingsCanceled"
                value={data.meetingsCanceled}
                onChange={handleInputChange}
                min="0"
                className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-2 text-white focus:outline-none focus:border-white"
              />
            </div>
            
            <div>
              <label className="block text-gray-400 mb-2">Projects/Features Shipped</label>
              <input
                type="number"
                name="projectsShipped"
                value={data.projectsShipped}
                onChange={handleInputChange}
                min="0"
                className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-2 text-white focus:outline-none focus:border-white"
              />
            </div>
            
            <div>
              <label className="block text-gray-400 mb-2">Projects Killed</label>
              <input
                type="number"
                name="projectsKilled"
                value={data.projectsKilled}
                onChange={handleInputChange}
                min="0"
                className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-2 text-white focus:outline-none focus:border-white"
              />
            </div>
            
            <div>
              <label className="block text-gray-400 mb-2">Hours in Deep Focus Mode</label>
              <input
                type="number"
                name="hoursInFocus"
                value={data.hoursInFocus}
                onChange={handleInputChange}
                min="0"
                className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-2 text-white focus:outline-none focus:border-white"
              />
            </div>
            
            <div>
              <label className="block text-gray-400 mb-2">Drift Signals Detected</label>
              <input
                type="number"
                name="driftSignalsDetected"
                value={data.driftSignalsDetected}
                onChange={handleInputChange}
                min="0"
                className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-2 text-white focus:outline-none focus:border-white"
              />
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full bg-white text-black py-3 font-medium rounded hover:bg-gray-200 transition-all"
          >
            Calculate Momentum Score
          </button>
        </form>
      ) : (
        <div className="p-6">
          <div className="flex flex-col items-center mb-8">
            <div className="text-4xl font-bold mb-2">{momentumScore.toFixed(0)}</div>
            <div className={`text-xl font-medium ${momentumStatus.color}`}>
              {momentumStatus.label}
            </div>
          </div>
          
          <div className="bg-zinc-900 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4">This Week's Actions</h3>
            <ul className="space-y-3">
              {recommendedActions.map((action, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ArrowRight size={20} className="text-green-500 mt-1 flex-shrink-0" />
                  <span>{action}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {showDriftWarning && (
            <div className="bg-red-900 bg-opacity-30 border border-red-800 p-4 rounded-lg mb-8 flex items-start gap-4">
              <AlertTriangle size={24} className="text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-1">Drift Alert</h4>
                <p className="text-gray-300">You're showing multiple drift signals. Consider booking a Drift Intervention.</p>
                <a 
                  href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-red-400 hover:text-red-300 inline-flex items-center gap-1 mt-2"
                >
                  Book Intervention <ArrowRight size={16} />
                </a>
              </div>
            </div>
          )}
          
          <div className="flex justify-between">
            <button
              onClick={() => setSubmitted(false)}
              className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-all"
            >
              Update Metrics
            </button>
            
            <button
              onClick={() => window.print()}
              className="bg-zinc-800 px-4 py-2 rounded hover:bg-zinc-700 transition-colors"
            >
              Export Report
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MomentumTracker;