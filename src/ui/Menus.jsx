import { createContext, useState } from "react";
import styled from "styled-components";

import Toggle from "./Toggle";
import List from "./List";
import MenusButton from "./MenusButton";

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenusContext = createContext();

const Menus = ({ children }) => {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const open = setOpenId;
  const close = () => setOpenId("");

  return (
    <MenusContext.Provider
      value={{ openId, open, close, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
};

Menus.Menu = StyledMenu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = MenusButton;

export default Menus;

export { MenusContext };
