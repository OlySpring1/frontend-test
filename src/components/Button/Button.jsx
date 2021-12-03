import { ButtonStyle } from "./styles";
const Button = ({ children, onClick }) => {
  return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>;
};

export default Button;
