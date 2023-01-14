import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import "./portfolio_modal.css";
import tablet_frame from "../../assets/tablet-frame.png";

const PortfolioModal = () => {
  const [open, setOpen] = useState(true);
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                delay: 0.3,
              },
            }}
            // onClick={() => {
            //   setOpen(false);
            // }}
            className="modal-backdrop"
          >
            <motion.div
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
                transition: {
                  duration: 0.3,
                },
              }}
              exit={{
                scale: 0,
                transition: {
                  delay: 0.3,
                },
              }}
              className="content-wrapper"
            >
              <motion.div
                initial={{
                  x: 100,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                    duration: 0.3,
                  },
                }}
                exit={{
                  x: 100,
                  opacity: 0,
                  transition: {
                    duration: 0.3,
                  },
                }}
                className="modal-content"
              >
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PortfolioModal;
