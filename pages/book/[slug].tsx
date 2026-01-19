/**
 * Dynamic Chapter Page
 * Renders individual book chapters from Notion
 */

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';

interface NotionRichText {
  plain_text: string;
  annotations?: {
    bold?: boolean;
    italic?: boolean;
    strikethrough?: boolean;
    underline?: boolean;
    code?: boolean;
  };
  href?: string | null;
}

interface NotionBlock {
  id: string;
  type: string;
  [key: string]: any;
}

interface ChapterData {
  id: string;
  order: number;
  title: string;
  slug: string;
  status: string;
  wordCount: number;
  voiceCheck: boolean;
  anchorStory: string;
  keyConcepts: string[];
  lastUpdated: string | null;
  blocks: NotionBlock[];
}

// Render rich text with annotations
const RichText = ({ richText }: { richText: NotionRichText[] }) => {
  if (!richText || richText.length === 0) return null;

  return (
    <>
      {richText.map((text, i) => {
        let content: React.ReactNode = text.plain_text;

        if (text.annotations?.bold) {
          content = <strong key={`b-${i}`}>{content}</strong>;
        }
        if (text.annotations?.italic) {
          content = <em key={`i-${i}`}>{content}</em>;
        }
        if (text.annotations?.code) {
          content = <code key={`c-${i}`} className="bg-zinc-800 px-1 py-0.5 rounded text-red-400">{content}</code>;
        }
        if (text.href) {
          content = <a key={`a-${i}`} href={text.href} className="text-red-500 hover:underline" target="_blank" rel="noopener noreferrer">{content}</a>;
        }

        return <span key={i}>{content}</span>;
      })}
    </>
  );
};

// Render a single Notion block
const NotionBlockRenderer = ({ block }: { block: NotionBlock }) => {
  const { type } = block;
  const blockContent = block[type];

  switch (type) {
    case 'heading_1':
      return (
        <h1 className="text-4xl md:text-5xl font-black mt-16 mb-8 text-white">
          <RichText richText={blockContent.rich_text} />
        </h1>
      );

    case 'heading_2':
      return (
        <h2 className="text-2xl md:text-3xl font-black mt-12 mb-6 text-white border-l-4 border-red-600 pl-4">
          <RichText richText={blockContent.rich_text} />
        </h2>
      );

    case 'heading_3':
      return (
        <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-zinc-200">
          <RichText richText={blockContent.rich_text} />
        </h3>
      );

    case 'paragraph':
      if (!blockContent.rich_text || blockContent.rich_text.length === 0) {
        return <div className="h-4" />;
      }
      return (
        <p className="text-lg text-zinc-300 leading-relaxed mb-6">
          <RichText richText={blockContent.rich_text} />
        </p>
      );

    case 'bulleted_list_item':
      return (
        <li className="text-lg text-zinc-300 leading-relaxed mb-2 ml-6 list-disc">
          <RichText richText={blockContent.rich_text} />
        </li>
      );

    case 'numbered_list_item':
      return (
        <li className="text-lg text-zinc-300 leading-relaxed mb-2 ml-6 list-decimal">
          <RichText richText={blockContent.rich_text} />
        </li>
      );

    case 'quote':
      return (
        <blockquote className="border-l-4 border-yellow-500 pl-6 py-2 my-8 bg-zinc-900/50 rounded-r-lg">
          <p className="text-xl text-zinc-200 italic">
            <RichText richText={blockContent.rich_text} />
          </p>
        </blockquote>
      );

    case 'callout':
      const emoji = blockContent.icon?.emoji || '💡';
      const color = blockContent.color || 'gray_background';

      // Map Notion colors to Tailwind
      const colorMap: { [key: string]: string } = {
        'yellow_background': 'bg-yellow-950/30 border-yellow-600',
        'red_background': 'bg-red-950/30 border-red-600',
        'blue_background': 'bg-blue-950/30 border-blue-600',
        'green_background': 'bg-green-950/30 border-green-600',
        'gray_background': 'bg-zinc-900 border-zinc-700',
        'default': 'bg-zinc-900 border-zinc-700',
      };

      const bgClass = colorMap[color] || colorMap['default'];

      return (
        <div className={`p-6 my-8 rounded-lg border-l-4 ${bgClass}`}>
          <div className="flex items-start gap-4">
            <span className="text-2xl">{emoji}</span>
            <p className="text-lg text-zinc-200 font-medium leading-relaxed">
              <RichText richText={blockContent.rich_text} />
            </p>
          </div>
        </div>
      );

    case 'divider':
      return <hr className="border-zinc-800 my-12" />;

    case 'code':
      return (
        <pre className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 my-6 overflow-x-auto">
          <code className="text-sm text-zinc-300 font-mono">
            <RichText richText={blockContent.rich_text} />
          </code>
        </pre>
      );

    default:
      // Fallback for unknown block types
      console.log('Unknown block type:', type);
      return null;
  }
};

// Group consecutive list items
const groupListItems = (blocks: NotionBlock[]): (NotionBlock | NotionBlock[])[] => {
  const result: (NotionBlock | NotionBlock[])[] = [];
  let currentList: NotionBlock[] = [];
  let currentListType: string | null = null;

  blocks.forEach((block) => {
    if (block.type === 'bulleted_list_item' || block.type === 'numbered_list_item') {
      if (currentListType === block.type) {
        currentList.push(block);
      } else {
        if (currentList.length > 0) {
          result.push(currentList);
        }
        currentList = [block];
        currentListType = block.type;
      }
    } else {
      if (currentList.length > 0) {
        result.push(currentList);
        currentList = [];
        currentListType = null;
      }
      result.push(block);
    }
  });

  if (currentList.length > 0) {
    result.push(currentList);
  }

  return result;
};

const ChapterPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [chapter, setChapter] = useState<ChapterData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchChapter = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/chapters/${slug}`);

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || 'Failed to load chapter');
        }

        const data = await response.json();
        setChapter(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchChapter();
  }, [slug]);

  // Parse chapter number from slug for navigation
  const currentChapter = typeof slug === 'string' && slug.startsWith('chapter-')
    ? parseInt(slug.replace('chapter-', ''), 10)
    : null;

  const prevChapter = currentChapter && currentChapter > 1 ? currentChapter - 1 : null;
  const nextChapter = currentChapter && currentChapter < 16 ? currentChapter + 1 : null;

  if (loading) {
    return (
      <>
        <SEOHead
          title="Loading Chapter... | The Growing Pains Index"
          description="Loading chapter content..."
        />
        <div className="min-h-screen bg-black text-white">
          <Navigation />
          <div className="pt-24 px-6">
            <div className="max-w-3xl mx-auto">
              <div className="animate-pulse">
                <div className="h-12 bg-zinc-800 rounded mb-4 w-1/3" />
                <div className="h-8 bg-zinc-800 rounded mb-8 w-2/3" />
                <div className="space-y-4">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-4 bg-zinc-800 rounded w-full" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <SEOHead
          title="Chapter Not Available | The Growing Pains Index"
          description="This chapter is not yet available."
        />
        <div className="min-h-screen bg-black text-white">
          <Navigation />
          <div className="pt-24 px-6">
            <div className="max-w-3xl mx-auto text-center py-20">
              <div className="text-6xl mb-6">🔒</div>
              <h1 className="text-3xl font-black mb-4">Chapter Not Available</h1>
              <p className="text-zinc-400 mb-8">{error}</p>
              <Link
                href="/book"
                className="inline-block bg-red-600 px-6 py-3 font-bold hover:bg-red-700 transition-colors"
              >
                BACK TO TABLE OF CONTENTS
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (!chapter) return null;

  // Group blocks for proper list rendering
  const groupedBlocks = groupListItems(chapter.blocks);

  // Extract clean title (remove "Chapter N:" prefix for display)
  const displayTitle = chapter.title.replace(/^Chapter \d+:\s*/, '');

  return (
    <>
      <SEOHead
        title={`${chapter.title} | The Growing Pains Index`}
        description={chapter.anchorStory || `Read Chapter ${chapter.order} of The Growing Pains Index`}
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation />

        {/* Chapter Header */}
        <header className="pt-24 pb-8 px-6 border-b border-zinc-900">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-8"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
              Back to Table of Contents
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-mono text-zinc-500">CHAPTER {chapter.order}</span>
              {chapter.voiceCheck && (
                <span className="text-xs bg-green-900/50 text-green-400 px-2 py-1 rounded font-mono">
                  VOICE CHECK ✓
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-black mb-4">{displayTitle}</h1>

            {chapter.keyConcepts.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {chapter.keyConcepts.map((concept) => (
                  <span
                    key={concept}
                    className="text-xs bg-zinc-900 border border-zinc-800 px-2 py-1 rounded text-zinc-400"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center gap-4 mt-6 text-sm text-zinc-500">
              <span>{chapter.wordCount.toLocaleString()} words</span>
              <span>~{Math.ceil(chapter.wordCount / 250)} min read</span>
            </div>
          </div>
        </header>

        {/* Chapter Content */}
        <article className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            {groupedBlocks.map((item, index) => {
              // Handle grouped list items
              if (Array.isArray(item)) {
                const listType = item[0].type;
                const ListTag = listType === 'numbered_list_item' ? 'ol' : 'ul';
                return (
                  <ListTag key={index} className="my-6">
                    {item.map((block) => (
                      <NotionBlockRenderer key={block.id} block={block} />
                    ))}
                  </ListTag>
                );
              }
              return <NotionBlockRenderer key={item.id} block={item} />;
            })}
          </div>
        </article>

        {/* Chapter Navigation */}
        <nav className="py-12 px-6 border-t border-zinc-900">
          <div className="max-w-3xl mx-auto flex justify-between items-center">
            {prevChapter ? (
              <Link
                href={`/book/chapter-${prevChapter}`}
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                <span>Chapter {prevChapter}</span>
              </Link>
            ) : (
              <div />
            )}

            <Link
              href="/book"
              className="text-zinc-500 hover:text-white transition-colors font-mono text-sm"
            >
              TABLE OF CONTENTS
            </Link>

            {nextChapter ? (
              <Link
                href={`/book/chapter-${nextChapter}`}
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              >
                <span>Chapter {nextChapter}</span>
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </nav>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-black mb-4">GET CHAPTERS AS THEY DROP</h2>
            <p className="text-zinc-400 mb-6">
              Be the first to read each new chapter. No spam. Just signal.
            </p>
            <Link
              href="/book#subscribe"
              className="inline-block bg-red-600 px-6 py-3 font-bold hover:bg-red-700 transition-colors"
            >
              SUBSCRIBE FOR UPDATES
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default ChapterPage;
