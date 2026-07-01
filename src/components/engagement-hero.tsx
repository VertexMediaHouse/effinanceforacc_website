export default function EngagementModelHero() {
    return (
        <div className="relative min-h-[810px] lg:min-h-[640px] overflow-hidden bg-[#c97a3d]/5 flex items-center">

            {/* Base background */}
            <div className="absolute inset-0 bg-[#f7f1eb]" />

            {/* Soft Gradient */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(circle at 70% 15%, rgba(201,122,61,.12), transparent 45%), linear-gradient(180deg,#f7f1eb 0%,#f3ece5 100%)",
                }}
            />

            {/* Patterns */}
            <div
                className="absolute inset-0 opacity-[0.1]"
                style={{
                    backgroundImage: `
                    linear-gradient(
                        45deg,
                        rgba(0,0,0,.12) 25%,
                        transparent 25%,
                        transparent 50%,
                        rgba(0,0,0,.12) 50%,
                        rgba(0,0,0,.12) 75%,
                        transparent 75%,
                        transparent
                    )`,
                    backgroundSize: "120px 120px",
                }}
            />
            <div
                className="absolute inset-0 opacity-[0.1]"
                style={{
                    backgroundImage: `
                    linear-gradient(
                        -45deg,
                        rgba(0,0,0,.12) 25%,
                        transparent 25%,
                        transparent 50%,
                        rgba(0,0,0,.12) 50%,
                        rgba(0,0,0,.12) 75%,
                        transparent 75%,
                        transparent
                    )`,
                    backgroundSize: "120px 120px",
                }}
            />

            {/* Noise */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.12]">
                <svg className="w-full h-full" preserveAspectRatio="none">
                    <filter id="noiseFilter">
                        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" />
                        <feColorMatrix type="saturate" values="0" />
                        <feComponentTransfer>
                            <feFuncA type="table" tableValues="0 0.18" />
                        </feComponentTransfer>
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noiseFilter)" fill="white" />
                </svg>
            </div>

            {/* Vignette */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(circle, transparent 55%, rgba(0,0,0,.05) 100%)",
                }}
            />

            {/* Content wrapper */}
            <div className="relative z-15 mt-[35px] max-w-[1320px] mx-auto w-full px-6 lg:px-8 flex items-center">

                <section className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full">

                    {/* LEFT CONTENT — FIXED CENTERING */}
                    <div className="flex-1 max-w-[540px] flex flex-col justify-center">

                        <div className="text-[#8a4726] text-xs font-bold tracking-[0.15em] uppercase mb-4">
                            EXCLUSIVE FINANCE APPS
                        </div>

                        <h1 className="text-[40px] md:text-[48px] lg:text-[52px] leading-[1.15] font-extrabold text-[#1f1f1f] mb-4">
                            Transform
<span className="inline-flex items-center justify-center border border-white/20 rounded-full w-16 h-[42px] mx-2 bg-gradient-to-r from-[#884c76] to-[#f38c24] backdrop-blur-sm shadow-md align-middle">                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#ffffffff"
                                    strokeWidth="2"
                                >
                                    <path d="M5 12h14M15 5l7 7-7 7" />
                                </svg>
                            </span>
                            Your <br />
                            Business With Expert <br />
                            Accountant
                        </h1>

                        <p className="text-[15px] leading-[1.6] text-[#1f1f1f]/80 mb-6 max-w-[480px]">
                            Finance recover a moving experience like no other at Outgrid beyond merely transporting items of manual tracking spreadsheets shoe.
                        </p>

                        <button
                            className="max-w-fit text-white px-6 py-3 rounded-md font-bold text-[15px] flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                            style={{
                                background:
                                    "linear-gradient(135deg, #884c76 0%, #a35765 50%, #f38c24 100%)",
                            }}
                        >
                            Take Our Services
                        </button>
                    </div>

                    {/* RIGHT CONTENT — FIXED IMAGE + DOODLES */}
                    <div className="flex-[1.1] relative h-[600px] flex items-center justify-center">

                        {/* DOODLE 1 — moved further out */}
                        <div className="absolute left-[-20px] top-10 w-40 h-40 opacity-60 hidden md:block animate-float-1">
                            <svg viewBox="0 0 240 240" fill="none" stroke="#5a6e79" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 40l-8-12M38 22V8M14 62H2" opacity="0.6" strokeWidth="1.5" />
                                <g transform="rotate(-5 60 120)">
                                    <path d="M30 70v16c0 8 18 14 40 14s40-6 40-14V70" />
                                    <path d="M30 86v16c0 8 18 14 40 14s40-6 40-14V86" />
                                    <path d="M30 102v16c0 8 18 14 40 14s40-6 40-14v-16" />
                                    <ellipse cx="70" cy="70" rx="40" ry="15" fill="#f7f1eb" fillOpacity="0.6" />
                                    <ellipse cx="70" cy="70" rx="33" ry="12" strokeWidth="1" strokeDasharray="4 3" />
                                </g> <g transform="translate(130,45) rotate(12)">
                                    <circle cx="40" cy="40" r="34" fill="#f7f1eb" fillOpacity="0.7" strokeWidth="3" />
                                    <text x="30" y="51" fontSize="34" fontFamily="serif" fontWeight="900" fill="#5a6e79">$</text>
                                    <path d="M6 46a34 34 0 0 0 63 18" strokeWidth="1.5" /> </g> <g transform="translate(110,115) rotate(15)">
                                    <path d="M10 50v14c0 7 16 12 35 12s35-5 35-12V50" />
                                    <ellipse cx="45" cy="50" rx="35" ry="13" fill="#f7f1eb" fillOpacity="0.5" />
                                </g> <path d="M195 160c8 3 18 12 8 22" strokeWidth="1.5" opacity="0.6" />
                            </svg>

                        </div>

                        {/* DOODLE 2 — moved further out */}
                        <div className="absolute right-[-10px] top-20 w-36 h-36 opacity-60 hidden md:block animate-float-2">
                            <svg viewBox="0 0 200 200" fill="none" stroke="#5a6e79" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M25 25v120h130" strokeWidth="3" />
                                <path d="M25 55h115M25 85h115M25 115h115" strokeDasharray="4 5" strokeWidth="1" opacity="0.4" />
                                <g> <rect x="40" y="65" width="22" height="80" fill="#f7f1eb" fillOpacity="0.5" />
                                    <path d="M40 65l10-8h22l-10 8Z" fill="#e0d7ce" fillOpacity="0.5" />
                                    <path d="M62 65l10-8v80l-10 8Z" />
                                </g>
                                <g>
                                    <rect x="78" y="85" width="22" height="60" fill="#f7f1eb" fillOpacity="0.5" />
                                    <path d="M78 85l10-8h22l-10 8Z" fill="#e0d7ce" fillOpacity="0.5" />
                                    <path d="M100 85l10-8v60l-10 8Z" />
                                </g>
                                <g>
                                    <rect x="116" y="105" width="22" height="40" fill="#f7f1eb" fillOpacity="0.5" />
                                    <path d="M116 105l10-8h22l-10 8Z" fill="#e0d7ce" fillOpacity="0.5" />

                                    <path d="M138 105l10-8v40l-10 8Z" />
                                </g>
                                <path d="M145 130c5-5 12-15 20-10" strokeWidth="1.5" opacity="0.5" />
                            </svg>                        </div>

                        {/* IMAGE — FIXED BOTTOM GAP */}
                        <div className="relative w-full h-full flex items-end justify-center">
                            <img
                                src="assets/homehero.png"
                                alt=""
                                className="w-[90%] max-h-[610px] object-contain object-bottom"
                            />
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
}