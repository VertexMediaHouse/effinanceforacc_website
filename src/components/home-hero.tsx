import Navbar from "./navbar";

export default function HomeHero() {
    return (
        <div className="relative min-h-screen bg-[#f3f9f8] overflow-hidden font-sans">
            {/* White grid pattern background */}
            <div 
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            <Navbar />

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

                {/* Hero Section */}
                <section className="flex flex-col lg:flex-row items-center justify-between pt-10 pb-14 relative">
                    
                    {/* Left Content */}
                    <div className="flex-1 max-w-[650px] relative">
                        <div className="text-[#00b47d] text-sm font-bold tracking-[0.15em] uppercase mb-6 flex items-center gap-2">
                            EXCLUSIVE FINANCE APPS
                        </div>
                        
                        <h1 className="text-[64px] leading-[1.1] font-bold text-[#1a2b3c] mb-6">
                            Transform 
                            <span className="inline-flex items-center justify-center border border-[#ffb800] rounded-full w-24 h-[60px] mx-4 align-middle bg-white/50">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffb800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M15 5l7 7-7 7"/></svg>
                            </span>
                            Your <br />
                            Business With Expert <br />
                            Accountant
                        </h1>
                        
                        <p className="text-[17px] leading-[1.7] text-[#556987] mb-10 max-w-[540px]">
                            Finance recover a moving experience like no other at Outgrid beyond merely transporting items of manual tracking spreadsheets shoe.
                        </p>

                        <button className="bg-[#ffb800] text-black px-8 py-4 rounded-full font-bold text-[15px] flex items-center gap-3 transition-transform hover:-translate-y-1 hover:shadow-lg shadow-[#ffb800]/20">
                            Take Our Services
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </button>
                    </div>

                    {/* Right Content (Image Placeholder & Floating Elements) */}
                    <div className="flex-1 relative flex justify-center items-center h-[700px] w-full mt-12 lg:mt-0">
                        
                        {/* Main Image Placeholder */}
                        <div className="w-[450px] h-[650px] rounded-b-full overflow-hidden relative z-10 flex items-end justify-center">
                            {/* Generic silhouette or placeholder instead of actual image */}
                            <div className="w-full h-full bg-black/5 rounded-b-[200px] border-4 border-white border-dashed flex items-center justify-center text-[#556987] font-medium text-lg">
                                [ Main Image Placeholder ]
                            </div>
                        </div>

                        {/* Floating Coins & Graph Doodle */}
                        <div className="absolute top-[20%] -left-[10%] lg:-left-[20%] z-20" style={{ animation: 'bounce 4s infinite' }}>
                            <svg width="220" height="160" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="-rotate-6 opacity-90 drop-shadow-md">
                                <g stroke="#1a2b3c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="#ffffff">
                                    {/* Coins stack */}
                                    <g transform="translate(30, 40)">
                                        <ellipse cx="40" cy="70" rx="30" ry="10" fill="#f8f9fa" />
                                        <path d="M10 70 v-10 a30 10 0 0 0 60 0 v10" fill="none" />
                                        <ellipse cx="40" cy="60" rx="30" ry="10" fill="#f8f9fa" />
                                        <path d="M10 60 v-10 a30 10 0 0 0 60 0 v10" fill="none" />
                                        <ellipse cx="40" cy="50" rx="30" ry="10" fill="#f8f9fa" />
                                        <path d="M10 50 v-10 a30 10 0 0 0 60 0 v10" fill="none" />
                                        <ellipse cx="40" cy="40" rx="30" ry="10" fill="#f8f9fa" />
                                        
                                        {/* Coin ridges */}
                                        <path d="M15 42 v8 M25 43 v8 M35 44 v8 M45 44 v8 M55 43 v8 M65 42 v8" strokeWidth="1.5" stroke="#1a2b3c" />
                                        
                                        {/* Dollar sign coin (standing) */}
                                        <g transform="translate(70, 35) rotate(15)">
                                            <ellipse cx="0" cy="0" rx="8" ry="22" fill="#ffb800" stroke="#1a2b3c" />
                                            <path d="M0 -22 h4 a8 22 0 0 1 0 44 h-4" fill="none" stroke="#1a2b3c" />
                                            {/* Stylized dollar sign on rim */}
                                            <path d="M3 -8 S -1 -4 3 0 S -1 4 3 8 M 1 -10 v20" strokeWidth="1.5" fill="none" />
                                        </g>
                                    </g>

                                    {/* Paper with bar chart */}
                                    <g transform="translate(130, 20) rotate(-5)">
                                        <rect x="0" y="0" width="55" height="65" rx="3" fill="#ffffff" />
                                        {/* Chart axes */}
                                        <path d="M10 50 h35 M10 50 v-35" strokeWidth="2" />
                                        {/* Bars */}
                                        <rect x="15" y="30" width="6" height="20" fill="#f8f9fa" />
                                        <rect x="25" y="15" width="6" height="35" fill="#f8f9fa" />
                                        <rect x="35" y="25" width="6" height="25" fill="#f8f9fa" />
                                        {/* Line graph overlay */}
                                        <path d="M18 35 L 28 20 L 38 22 L 45 10" stroke="#00b47d" fill="none" />
                                    </g>
                                </g>

                                {/* Sparkles */}
                                <path d="M20 20 Q25 25 30 20 Q25 30 20 35 Q15 30 10 25 Q15 20 20 20 Z" fill="#ffb800" />
                                <path d="M100 10 Q103 13 106 10 Q103 16 100 19 Q97 16 94 13 Q97 10 100 10 Z" fill="#00b47d" />
                            </svg>
                        </div>

                        {/* Floating Stats Card */}
                        <div className="absolute bottom-32 -left-10 z-20 bg-white rounded-2xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.08)] w-[300px] border border-gray-100">
                            {/* Tax Consultation */}
                            <div className="mb-5">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-[#1a2b3c] font-bold text-[14px]">Tax Consultation</span>
                                    <span className="text-[#1a2b3c] font-bold text-[14px]">70%</span>
                                </div>
                                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                    <div className="bg-[#ffb800] h-full rounded-full" style={{ width: '70%' }}></div>
                                </div>
                            </div>
                            
                            {/* Cost Calculation */}
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-[#1a2b3c] font-bold text-[14px]">Cost Calculation</span>
                                    <span className="text-[#1a2b3c] font-bold text-[14px]">90%</span>
                                </div>
                                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                    <div className="bg-[#006a52] h-full rounded-full" style={{ width: '90%' }}></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
}