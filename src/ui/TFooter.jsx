import styled from "styled-components";

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;
  &:not(:has(*)) {
    display: none;
  }
`;

const TFooter = ({ children }) => {
  return <Footer>{children}</Footer>;
};

export default TFooter;
