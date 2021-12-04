import { AutoCompleteTextStyled } from "./styles";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFinishLoading,
  getIsLoading,
  getSuggestions,
  handleSuccess,
  setSuggestions,
} from "../../redux/suggestions";
import { InputStyled } from "../Input/styles";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const AutoCompleteText = ({ text, error, setValue, onChange }) => {
  const suggestions = useSelector(getSuggestions);
  const isLoading = useSelector(getIsLoading);
  const loaded = useSelector(getFinishLoading);
  const dispatch = useDispatch();
  const refList = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const suggestionSelected = (item) => {
    setValue("address", item.title);
    dispatch(handleSuccess([]));
  };
  const handleOnChange = (e) => {
    let target = e.target;
    onChange(target.value);
    if (target.value.trim().length > 0) {
      dispatch(setSuggestions(target.value.trim()));
    }
  };
  useEffect(() => {
    if (suggestions?.length > 0) {
      setIsOpen(true);
    }
  }, [suggestions]);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (refList?.current && !refList.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen, refList]);
  const conditionRenderSuggestions = loaded && isOpen && !!suggestions.length;
  return (
    <AutoCompleteTextStyled>
      <InputStyled
        isError={!!error?.message}
        value={text}
        type="text"
        placeholder="Address"
        onChange={handleOnChange}
        autoComplete="off"
      />
      {isLoading && "LOADING..."}
      {conditionRenderSuggestions && (
        <ul ref={refList}>
          {suggestions?.map((item) => {
            return (
              <li key={item.title} onClick={() => suggestionSelected(item)}>
                {item.title}
              </li>
            );
          })}
        </ul>
      )}
      {error?.message && <ErrorMessage message={error.message} />}
    </AutoCompleteTextStyled>
  );
};
export default AutoCompleteText;
