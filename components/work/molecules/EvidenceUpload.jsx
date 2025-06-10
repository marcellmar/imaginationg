'use client';

import React, { useState, useRef } from 'react';
import Button from '../atoms/Button';

const EvidenceUpload = ({ onSubmit, onCancel, activityName }) => {
  const [evidenceType, setEvidenceType] = useState('file');
  const [evidence, setEvidence] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [impact, setImpact] = useState('');
  const fileInputRef = useRef(null);
  
  const evidenceTypes = [
    { value: 'file', label: 'FILE UPLOAD', placeholder: 'Click to select file from computer...' },
    { value: 'text', label: 'TEXT/URL', placeholder: 'Paste URL, commit hash, or description...' },
    { value: 'screenshot', label: 'SCREENSHOT', placeholder: 'Upload screenshot or paste URL...' },
    { value: 'metric', label: 'METRIC', placeholder: 'Enter metric value (e.g., "10 calls made", "$5k closed")...' },
  ];
  
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
      setEvidence(file.name);
    }
  };
  
  const handleSubmit = () => {
    if (evidenceType === 'file' && uploadedFile) {
      // Convert file to base64 for storage
      const reader = new FileReader();
      reader.onloadend = () => {
        onSubmit({
          type: evidenceType,
          evidence: reader.result,
          fileName: uploadedFile.name,
          fileType: uploadedFile.type,
          fileSize: uploadedFile.size,
          impact: impact.trim(),
          timestamp: new Date().toISOString(),
          activity: activityName
        });
      };
      reader.readAsDataURL(uploadedFile);
    } else if (evidence.trim()) {
      onSubmit({
        type: evidenceType,
        evidence: evidence.trim(),
        impact: impact.trim(),
        timestamp: new Date().toISOString(),
        activity: activityName
      });
    }
  };
  
  const clearFile = () => {
    setUploadedFile(null);
    setEvidence('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  return (
    <div className="w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4">PROVE IT.</h2>
      
      {activityName && (
        <div className="mb-4 p-3 bg-zinc-900 rounded">
          <p className="text-sm text-zinc-400">ACTIVITY</p>
          <p className="font-bold">{activityName}</p>
        </div>
      )}
      
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2 text-zinc-400">
          EVIDENCE TYPE
        </label>
        <div className="flex flex-wrap gap-2 mb-4">
          {evidenceTypes.map(type => (
            <button
              key={type.value}
              onClick={() => {
                setEvidenceType(type.value);
                clearFile();
              }}
              className={`px-3 py-1 text-xs font-bold rounded transition-colors ${
                evidenceType === type.value
                  ? 'bg-work-red text-black'
                  : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2 text-zinc-400">
          EVIDENCE OF COMPLETION
        </label>
        
        {evidenceType === 'file' || evidenceType === 'screenshot' ? (
          <div>
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileSelect}
              accept={evidenceType === 'screenshot' ? 'image/*' : '*'}
              className="hidden"
            />
            
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="w-full p-4 bg-black border-2 border-dashed border-zinc-700 rounded text-center cursor-pointer hover:border-work-red transition-colors"
            >
              {uploadedFile ? (
                <div>
                  <p className="text-white font-bold">{uploadedFile.name}</p>
                  <p className="text-sm text-zinc-400">
                    {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      clearFile();
                    }}
                    className="mt-2 text-xs text-red-400 hover:text-red-300"
                  >
                    Remove File
                  </button>
                </div>
              ) : (
                <div>
                  <p className="text-zinc-400">
                    Click to select {evidenceType === 'screenshot' ? 'screenshot' : 'file'}
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">
                    or drag and drop
                  </p>
                </div>
              )}
            </div>
            
            {evidenceType === 'screenshot' && (
              <div className="mt-2">
                <p className="text-xs text-zinc-500 mb-1">Or paste URL:</p>
                <input
                  type="text"
                  value={evidence}
                  onChange={(e) => setEvidence(e.target.value)}
                  className="w-full p-2 bg-black border border-zinc-700 rounded text-white text-sm focus:border-work-red focus:outline-none"
                  placeholder="https://..."
                />
              </div>
            )}
          </div>
        ) : (
          <textarea
            value={evidence}
            onChange={(e) => setEvidence(e.target.value)}
            className="w-full p-3 bg-black border border-zinc-700 rounded text-white focus:border-work-red focus:outline-none"
            rows="3"
            placeholder={evidenceTypes.find(t => t.value === evidenceType)?.placeholder}
          />
        )}
        
        {!evidence.trim() && !uploadedFile && (
          <p className="text-xs text-work-red mt-1">REQUIRED. NO EVIDENCE = DIDN'T HAPPEN.</p>
        )}
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-bold mb-2 text-zinc-400">
          BUSINESS IMPACT (OPTIONAL)
        </label>
        <textarea
          value={impact}
          onChange={(e) => setImpact(e.target.value)}
          className="w-full p-3 bg-black border border-zinc-700 rounded text-white focus:border-zinc-500 focus:outline-none"
          rows="2"
          placeholder="Revenue generated, time saved, process improved, client satisfied..."
        />
      </div>
      
      <div className="flex gap-4">
        <Button
          onClick={handleSubmit}
          variant="primary"
          disabled={!evidence.trim() && !uploadedFile}
          className="flex-1"
        >
          SUBMIT EVIDENCE
        </Button>
        <Button
          onClick={onCancel}
          variant="secondary"
          className="flex-1"
        >
          ADMIT FAILURE
        </Button>
      </div>
      
      <p className="text-xs text-zinc-500 mt-4 text-center">
        WEAK EVIDENCE WILL BE QUESTIONED.
        MAKE IT UNDENIABLE.
      </p>
    </div>
  );
};

export default EvidenceUpload;