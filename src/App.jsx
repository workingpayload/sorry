import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import myGif from "../src/my_gif.gif";

export default function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (showPopup) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            clearInterval(timer);
            window.location.href = "https://www.google.com";
          }
          return prev - 1;
        });
      }, 1000);
    }
  }, [showPopup]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-600 text-white p-6 relative overflow-hidden">
      <motion.h1 
        className="text-5xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        I'm Sorry, SAKSHI!!! 😭
      </motion.h1>
      
      <motion.p 
        className="text-lg mb-6 text-center max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        I deeply regret what happened. Please forgive me. 💔
      </motion.p>

      <motion.img 
        src={myGif} 
        alt="Love and Sorry gif" 
        className="rounded-2xl shadow-lg w-full max-w-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

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
            className="bg-white text-black p-6 rounded-2xl shadow-lg text-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(30)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 bg-yellow-400 rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: Math.random() * 0.5 }}
                  />
                ))}
              </div>
            </motion.div>
            <h2 className="text-2xl font-bold">🎉 Congratulations! 🎉</h2>
            <p className="mt-2">You won a present for your forgiveness!</p>
            <p className="mt-2">Redirecting in {countdown} seconds to your gift...</p>
          </motion.div>
        </div>
      )}
    </div>
  );
}
