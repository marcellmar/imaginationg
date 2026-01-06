/**
 * Redirect: Five Questions → Career Positioning
 * This tool was merged into Career Positioning
 */

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const FiveQuestionsRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/tools/career-positioning');
  }, [router]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <div className="text-zinc-500 mb-2">Redirecting...</div>
        <div className="text-xs text-zinc-600">
          Five Questions has been merged into Career Positioning
        </div>
      </div>
    </div>
  );
};

export default FiveQuestionsRedirect;
