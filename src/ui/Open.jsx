import { cloneElement, useContext } from "react";
import { ModalContext } from "./Modal";

const Open = ({ children, opens: opensWindowName }) => {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opensWindowName) });
};

export default Open;
