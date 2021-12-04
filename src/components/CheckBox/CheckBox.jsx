import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {
  CheckboxContainer,
  HiddenCheckbox,
  Icon,
  StyledCheckbox,
  TextLabel,
  CheckboxLabel,
  CheckboxWrapper,
} from "./styles";

const CheckBox = ({ currentValue, register, errors, validation }) => {
  return (
    <CheckboxWrapper>
      <CheckboxLabel>
        <CheckboxContainer>
          <HiddenCheckbox
            {...register("acceptTerms", validation)}
          />
          <StyledCheckbox
            checked={currentValue}
            isError={!!errors?.acceptTerms?.message}
          >
            <Icon viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </Icon>
          </StyledCheckbox>
        </CheckboxContainer>
        <TextLabel> I accept the terms of use</TextLabel>
      </CheckboxLabel>
      {errors?.acceptTerms?.message && (
        <ErrorMessage message={errors.acceptTerms.message} />
      )}
    </CheckboxWrapper>
  );
};

export default CheckBox;
