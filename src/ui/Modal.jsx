import { createContext, useState } from "react";

import Open from "./Open";
import Window from "./Window";

const ModalContext = createContext();

const Modal = ({ children }) => {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;
  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;

export { ModalContext };
