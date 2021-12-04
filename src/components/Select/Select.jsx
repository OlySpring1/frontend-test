import { useEffect, useState, useRef } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {
  SelectContainer,
  SelectHeader,
  SelectListContainer,
  SelectList,
  ListItem,
} from "./styles";
const options = ["male", "female"];
const Select = ({ setCurrentValue, currentValue, error }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const placeholder = "Sex";
  const refSelect = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (refSelect?.current && !refSelect.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen, refSelect]);
  return (
    <SelectContainer>
      <SelectHeader
        onClick={toggling}
        isError={!!error?.message}
        id="selected-text"
      >
        {currentValue}
        {!currentValue && placeholder}
      </SelectHeader>
      <SelectListContainer>
        {isOpen && (
          <SelectList ref={refSelect}>
            {options.map((option) => {
              const handleClick = () => {
                setCurrentValue(option);
                toggling(!isOpen);
              };
              return (
                <ListItem
                  onClick={handleClick}
                  key={option}
                  value={option}
                  id="select-option"
                >
                  {option}
                </ListItem>
              );
            })}{" "}
          </SelectList>
        )}
      </SelectListContainer>
      {error?.message && <ErrorMessage message={error.message} />}
    </SelectContainer>
  );
};

export default Select;
