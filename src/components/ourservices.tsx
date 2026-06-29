import { useState } from "react";
import { Check, CircleDollarSign, Database } from "lucide-react";

export default function aboutservices() {
  const [activeTab, setActiveTab] = useState("investment");

  const tabs = [
    {
      id: "investment",
      title: "Investment",
      icon: CircleDollarSign,
    },
    {
      id: "marketing",
      title: "Marketing Cost",
      icon: CircleDollarSign,
    },
    {
      id: "analysis",
      title: "Data Analysis",
      icon: Database,
    },
  ];

  return (
    <section className="bg-[#edf5f4] py-[64px]">
      <div className="max-w-[1364px] mx-auto px-6">

        <div className="grid lg:grid-cols-[1fr_696px] gap-[72px] items-center">

          {/* LEFT */}
          <div>

            <span className="text-[#006d5b] uppercase tracking-[1.5px] text-[15px] font-bold">
              WHY WE ARE THE BEST
            </span>

            <h2 className="mt-5 text-[40px] leading-[1.12] font-bold text-[#041b16] max-w-[620px]">
              Why You Should Choose Our Finance & Business Policy
            </h2>

            {/* Tabs */}
            <div className="flex flex-wrap gap-3 mt-10">

              {tabs.map((tab) => {
                const Icon = tab.icon;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      h-[39px]
                      px-6
                      rounded-[4px]
                      flex
                      items-center
                      gap-2
                      text-[16px]
                      font-semibold
                      transition-all
                      ${
                        activeTab === tab.id
                          ? "bg-[#ffb000] text-[#041b16]"
                          : "bg-white text-[#006d5b] border border-[#d9e7e4]"
                      }
                    `}
                  >
                    <Icon size={18} />
                    {tab.title}
                  </button>
                );
              })}
            </div>

            {/* Content */}
            <p className="mt-8 max-w-[620px] text-[#6e7676] text-[16px] leading-[32px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris.
            </p>

            {/* Bottom */}
            <div className="flex flex-wrap items-end justify-between mt-4 gap-10">

              <ul className="space-y-3">

                {[
                  "Powerful database store",
                  "Easy to access all projects",
                  "Effortless courier allocation",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[18px] font-semibold text-[#041b16]"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#006d5b] flex items-center justify-center text-white">
                      <Check />
                    </span>
                    {item}
                  </li>
                ))}

              </ul>

              {/* Chart */}
              <div className="flex items-center gap-5">

                <div className="relative w-[90px] h-[90px]">

                  <div
                    className="
                      w-full
                      h-full
                      rounded-full
                    "
                    style={{
                      background:
                        "conic-gradient(#ffb000 0deg 108deg,#006d5b 108deg 360deg)",
                    }}
                  />

                  <div className="absolute inset-[14px] rounded-full bg-[#edf5f4]" />
                </div>

                <div>
                  <h3 className="text-[56px] leading-none font-bold text-[#041b16]">
                    30%
                  </h3>

                  <p className="text-[#6e7676] text-lg">
                    Profit Rate
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div>

            <img
              src="/assets/services.png"
              alt=""
              className="
                w-[100%]
                h-[490px]
                object-cover
                rounded-[32px]
              "
            />

          </div>

        </div>

      </div>
    </section>
  );
}