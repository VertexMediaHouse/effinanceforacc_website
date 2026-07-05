export default function ServicesBlog() {
  const blogs = [
    {
      tag: "Bookkeeping",
      title: "5 Signs Your Business Needs Professional Bookkeeping",
      date: "January 12, 2025",
image: "https://plus.unsplash.com/premium_photo-1678567671940-64eeefe22e5b?auto=format&fit=crop&q=80&w=600",
imageKeyword: "accountant bookkeeping records office desk",
    },
    {
      tag: "Tax Planning",
      title: "Year-End Tax Planning Tips for Small Businesses",
      date: "February 05, 2025",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=600",
      imageKeyword: "tax planning documents calculator desk",
    },
    {
      tag: "Financial Strategy",
      title: "How Outsourced Accounting Helps Businesses Scale Faster",
      date: "March 18, 2025",
image: "https://plus.unsplash.com/premium_photo-1661326350444-8d0e57e4cdad?auto=format&fit=crop&q=80&w=600",      imageKeyword: "business growth financial strategy planning",
    },
  ];

  return (
    <section className="bg-white py-24 mx-24 text-left" id="Blogs">
      <div className="mb-14 grid gap-10 lg:grid-cols-[720px_1fr] items-end px-10">
        <div>
          <span className="mb-4 block text-[11px] font-bold uppercase tracking-[2px] text-[#885b67]">
            Our Blog
          </span>

          <h2 className="max-w-[720px] text-[42px] font-bold leading-[1.08] text-[#1a1630]">
            Insights & Updates <br /> From Our Finance Experts
          </h2>
        </div>

        <div className="flex items-end lg:justify-end">
          <p className="max-w-[420px] text-[20px] leading-7 text-[#6b6480]">
            Practical tips, industry updates, and expert advice on
            bookkeeping, tax, and financial management for US and
            international businesses.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 px-10 gap-[28px]">
        {blogs.map((blog, i) => (
          <div
            key={i}
            className="rounded-[14px] overflow-hidden text-left border border-[#e5e7eb]"
          >
            <div className="w-full h-[200px] overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
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
                Stay up to date with expert insights on accounting best
                practices, tax strategies, and financial planning tips.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}