import GlassCard from "./GlassCard";
import profile from "../../assets/images/profile.png";

import {
  FaReact,
  FaJava,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
} from "react-icons/si";

const ProfileCard = () => {
  return (
    <GlassCard className="relative w-[420px] overflow-hidden p-8">

      {/* Background Glow */}

      <div className="absolute -top-24 right-0 h-60 w-60 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative z-10">

        <div className="flex justify-center">

          <img
            src={profile}
            alt="Brian Muchiru"
            className="h-72 w-72 rounded-3xl object-cover border border-white/10"
          />

        </div>

        <div className="mt-8 text-center">

          <h2 className="text-3xl font-bold">
            Brian Muchiru
          </h2>

          <p className="mt-2 text-slate-400">
            Software Developer
          </p>

        </div>

        <div className="mt-8 grid grid-cols-2 gap-3">

          <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">

            <FaReact className="text-cyan-400" />

            React

          </div>

          <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">

            <SiTailwindcss className="text-sky-400" />

            Tailwind

          </div>

          <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">

            <FaJava className="text-orange-400" />

            Java

          </div>

          <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">

            <FaGithub />

            GitHub

          </div>

        </div>

      </div>

    </GlassCard>
  );
};

export default ProfileCard;