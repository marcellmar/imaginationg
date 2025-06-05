interface AnswerBoxProps {
  question: string;
  answer: string;
  schema?: boolean;
}

const AnswerBox: React.FC<AnswerBoxProps> = ({ question, answer, schema = true }) => {
  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Question",
              "name": question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": answer,
                "dateCreated": new Date().toISOString(),
                "author": {
                  "@type": "Organization",
                  "name": "IMAGINATION G",
                  "@id": "https://www.imaginationg.studio/#organization"
                }
              }
            })
          }}
        />
      )}
      
      <div 
        className="answer-box bg-zinc-900 border-2 border-red-500 p-6 mb-8"
        itemScope 
        itemType="https://schema.org/Answer"
      >
        <div className="flex items-start gap-3">
          <span className="text-red-500 text-2xl font-black">→</span>
          <div>
            <p className="quick-answer text-lg font-bold text-white mb-2" itemProp="text">
              <span className="text-red-500">Quick Answer:</span> {answer}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnswerBox;