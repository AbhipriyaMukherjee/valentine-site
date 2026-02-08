import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [noCount, setNoCount] = useState(0);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  const messages = [
    "Wrong answer 😌 Try again",
    "Nopeeee 💕 Try again",
    "Still wrong 🙃",
    "You KNOW the right answer 😏",
    "Okay now you're just teasing 😭",
  ];

  function moveNoButton() {
    // keep NO away from YES by restricting movement area
    const x = Math.random() * 160 + 40; // always to the right
    const y = Math.random() * 120 - 60; // small vertical wiggle
    setNoPos({ x, y });
    setNoCount((c) => c + 1);
  }

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-pink-100">
      {/* Floating hearts */}
      {[...Array(16)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-400 text-2xl"
          initial={{ y: "100vh", x: Math.random() * window.innerWidth }}
          animate={{ y: "-10vh" }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          ❤️
        </motion.div>
      ))}

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-md relative z-10"
      >
        <h1 className="text-3xl font-bold text-pink-600 mb-4">
          Will you be my Valentine? 💘
        </h1>
        <p className="text-gray-600 mb-6">
          Nesha❤️
          <br />
          {noCount > 0
            ? messages[(noCount - 1) % messages.length]
            : "I promise snacks, love, and chaos."}
        </p>

        <div className="relative flex justify-center items-center gap-10 h-24">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert("YAYYYY 💖💖 Best decision ever!!!")}
            className="px-6 py-3 bg-pink-500 text-white rounded-full shadow-lg z-10"
          >
            Yes 💕
          </motion.button>

          <motion.button
            animate={{ x: noPos.x, y: noPos.y }}
            transition={{ type: "spring", stiffness: 400 }}
            onMouseEnter={moveNoButton}
            onClick={moveNoButton}
            className="px-6 py-3 bg-gray-300 text-gray-700 rounded-full"
          >
            No 🙄
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}