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
      {/* Outer Glow — single restrained brass glow instead of multi-color */}
      <div className="absolute inset-0 rounded-sm bg-brass/10 blur-3xl" />

      {/* Frame */}
      <div className="relative rounded-sm border border-ink-line bg-ink-raised p-3">

        <img
          src={profile}
          alt="Brian Muchiru"
          className="h-[520px] w-[380px] rounded-sm object-cover grayscale-[15%]"
        />

      </div>

      {/* Status */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-sm border border-moss/30 bg-ink-raised px-5 py-2">

        <span className="h-2 w-2 rounded-full bg-moss" />

        <span className="font-mono-ledger text-sm text-paper">
          Available for Work
        </span>

      </div>
    </motion.div>
  );
};

export default ProfileCard;
