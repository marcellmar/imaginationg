import Link from 'next/link';

interface RelatedItem {
  href: string;
  title: string;
  description: string;
  color?: 'red' | 'yellow' | 'green';
}

interface RelatedContentProps {
  title?: string;
  items: RelatedItem[];
}

const RelatedContent: React.FC<RelatedContentProps> = ({
  title = "Related Content",
  items
}) => {
  return (
    <div className="my-16 border-t border-stone-200 pt-12">
      <h2 className="text-2xl font-black mb-8">{title}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.href}
              className="border border-stone-200 p-6 hover:border-stone-400 transition-all group bg-white"
            >
              <h3 className="font-bold mb-3 group-hover:text-red-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-stone-500">
                {item.description}
              </p>
              <span className="inline-block mt-4 text-xs font-bold text-stone-900 group-hover:text-red-600 transition-colors">
                EXPLORE →
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedContent;
