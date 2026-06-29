import { Clock, Users, Briefcase } from "lucide-react";

const models = [
  {
    icon: Clock,
    title: "Project Based",
    description: "Fixed price and timeline for well-defined projects with clear deliverables and scope."
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "A flexible team of experts fully integrated into your workflow for ongoing, long-term collaboration."
  },
  {
    icon: Briefcase,
    title: "Consulting",
    description: "Strategic advice and expert guidance tailored to your specific financial and operational challenges."
  }
];

export default function EngagementModel() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#0F7B6C] text-[12px] font-bold uppercase tracking-[2px] block mb-4">
            How We Work
          </span>
          <h2 className="text-[42px] font-bold text-[#183534] leading-[1.1]">
            Our Engagement Models
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {models.map((model, index) => {
            const Icon = model.icon;
            return (
              <div 
                key={index} 
                className="group bg-[#EDF5F4] p-10 rounded-[20px] transition-all duration-300 hover:-translate-y-2 hover:bg-[#0F7B6C] hover:shadow-xl"
              >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[#F4B321]">
                  <Icon size={28} className="text-[#0F7B6C] group-hover:text-white" />
                </div>
                <h3 className="text-[24px] font-bold text-[#183534] mb-4 transition-colors duration-300 group-hover:text-white">
                  {model.title}
                </h3>
                <p className="text-[16px] text-[#6E7676] leading-[1.7] transition-colors duration-300 group-hover:text-white/80">
                  {model.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
