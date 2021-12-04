import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import CheckBox from "../CheckBox/CheckBox";
import Input from "../Input/Input";
import Select from "../Select/Select";
import { Container } from "./styles";
import AutoCompleteText from "../AutocompleteAddress/AutocompleteAddress";
import {
  validationLastName,
  validationFirstName,
  validationPhone,
  validationEmail,
  validationAcceptTerms,
} from "./validations";
import { setUser } from "../../redux/users";
const FormRegistration = () => {
  const dispatch = useDispatch();
  const defaultValues = {
    sex: "",
    acceptTerms: false,
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
  };
  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ defaultValues });
  const [acceptTerms] = watch([ "acceptTerms"]);
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(defaultValues);
    }
  }, [isSubmitSuccessful, reset]);
  const onSubmit = (data) => {
    dispatch(setUser(data));
  };
  const preventDefault = (e) => {
    e.preventDefault();
  };
  return (
    <Container onSubmit={preventDefault}>
      <Input
        placeholder="First name"
        register={register}
        name="firstName"
        type="text"
        validation={validationFirstName}
        errors={errors}
      />
      <Input
        placeholder="Last name"
        register={register}
        name="lastName"
        type="text"
        validation={validationLastName}
        errors={errors}
      />
      <Input
        placeholder="Phone"
        register={register}
        name="phone"
        type="tel"
        validation={validationPhone}
        errors={errors}
      />
      <Input
        placeholder="Email"
        register={register}
        name="email"
        type="text"
        validation={validationEmail}
        errors={errors}
      />

      <Controller
        name="address"
        control={control}
        rules={{ required: "Please enter your address" }}
        render={(props) => {
          const {
            field: { value, onChange,  },
            fieldState: {error}
          } = props;
          return (
            <AutoCompleteText
              error={error}
              text={value}
              setValue={setValue}
              onChange={onChange}
            />
          );
        }}
      />

      <Controller
        name="sex"
        control={control}
        rules={{ required: "Please choose your sex" }}
        render={(props) => {
          const {
            field: { value, onChange },
            fieldState: {error}
          } = props;
          
          return <Select setCurrentValue={onChange} currentValue={value} error={error}/>;
        }}
      />
      <CheckBox
        currentValue={acceptTerms}
        register={register}
        validation={validationAcceptTerms}
        errors={errors}
      />
      <Button onClick={handleSubmit(onSubmit)}>Register</Button>
    </Container>
  );
};

export default FormRegistration;
