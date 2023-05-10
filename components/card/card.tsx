import { motion } from "framer-motion";

const Card = ({
  name,
  progress,
  index,
  date,
}: {
  name: string;
  progress: number;
  index: number;
  date: string;
}) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        delay: 0.1*index,
        damping: 20,
      }}
      className="w-full h-48 rounded-md bg-neutral-100 flex flex-col justify-between items-center text-sm overflow-hidden px-4 py-2 cursor-pointer hover:shadow-lg border border-transparent hover:border-neutral-300 hover:scale-105 transition duration-200 ease-in"
    >
      <div className="w-full flex flex-row space-x-1">
        <div className="w-1/3 h-2 rounded-l-md bg-neutral-300">
          <div
            className="h-full rounded-l-md bg-indigo-300"
            style={{ width: Math.min(progress + 67, 100) + "%" }}
          ></div>
        </div>
        <div className="w-1/3 h-2 bg-neutral-200">
          <div
            className="h-full bg-indigo-300"
            style={{
              width: (progress > 33 ? Math.min(progress + 34, 100) : 0) + "%",
            }}
          ></div>
        </div>
        <div className="w-1/3 h-2 rounded-r-md bg-neutral-200">
          <div
            className="h-full rounded-r-md bg-indigo-300"
            style={{
              width: (progress > 66 ? Math.min(progress, 100) : 0) + "%",
            }}
          ></div>
        </div>
      </div>
      <span className="text-center text-base text-neutral-500">{name}</span>
      <span className="text-xs py-2 text-neutral-400">{date}</span>
    </motion.div>
  );
};

export default Card;
