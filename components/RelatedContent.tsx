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
  const getColorClasses = (color: string = 'red') => {
    const colorMap: Record<string, string> = {
      red: 'border-red-500 text-red-500 hover:bg-red-500',
      yellow: 'border-yellow-500 text-yellow-500 hover:bg-yellow-500',
      green: 'border-green-500 text-green-500 hover:bg-green-500',
    };
    return colorMap[color] || colorMap.red;
  };

  return (
    <div className="my-16 border-t border-zinc-800 pt-12">
      <h2 className="text-2xl font-black mb-8">{title}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, index) => {
          const colorClasses = getColorClasses(item.color);
          return (
            <Link
              key={index}
              href={item.href}
              className={`border ${colorClasses} p-6 hover:text-black transition-all group`}
            >
              <h3 className="font-bold mb-3 group-hover:text-black">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-400 group-hover:text-black">
                {item.description}
              </p>
              <span className="inline-block mt-4 text-xs font-bold">
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