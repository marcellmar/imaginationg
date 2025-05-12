import React from 'react';

const DriftCheatSheet = () => {
  return (
    <div className="bg-zinc-900 p-8 rounded-lg shadow-xl max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">🚀 5 Signals You're Drifting Instead of Moving</h2>
      <p className="text-gray-300 text-center mb-8">
        A quick diagnostic to spot momentum killers in your project, business, or team.
      </p>
      
      <div className="space-y-8">
        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="text-xl font-bold mb-2">1. Meetings Multiply, Outcomes Disappear</h3>
          <p className="text-gray-300 mb-1">If your calendar is full but your checklist is empty...</p>
          <p className="text-red-400 font-bold">→ You're drifting.</p>
        </div>
        
        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="text-xl font-bold mb-2">2. You're Collecting Insights, Not Decisions</h3>
          <p className="text-gray-300 mb-1">Endless reports, no clear next steps?</p>
          <p className="text-red-400 font-bold">→ You're in data fog, not movement.</p>
        </div>
        
        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="text-xl font-bold mb-2">3. Everything Feels 'Almost Ready'... Forever</h3>
          <p className="text-gray-300 mb-1">Perfection is the enemy of momentum.</p>
          <p className="text-red-400 font-bold">→ You're polishing, not pushing.</p>
        </div>
        
        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="text-xl font-bold mb-2">4. Your Team Asks for Permission, Not Accountability</h3>
          <p className="text-gray-300 mb-1">When people wait for directives instead of making moves...</p>
          <p className="text-red-400 font-bold">→ You're managing, not mobilizing.</p>
        </div>
        
        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="text-xl font-bold mb-2">5. Your Energy is Scattered Across Too Many 'Nice to Haves'</h3>
          <p className="text-gray-300 mb-1">Busyness ≠ progress.</p>
          <p className="text-red-400 font-bold">→ You're stuck in noise, not clarity.</p>
        </div>
      </div>
      
      <div className="mt-8 p-6 bg-black rounded-lg">
        <h3 className="text-xl font-bold mb-4 text-green-400">✅ IMAGINATION G's Rule of Thumb:</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>Movement beats management.</li>
          <li>Clarity kills drift.</li>
          <li>Build rhythm, not rigidity.</li>
        </ul>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4 text-center">🎯 Quick Self-Check:</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-zinc-700">
                <th className="text-left py-3 px-4 font-bold">Signal</th>
                <th className="text-left py-3 px-4 font-bold">Impact</th>
                <th className="text-left py-3 px-4 font-bold">Shift</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-zinc-800">
                <td className="py-3 px-4">Meetings with no decisions</td>
                <td className="py-3 px-4 text-red-400">Stalled energy</td>
                <td className="py-3 px-4 text-green-400">Anchor every meeting to action</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-3 px-4">Endless 'research'</td>
                <td className="py-3 px-4 text-red-400">Paralysis</td>
                <td className="py-3 px-4 text-green-400">Set a decision date and ship</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-3 px-4">Over-polishing MVP</td>
                <td className="py-3 px-4 text-red-400">Missed market windows</td>
                <td className="py-3 px-4 text-green-400">Launch ugly, learn fast</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-3 px-4">Waiting for approval</td>
                <td className="py-3 px-4 text-red-400">Friction buildup</td>
                <td className="py-3 px-4 text-green-400">Design systems that empower moves</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Scattered energy</td>
                <td className="py-3 px-4 text-red-400">Burnout risk</td>
                <td className="py-3 px-4 text-green-400">Pick 1-3 signals that matter most now</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="mt-8 text-center text-sm text-gray-500">
        © IMAGINATION G - Marcus Davis, Founder
      </div>
    </div>
  );
};

export default DriftCheatSheet;