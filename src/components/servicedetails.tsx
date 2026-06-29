export default function ServiceDetails() {
  return (
    <section className="py-[140px] bg-white">
      <div className="max-w-[1364px] mx-auto px-6">

        <div className="grid lg:grid-cols-[320px_1fr] gap-10">

          {/* SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky top-32">

              <div className="space-y-3 mb-6">
                {[
                  "Cash Flow",
                  "Financial Growth",
                  "Secure Money",
                  "Cash Flow Visibility",
                  "Audit & Assurance",
                  "Financial Planning",
                ].map((item) => (
                  <button
                    key={item}
                    className="
                  w-full
                  flex
                  items-center
                  justify-between
                  bg-[#edf5f4]
                  px-6
                  py-5
                  rounded-[0.5rem]
                  text-[#006d5b]
                  font-semibold
                  hover:bg-[#006d5b]
                  hover:text-white
                  transition-all
                "
                  >
                    {item}
                    →
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                <button className="w-full bg-[#ffb000] px-6 py-5 rounded-[0.5rem] flex items-center justify-between font-semibold text-black">
                  Download File
                  ↓
                </button>

                <button className="w-full bg-[#ffb000] px-6 py-5 rounded-[0.5rem] flex items-center justify-between font-semibold text-black">
                  Documentation File
                  ↓
                </button>
              </div>

            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div>

            <img
              src="/assets/a.jpeg"
              alt=""
              className="
    w-full
    h-[380px]
    lg:h-[450px]
    rounded-[0.5rem]
    object-cover
    mb-8
  "
            />

            <div className="space-y-6 text-[#6e7676] leading-8">
              <p>
                Pink salmon cherry salmon combtail gourami frigate mackerel snake
                mackerel side-down catfish finback cat shark.
              </p>

              <p>
                Reedfish bonefish trahira bristlenose longnose lancetfish morid.
                Duis gravida augue velit eu dignissim felis posuere.
              </p>
            </div>

            <div className="mt-14">
              <h2 className="text-[42px] leading-tight font-bold text-[#041b16] mb-5">
                We Offer The Benefits
              </h2>

              <p className="text-[#6e7676] leading-8">
                Duis gravida augue velit eu dignissim felis posuere quis.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 mt-14 items-center">
              <div>
                <h3 className="text-3xl font-bold text-[#041b16] mb-5">
                  Activities and Features
                </h3>

                <p className="text-[#6e7676] mb-8">
                  Pink salmon cherry salmon combtail gourami frigate areae
                  mackerel snake mackerel.
                </p>

                <ul className="space-y-4">
                  {[
                    "Powerful database store",
                    "Easy to access all projects",
                    "Effortless courier allocation",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 font-semibold text-[#041b16]"
                    >
                      <span className="w-6 h-6 rounded-full bg-[#ffb000] flex items-center justify-center text-white text-xs">
                        ✓
                      </span>

                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="
              h-[320px]
              rounded-[20px]
              overflow-hidden
              bg-cover
              bg-center
              relative
            "
                style={{
                  backgroundImage:
                    "url('/service-video-thumb.jpg')",
                }}
              >
                <button className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center text-[#006d5b] text-2xl">
                    ▶
                  </div>
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* RELATED SERVICES */}

        <div className="mt-24">
          <h2 className="text-[42px] font-bold text-[#041b16] mb-10">
            Related Service
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="
              border
              border-[#e7e7e7]
              rounded-[24px]
              p-8
              hover:shadow-lg
              transition
            "
              >
                <div className="w-16 h-16 rounded-full bg-[#edf5f4] mb-6" />

                <h3 className="text-2xl font-bold text-[#041b16] mb-3">
                  Financial Growth
                </h3>

                <p className="text-[#6e7676]">
                  Pink salmon cherry salmon combtail gourami frigate mackerel snake.
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}