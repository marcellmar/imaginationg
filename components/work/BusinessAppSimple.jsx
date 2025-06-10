'use client';

import React from 'react';

const BusinessAppSimple = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">WORK</h1>
      <p className="text-xl mb-8">Business Execution Tracker</p>
      <p className="text-sm text-gray-400">Simple version - No context</p>
      
      <div className="mt-8 space-y-4">
        <button className="px-6 py-3 bg-red-600 text-white font-bold rounded hover:bg-red-700">
          EXECUTE
        </button>
        <p className="text-xs text-gray-500">
          If you can see this, the component is loading correctly.
        </p>
      </div>
    </div>
  );
};

export default BusinessAppSimple;