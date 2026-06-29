import Navbar from "./navbar";

export default function HomeHero() {
    return (
        <div className="relative min-h-screen bg-bg overflow-hidden font-sans">

            {/* SVG noise texture in orange tones */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
                <filter id="orange-noise">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.65"
                        numOctaves="4"
                        stitchTiles="stitch"
                    />
                    <feColorMatrix
                        type="matrix"
                        values="0.8 0 0 0 0.51
                                0.3 0 0 0 0.29
                                0   0 0 0 0.14
                                0   0 0 0.08 0"
                    />
                </filter>
                <rect width="100%" height="100%" filter="url(#orange-noise)" />
            </svg>

            <Navbar />

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

                {/* Hero Section */}
                <section className="flex flex-col lg:flex-row items-center justify-between pt-10 pb-14 relative">

                    {/* Left Content */}
                    <div className="flex-1 max-w-[650px] relative">
                        <div className="text-accent text-sm font-bold tracking-[0.15em] uppercase mb-6 flex items-center gap-2">
                            EXCLUSIVE FINANCE APPS
                        </div>

                        <h1 className="text-[64px] leading-[1.1] font-extrabold text-text-primary mb-6 drop-shadow-sm">
                            Transform
                            <span className="inline-flex items-center justify-center border-2 border-accent rounded-full w-24 h-[60px] mx-4 align-middle bg-white shadow-brand">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M5 12h14M15 5l7 7-7 7" /></svg>
                            </span>
                            Your <br />
                            Business With Expert <br />
                            Accountant
                        </h1>

                        <p className="text-[17px] leading-[1.7] text-text-secondary mb-10 max-w-[540px]">
                            Finance recover a moving experience like no other at Outgrid beyond merely transporting items of manual tracking spreadsheets shoe.
                        </p>

                        <button className="bg-brand text-white px-8 py-4 rounded-full font-bold text-[16px] flex items-center gap-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-brand hover:bg-[#b8662f] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand">
                            Take Our Services
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </button>
                    </div>

                    {/* Right Content (Image Placeholder & Floating Elements) */}
                    <div className="flex-1 relative flex justify-center items-center h-[700px] w-full mt-12 lg:mt-0">

                        {/* Main Image Placeholder */}
                        <div className="w-[450px] h-[650px] rounded-b-full overflow-hidden relative z-10 flex items-end justify-center">
                            <div className="w-full h-full bg-black/5 rounded-b-[200px] border-4 border-white border-dashed flex items-center justify-center text-[#556987] font-medium text-lg">
                                [ Main Image Placeholder ]
                            </div>
                        </div>

                        {/* Floating Coins & Graph Doodle */}
                        <div className="absolute top-[20%] -left-[10%] lg:-left-[20%] z-20" style={{ animation: 'bounce 4s infinite' }}>
                            <svg width="220" height="160" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="-rotate-6 opacity-90 drop-shadow-md">
                                <g stroke="#1a2b3c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="#ffffff">
                                    <g transform="translate(30, 40)">
                                        <ellipse cx="40" cy="70" rx="30" ry="10" fill="#f8f9fa" />
                                        <path d="M10 70 v-10 a30 10 0 0 0 60 0 v10" fill="none" />
                                        <ellipse cx="40" cy="60" rx="30" ry="10" fill="#f8f9fa" />
                                        <path d="M10 60 v-10 a30 10 0 0 0 60 0 v10" fill="none" />
                                        <ellipse cx="40" cy="50" rx="30" ry="10" fill="#f8f9fa" />
                                        <path d="M10 50 v-10 a30 10 0 0 0 60 0 v10" fill="none" />
                                        <ellipse cx="40" cy="40" rx="30" ry="10" fill="#f8f9fa" />
                                        <path d="M15 42 v8 M25 43 v8 M35 44 v8 M45 44 v8 M55 43 v8 M65 42 v8" strokeWidth="1.5" stroke="#1a2b3c" />
                                        <g transform="translate(70, 35) rotate(15)">
                                            <ellipse cx="0" cy="0" rx="8" ry="22" fill="#cd753a" stroke="#2a2456" />
                                            <path d="M0 -22 h4 a8 22 0 0 1 0 44 h-4" fill="none" stroke="#2a2456" />
                                            <path d="M3 -8 S -1 -4 3 0 S -1 4 3 8 M 1 -10 v20" strokeWidth="1.5" fill="none" />
                                        </g>
                                    </g>
                                    <g transform="translate(130, 20) rotate(-5)">
                                        <rect x="0" y="0" width="55" height="65" rx="3" fill="#ffffff" />
                                        <path d="M10 50 h35 M10 50 v-35" strokeWidth="2" stroke="#2a2456" />
                                        <rect x="15" y="30" width="6" height="20" fill="#f4f0f8" />
                                        <rect x="25" y="15" width="6" height="35" fill="#f4f0f8" />
                                        <rect x="35" y="25" width="6" height="25" fill="#f4f0f8" />
                                        <path d="M18 35 L 28 20 L 38 22 L 45 10" stroke="#cd753a" strokeWidth="2" fill="none" />
                                    </g>
                                </g>
                                <path d="M20 20 Q25 25 30 20 Q25 30 20 35 Q15 30 10 25 Q15 20 20 20 Z" fill="#cd753a" />
                                <path d="M100 10 Q103 13 106 10 Q103 16 100 19 Q97 16 94 13 Q97 10 100 10 Z" fill="#885b67" />
                            </svg>
                        </div>

                        {/* Floating Stats Card */}
                        <div className="absolute bottom-32 -left-10 z-20 bg-surface rounded-2xl p-6 shadow-brand-lg w-[300px] border border-border">
                            <div className="mb-5">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-text-primary font-bold text-[14px]">Tax Consultation</span>
                                    <span className="text-text-primary font-bold text-[14px]">70%</span>
                                </div>
                                <div className="w-full bg-white h-2.5 rounded-full overflow-hidden shadow-inner border border-border">
                                    <div className="bg-brand h-full rounded-full relative" style={{ width: '70%' }}>
                                        <div className="absolute inset-0 bg-white/20"></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-text-primary font-bold text-[14px]">Cost Calculation</span>
                                    <span className="text-text-primary font-bold text-[14px]">90%</span>
                                </div>
                                <div className="w-full bg-white h-2.5 rounded-full overflow-hidden shadow-inner border border-border">
                                    <div className="bg-brand h-full rounded-full relative" style={{ width: '90%' }}>
                                        <div className="absolute inset-0 bg-white/20"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
}