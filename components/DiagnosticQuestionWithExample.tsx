/**
 * Enhanced diagnostic question with industry-specific example
 *
 * This component shows how questions would display with context.
 * The core question remains universal - the example makes it relatable.
 */

import React from 'react';
import { Lightbulb } from 'lucide-react';
import { getQuestionExample } from '../lib/gpi-industry-examples';

interface Props {
  questionId: number;
  question: string;
  dimension: string;
  dimensionLabel: string;
  selectedIndustry: string;
  onAnswer: (answer: 'yes' | 'no') => void;
}

export const DiagnosticQuestionWithExample: React.FC<Props> = ({
  questionId,
  question,
  dimension,
  dimensionLabel,
  selectedIndustry,
  onAnswer,
}) => {
  const example = getQuestionExample(questionId, selectedIndustry);

  return (
    <div className="max-w-xl mx-auto">
      {/* Dimension Label */}
      <div className="text-xs font-mono text-zinc-600 mb-4">
        {dimensionLabel}
      </div>

      {/* Question */}
      <h2 className="text-xl md:text-2xl font-black leading-tight mb-6">
        {question}
      </h2>

      {/* Industry-Specific Example */}
      {example && (
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 mb-8">
          <div className="flex items-start gap-3">
            <Lightbulb size={18} className="text-yellow-500 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-xs font-mono text-zinc-600 mb-1">
                IN {selectedIndustry.toUpperCase()}
              </div>
              <p className="text-sm text-zinc-400">
                {example}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Answer Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => onAnswer('yes')}
          className="border-2 border-green-600 p-6 hover:bg-green-600 transition-all text-center font-black text-lg"
        >
          YES
        </button>
        <button
          onClick={() => onAnswer('no')}
          className="border-2 border-red-600 p-6 hover:bg-red-600 transition-all text-center font-black text-lg"
        >
          NO
        </button>
      </div>
    </div>
  );
};

/**
 * Example of what this looks like:
 *
 * ┌────────────────────────────────────────────────────────┐
 * │  DECISION SPEED                                        │
 * │                                                        │
 * │  Do most decisions happen within 24 hours              │
 * │  of being raised?                                      │
 * │                                                        │
 * │  ┌──────────────────────────────────────────────────┐ │
 * │  │ 💡 IN HEALTHCARE                                  │ │
 * │  │    Protocol changes, staffing adjustments,        │ │
 * │  │    care escalations                               │ │
 * │  └──────────────────────────────────────────────────┘ │
 * │                                                        │
 * │     ┌─────────────┐      ┌─────────────┐             │
 * │     │     YES     │      │     NO      │             │
 * │     └─────────────┘      └─────────────┘             │
 * └────────────────────────────────────────────────────────┘
 *
 * Without example (if none exists for that industry/question):
 *
 * ┌────────────────────────────────────────────────────────┐
 * │  DECISION SPEED                                        │
 * │                                                        │
 * │  Do most decisions happen within 24 hours              │
 * │  of being raised?                                      │
 * │                                                        │
 * │     ┌─────────────┐      ┌─────────────┐             │
 * │     │     YES     │      │     NO      │             │
 * │     └─────────────┘      └─────────────┘             │
 * └────────────────────────────────────────────────────────┘
 */

export default DiagnosticQuestionWithExample;
