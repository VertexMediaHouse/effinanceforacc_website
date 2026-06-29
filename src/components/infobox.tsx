import React from "react";
import { User, Car, Database, Plane } from "lucide-react";

interface InfoItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const data: InfoItem[] = [
  {
    id: 1,
    title: "Family Insurance",
    description: "Mode Forem ipsum dolor meet consec tetuu nunc phasellus.",
    icon: <User size={24} />,
  },
  {
    id: 2,
    title: "Vehicle Insurance",
    description: "Mode Forem ipsum dolor meet consec tetuu nunc phasellus.",
    icon: <Car size={24} />,
  },
  {
    id: 3,
    title: "Cargo Insurance",
    description: "Mode Forem ipsum dolor meet consec tetuu nunc phasellus.",
    icon: <Database size={24} />,
  },
  {
    id: 4,
    title: "Travel Insurance",
    description: "Mode Forem ipsum dolor meet consec tetuu nunc phasellus.",
    icon: <Plane size={24} />,
  },
];

export default function InfoBoxGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h2 className="mb-10 text-3xl font-bold text-slate-900">
        Info Box 05
      </h2>

      {/* tighter grid spacing */}
      <div className="grid grid-cols-1 gap-x-20 gap-y-6 lg:grid-cols-2">

        {data.map((item) => (
          <div key={item.id} className="relative h-[260px]">

            {/* IMAGE (smaller + tighter) */}
            <div className="absolute right-0 top-0 h-full w-[55%] overflow-hidden rounded-[14px]">
              <img
                src="/assets/a.jpeg"
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* CARD (smaller + closer overlap) */}
            <div className="group absolute left-0 top-1/2 z-20 h-[80%] w-[60%] translate-x-[-10%] -translate-y-1/2 rounded-[14px] bg-white p-6 shadow-[0_12px_35px_rgba(0,0,0,0.10)] transition-all duration-300 hover:shadow-[0_20px_55px_rgba(0,0,0,0.16)]">

              {/* ICON */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <span className="group-hover:text-[#0B5D4B]">
                  {item.icon}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="mb-2 text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-xs leading-5 text-gray-500">
                {item.description}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}