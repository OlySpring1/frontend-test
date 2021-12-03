import { getByDisplayValue } from "@testing-library/dom";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { handleSuccess } from "../../redux";
import Button from "../Button/Button";
import CheckBox from "../CheckBox/CheckBox";
import Input from "../Input/Input";
import Select from "../Select/Select";
import { Container } from "./styles";
import {
  validationLastName,
  validationFirstName,
  validationPhone,
  validationEmail,
  validationAcceptTerms,
  validationAddress,
  validationSex,
} from "./validations";

const FormRegistration = () => {
  const dispatch = useDispatch();
  const defaultValues = {
    sex: "Select sex",
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
    setValue,
    watch,
    reset,
    control,
    formState: { errors, isSubmitSuccessful },
  } = useForm(defaultValues);
  const [sex, acceptTerms] = watch(["sex", "acceptTerms"]);
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(defaultValues);
    }
  }, [isSubmitSuccessful, reset]);
  const onSubmit = (data) => {
    dispatch(handleSuccess(data));
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
      <Input
        placeholder="Address"
        register={register}
        name="address"
        type="text"
        validation={validationAddress}
        errors={errors}
      />
      <Controller
        name="sex"
        control={control}
        rules={{ required: true }}
        defaultValue='Hello'
        render={(props) => {
          const {
            field: { value, onChange },
          } = props;
          return <Select setCurrentValue={onChange} currentValue={value} />;
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
