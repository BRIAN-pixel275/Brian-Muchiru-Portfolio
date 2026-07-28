import { motion } from "framer-motion";
import profile from "../../assets/images/profile.png";

const ProfileCard = () => {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
      }}
      className="relative"
    >
      {/* Outer Glow */}
      <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-blue-500/30 via-cyan-400/20 to-violet-500/30 blur-3xl" />

      {/* Glass Border */}
      <div className="relative rounded-[40px] border border-white/10 bg-white/5 p-3 backdrop-blur-3xl">

        <img
          src={profile}
          alt="Brian Muchiru"
          className="h-[520px] w-[380px] rounded-[30px] object-cover"
        />

      </div>

      {/* Status */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-5 py-2 backdrop-blur-xl">

        <span className="h-3 w-3 rounded-full bg-emerald-400" />

        <span className="text-sm">
          Available for Work
        </span>

      </div>
    </motion.div>
  );
};

export default ProfileCard;