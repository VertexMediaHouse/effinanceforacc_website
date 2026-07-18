export default function ServicesBlog() {
  const blogs = [
    {
      tag: "Bookkeeping",
      title: "5 Signs Your Business Needs Professional Bookkeeping",
      date: "January 12, 2025",
      image:
        "https://plus.unsplash.com/premium_photo-1678567671940-64eeefe22e5b?auto=format&fit=crop&q=80&w=600",
      imageKeyword: "accountant bookkeeping records office desk",
    },
    {
      tag: "Tax Planning",
      title: "Year-End Tax Planning Tips for Small Businesses",
      date: "February 05, 2025",
      image:
        "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=600",
      imageKeyword: "tax planning documents calculator desk",
    },
    {
      tag: "Financial Strategy",
      title: "How Outsourced Accounting Helps Businesses Scale Faster",
      date: "March 18, 2025",
      image:
        "https://plus.unsplash.com/premium_photo-1661326350444-8d0e57e4cdad?auto=format&fit=crop&q=80&w=600",
      imageKeyword: "business growth financial strategy planning",
    },
  ];

  return (
    <section
      className="bg-white py-14 sm:py-16 lg:py-24"
      id="Blogs"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10 xl:px-12">
        {/* Heading */}
        <div className="mb-10 lg:mb-14 grid gap-6 lg:gap-10 lg:grid-cols-[720px_1fr] items-end">
          <div>
            <span className="mb-4 block text-[11px] font-bold uppercase tracking-[2px] text-[#885b67]">
              Our Blog
            </span>

            <h2 className="max-w-[720px] text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight lg:leading-[1.08] text-[#1a1630]">
              Insights & Updates
              <br className="hidden sm:block" />
              From Our Finance Experts
            </h2>
          </div>

          <div className="lg:flex lg:justify-end">
            <p className="max-w-[460px] text-[15px] sm:text-[17px] lg:text-[20px] leading-7 text-[#6b6480]">
              Practical tips, industry updates, and expert advice on
              bookkeeping, tax, and financial management for US and
              international businesses.
            </p>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-7">
          {blogs.map((blog, i) => (
            <article
              key={i}
              className="group rounded-2xl overflow-hidden border border-[#e5e7eb] bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="overflow-hidden h-56 sm:h-64 lg:h-[220px]">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <span className="inline-flex items-center rounded-md bg-[#382f82] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                  {blog.tag}
                </span>

                <h3 className="mt-4 text-xl font-bold leading-snug text-[#0d1b2a] transition-colors duration-300 group-hover:text-[#e65c00]">
                  {blog.title}
                </h3>

                {/* Meta */}
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#6b7280]">
                  <span className="flex items-center gap-2">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-4 h-4"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    {blog.date}
                  </span>

                  <span className="flex items-center gap-2">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-4 h-4"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    Admin
                  </span>
                </div>

                <p className="mt-5 text-[15px] leading-7 text-[#6b7280]">
                  Stay up to date with expert insights on accounting best
                  practices, tax strategies, and financial planning tips.
                </p>

                {/* CTA */}
                <button className="mt-6 inline-flex items-center gap-3 font-semibold text-[#0d1b2a] group/btn">
                  <span className="border-b border-transparent transition-all duration-300 group-hover/btn:border-[#e65c00]">
                    Read Article
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e5e7eb] transition-all duration-300 group-hover:bg-[#e65c00] group-hover:text-white group-hover:border-[#e65c00]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="w-4 h-4"
                    >
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}