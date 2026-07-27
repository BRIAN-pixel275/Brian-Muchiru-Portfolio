import GlassCard from "./GlassCard";
import profile from "../../assets/images/profile.png";

import {
  FaMapMarkerAlt,
  FaReact,
  FaGithub,
} from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";

const ProfileCard = () => {
  return (
    <GlassCard className="relative w-[420px] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="relative z-10 p-8">

        {/* Profile Image */}

        <div className="flex justify-center">

          <div className="relative">

            <div className="absolute inset-0 rounded-3xl bg-blue-500 blur-2xl opacity-30" />

            <img
              src={profile}
              alt="Brian Muchiru"
              className="relative h-72 w-72 rounded-3xl border border-white/10 object-cover"
            />

          </div>

        </div>

        {/* Available */}

        <div className="mt-6 flex justify-center">

          <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm">

            <span className="h-2 w-2 rounded-full bg-emerald-400" />

            Available for Work

          </div>

        </div>

        {/* Name */}

        <div className="mt-6 text-center">

          <h2 className="text-3xl font-bold">
            Brian Muchiru
          </h2>

          <p className="mt-2 text-slate-400">
            Software Developer
          </p>

          <div className="mt-2 flex items-center justify-center gap-2 text-slate-500">

            <FaMapMarkerAlt />

            Nairobi, Kenya

          </div>

        </div>

        {/* Divider */}

        <div className="my-8 h-px bg-white/10" />

        {/* Bottom */}

        <div className="space-y-4">

          <div className="flex items-center gap-3">

            🚀

            <span>10+ Projects Completed</span>

          </div>

          <div className="flex items-center gap-3">

            <FaReact className="text-cyan-400" />

            React

            <SiTailwindcss className="ml-4 text-sky-400" />

            Tailwind

            <FaGithub className="ml-4" />

            GitHub

          </div>

          <div className="flex items-center gap-3">

            💼

            <span>Open to Internships & Freelance</span>

          </div>

        </div>

      </div>

    </GlassCard>
  );
};

export default ProfileCard;