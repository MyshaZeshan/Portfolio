import React from "react";
import { motion } from "framer-motion";

const colors = {
  cyan: "from-cyan-500 to-cyan-400",
  blue: "from-blue-500 to-blue-400",
  purple: "from-purple-500 to-purple-400",
  pink: "from-pink-500 to-pink-400",
  orange: "from-orange-500 to-orange-400",
  green: "from-green-500 to-green-400",
  indigo: "from-indigo-500 to-indigo-400",
  red: "from-red-500 to-red-400",
};

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative rounded-3xl p-[1px] overflow-hidden group"
    >
      {/* Glowing Border */}
      <div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${colors[skill.color]} opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300`}
      />

      {/* Card */}
      <div className="relative bg-[#111111] rounded-3xl border border-white/10 p-6 h-full transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]">

        {/* Number */}
        <span className="absolute top-5 right-5 text-gray-600 font-bold">
          {skill.id}
        </span>

        {/* Title */}
        <h2 className="text-white text-xl font-semibold mt-2">
          {skill.title}
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm mt-2">
          {skill.subtitle}
        </p>

        {/* Progress */}
        <div className="mt-6">
          <div className="flex justify-between text-xs text-gray-400 mb-2">
            <span>PROFICIENCY</span>
            <span>{skill.level}%</span>
          </div>

          <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className={`h-full rounded-full bg-gradient-to-r ${colors[skill.color]}`}
            />
          </div>
        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {skill.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-zinc-900 text-gray-300 text-xs border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;