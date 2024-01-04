import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';
import Modal from "./components/Modal";

function App() {

  const [modalOpen, setModalOpen] = useState(false);

  const close = () => { setModalOpen(false) };
  const open = () => { setModalOpen(true) };
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur lorem non leo consequat tristique. Fusce congue lacus quis lectus aliquam semper. Maecenas nec pretium libero, bibendum dignissim tortor. Fusce quis iaculis orci, ac facilisis mi. Donec rutrum, est nec fermentum euismod, mi dui laoreet eros, ut tincidunt velit erat id tortor. Donec et justo semper, suscipit ipsum id, varius massa. Aenean non dolor ultricies ante eleifend laoreet eget et dolor. Aliquam sit amet rhoncus odio, et pellentesque erat.";

  return (
    <>
      <h1>Framer Motion Modal Animation</h1>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="open-button"
        onClick={() => (modalOpen ? close() : open())}
      >
        Launch modal
      </motion.button>

      <AnimatePresence
        initial={false}
        wait={true}
        onExitComplete={() => null}>
        {modalOpen && <Modal modalOpen={modalOpen} text={lorem} handleClose={close} />}
      </AnimatePresence>
    </>
  )
} 

export default App
