import { motion } from "framer-motion";
import Backdrop from "../Backdrop";

const dropIn = {
    hidden: {
        y: "-30vh",
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 20,
            stiffness: 500,
        }
    },
    exit: {
        y: "30vh",
        opacity: 0,
    },
};

const Modal = ({ handleClose, text}) => {
    return(
        <Backdrop onClick={handleClose}>
            <motion.div
            onClick={(e) => e.stopPropagation()}
            className="modal"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
                <p>{text}</p>
                <motion.button
                className="close-button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClose}>
                    Close
                </motion.button>
            </motion.div>
        </Backdrop>
    )
}

export default Modal;