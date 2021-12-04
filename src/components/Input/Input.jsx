import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { InputStyled, WrapperInput } from "./styles";
const Input = ({
  placeholder,
  name,
  type,
  register ,
  validation,
  errors,
  onChange,
  value,
}) => {
  return (
    <WrapperInput>
      <InputStyled
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        isError={!!errors?.[name]?.message}
        {...register(name, validation)}
      />
      {errors?.[name]?.message && (
        <ErrorMessage message={errors[name].message} />
      )}
    </WrapperInput>
  );
};

export default Input;
