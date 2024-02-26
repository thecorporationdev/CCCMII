"use client";
import { AnimatePresence, motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          key={Math.random().toFixed()}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          variants={{
            initialState: {
              opacity: 0,
              height: 0,
            },
            animateState: {
              opacity: 1,
              height: "100%",
            },
            exitState: {
              opacity: 0,
              height: 0,
            },
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
