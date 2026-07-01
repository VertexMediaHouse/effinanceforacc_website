import { useState } from "react";

const items = [
  "Marketing Agency",
  "Let's Talk",
  "Web Design Agency",
  "Modern Technology",
  "Web Development",
];

const Star = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="34"
    height="34"
    viewBox="0 0 41 42"
    fill="none"
    className="mx-10 shrink-0"
  >
    <path
      d="M38.5256 32.4787L30.7455 23.743L41 18.2387L29.5113 16.623L33.8793 5.71875L24.0604 11.9787L20.497 0.773438L16.9396 11.9787L7.1207 5.71875L11.4827 16.623L0 18.2387L10.2485 23.743L2.4744 32.4787L13.8058 30.003L13.3763 41.7734L20.497 32.4787L27.6177 41.7734L27.1881 30.003L38.5256 32.4787Z"
      fill="#333188"
    />
  </svg>
);

function Track({
  hovered,
  setHovered,
}: {
  hovered: string | null;
  setHovered: (val: string | null) => void;
}) {
  return (
    <>
      {items.map((item, i) => (
        <div
          key={i}
          className="flex shrink-0 items-center whitespace-nowrap"
        >
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setHovered(item)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Outline */}
            <span
              className="block font-['Anton'] text-[clamp(58px,6vw,90px)] uppercase leading-[0.9] tracking-[-0.03em] text-transparent"
              style={{
                WebkitTextStroke: "1.5px #333188",
              }}
            >
              {item}
            </span>

            {/* Fill */}
            <span
              className="absolute inset-0 overflow-hidden whitespace-nowrap font-['Anton'] text-[clamp(58px,6vw,90px)] uppercase leading-[0.9] tracking-[-0.03em] text-[#333188]"
              style={{
                clipPath:
                  hovered === item
                    ? "inset(0 0 0 0)"
                    : "inset(0 100% 0 0)",
                transition:
                  "clip-path 700ms cubic-bezier(.22,1,.36,1)",
              }}
            >
              {item}
            </span>
          </div>

          <Star />
        </div>
      ))}
    </>
  );
}

export default function MarqueeSlider() {
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <>
      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <section className="overflow-hidden bg-[#333188]/10 py-10">
        <div
          className="flex w-max"
          style={{
            animation: "marquee 20s linear infinite",
            animationPlayState: paused ? "paused" : "running",
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => {
            setPaused(false);
            setHovered(null);
          }}
        >
          <Track hovered={hovered} setHovered={setHovered} />
          <Track hovered={hovered} setHovered={setHovered} />
        </div>
      </section>
    </>
  );
}