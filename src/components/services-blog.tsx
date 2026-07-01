export default function ServicesBlog() {
  const blogs = [
    {
      tag: "Finance Advisor",
      title: "Finance Cover A Moving Experience Like No Other",
      date: "January 12, 2025",
    },
    {
      tag: "Investment",
      title: "Get Rid Of Manual Tracking Spreadsheets Finance",
      date: "February 05, 2025",
    },
    {
      tag: "Tax Consultancy",
      title: "Iscover A Moving Experience Like No Other Finwave",
      date: "March 18, 2025",
    },
  ];

  return (
    <section className="bg-white py-24 mx-24 text-left">
      <div className="mb-14 grid gap-10 lg:grid-cols-[720px_1fr] items-end px-10">
        <div>
          <span className="mb-4 block text-[11px] font-bold uppercase tracking-[2px] text-[#885b67]">
            Why Choose Us
          </span>

          <h2 className="max-w-[720px] text-[42px] font-bold leading-[1.08] text-[#1a1630]">
            Financial Solutions <br /> That Help Your Business Grow
          </h2>
        </div>

        <div className="flex items-end lg:justify-end">
          <p className="max-w-[420px] text-[20px] leading-7 text-[#6b6480]">
            Reliable bookkeeping, accurate reporting, and dedicated financial support
            for US businesses and accounting firms.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 px-10 gap-[28px]">
        {blogs.map((blog, i) => (
          <div
            key={i}
            className="rounded-[14px] overflow-hidden text-left border border-[#e5e7eb]"
          >
            <div className="w-full h-[200px] bg-[#eef5f4] flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-[#e8f5f2] to-[#d4ede8] flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-[48px] h-[48px] text-[#1a7a65] opacity-40"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
            </div>
            <div className="p-[22px]">
              <span className="inline-block text-[11px] font-semibold text-[#ffffff] bg-[#382f82] px-[10px] py-[3px] rounded-[4px] mb-[12px]">
                {blog.tag}
              </span>
              <h3 className="text-[17px] font-bold text-[#0d1b2a] leading-[1.4] mb-[10px]">
                {blog.title}
              </h3>
              <div className="flex items-center gap-[14px] mb-[14px]">
                <span className="text-[12px] text-[#6b7280] flex items-center gap-[4px]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-[13px] h-[13px]"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {blog.date}
                </span>
                <span className="text-[12px] text-[#6b7280] flex items-center gap-[4px]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-[13px] h-[13px]"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  Admin
                </span>
              </div>
              <p className="text-[13px] text-[#6b7280] leading-[1.65]">
                Finance cover a moving experience like no other at Outgrid merely
                transporting items get rid of manual tracking.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
