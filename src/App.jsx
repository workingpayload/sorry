import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (showPopup) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            clearInterval(timer);
            window.location.href = "https://www.savana.com/";
          }
          return prev - 1;
        });
      }, 1000);
    }
  }, [showPopup]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-600 text-white p-6">
      <motion.h1
        className="text-5xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        I'm Sorry, SAKSHI!!!!  😭
      </motion.h1>
      
      <motion.p
        className="text-lg mb-6 text-center max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        I deeply regret what happened. Please forgive me. 💔
      </motion.p>

      <motion.div
        className="w-full max-w-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExamRtY2UyNHI2MHlsN3F0NDUzbnl4dTJ5dGw1bnk3Nmd5anB2OGNnNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CYY7fopLRZAUpPe3w5/giphy.gif"
          alt="Love and Sorry gif"
          className="rounded-2xl shadow-lg w-full"
        />
      </motion.div>

      <motion.button
        className="mt-6 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg shadow-md"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowPopup(true)}
      >
        Forgive Me? 😢
      </motion.button>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            className="bg-white text-black p-6 rounded-2xl shadow-lg text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWYxMHZ1bXBpYTduZzBlZDYxc3F3N2RyOWhhMDZuNjllenY3eTR3OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BIMtBMvFziSd7sFh4f/giphy.gif"
              alt="Party Popper Animation"
              className="w-40 mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold">🎉 Congratulations! 🎉</h2>
            <p className="mt-2">You won a present for your forgiveness!</p>
            <p className="mt-2">Redirecting in {countdown} seconds to your gift...</p>
          </motion.div>
        </div>
      )}
    </div>);
}
