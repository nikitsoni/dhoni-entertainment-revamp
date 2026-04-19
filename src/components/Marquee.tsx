interface MarqueeStripProps {
  items?: string[];
  bg?: string;
  textColor?: string;
  slow?: boolean;
}

const DEFAULT_ITEMS = [
  "Feature Films",
  "Documentaries",
  "Web Series",
  "Short Films",
  "Commercials",
  "Original Content",
  "Co-productions",
  "Brand Films",
];

export default function MarqueeStrip({
  items = DEFAULT_ITEMS,
  bg = "bg-brand-red",
  textColor = "text-white",
  slow = false,
}: MarqueeStripProps) {
  // Duplicate 4x to ensure seamless fill at any viewport width
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className={`overflow-hidden py-[14px] ${bg} relative`}>
      <div
        className={`flex whitespace-nowrap ${
          slow ? "animate-marquee-slow" : "animate-marquee"
        }`}
        style={{ width: "max-content" }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className={`inline-flex items-center gap-0 ${textColor} text-[11px] font-sans tracking-[0.25em] uppercase`}
          >
            <span className="px-5">{item}</span>
            <span className={`${textColor} opacity-40 text-[8px]`}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
