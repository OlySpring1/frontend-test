import { useState } from "react";
import {
  SelectStyled,
  SelectContainer,
  SelectHeader,
  SelectListContainer,
  SelectList,
  ListItem,
} from "./styles";
const options = ["male", "female"];
const Select = ({ setCurrentValue, currentValue, ref }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  return (
    <SelectContainer>
      <SelectHeader onClick={toggling}>{currentValue}</SelectHeader>
      <SelectListContainer>
        {isOpen && (
          <SelectList>
            {options.map((option) => {
              const handleClick = () => {
                setCurrentValue(option);
                toggling(!isOpen);
              };
              return (
                <ListItem onClick={handleClick} key={option} value={option}>
                  {option}
                </ListItem>
              );
            })}{" "}
          </SelectList>
        )}
      </SelectListContainer>
    </SelectContainer>
  );
};

export default Select;
