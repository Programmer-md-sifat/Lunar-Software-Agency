import React from "react";
import { motion } from "motion/react";
import { Linkedin, Twitter, Github } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  socials?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export const AboutTeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: "member-1",
      name: "Marcus Vance",
      role: "as CEO & Co-Founder",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: "member-2",
      name: "Albert Flores",
      role: "as CTO & Co-Founder",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: "member-3",
      name: "Eleanor Pena",
      role: "as Head of Product Design",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: "member-4",
      name: "Sophia Lin",
      role: "as Marketing Manager",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: "member-5",
      name: "David Chen",
      role: "as Lead Systems Architect",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: "member-6",
      name: "Amara Okafor",
      role: "as Principal Frontend Engineer",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: "member-7",
      name: "Elena Rostova",
      role: "as Cloud & DevOps Lead",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: "member-8",
      name: "James Wilson",
      role: "as AI & Mobile Engineer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85",
    },
  ];

  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#0B0E14] tracking-[-0.02em] leading-tight"
        >
          The amazing team behind SoftLunar
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-neutral-500 text-sm sm:text-base mt-3 leading-relaxed max-w-lg mx-auto"
        >
          A collective of passionate engineers, designers, and strategists dedicated to crafting exceptional digital experiences.
        </motion.p>
      </div>

      {/* 4 Columns x 2 Rows Grid matching reference image */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
        {teamMembers.map((member, idx) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.06 }}
            whileHover={{ y: -6 }}
            className="relative h-[340px] sm:h-[380px] rounded-[26px] sm:rounded-[30px] overflow-hidden group shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-neutral-200/70 bg-neutral-100"
          >
            {/* Background Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Subtle Gradient vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

            {/* Bottom Floating White Pill Badge matching screenshot */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl py-3 px-4 text-center shadow-[0_8px_25px_rgba(0,0,0,0.12)] border border-white/60 group-hover:bg-white transition-colors duration-300">
              <span className="text-sm sm:text-[15px] font-extrabold text-[#0B0E14] block tracking-tight leading-snug">
                {member.name}
              </span>
              <span className="text-[12px] text-neutral-500 font-medium block leading-snug mt-0.5">
                {member.role}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
