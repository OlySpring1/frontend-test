export const validationFirstName = {
  required: { value: true, message: "Please enter your name" },
};

export const validationLastName = {
  required: { value: true, message: "Please enter your last name" },
};
export const validationPhone = {
  required: { value: true, message: "Please enter your phone number" },
  pattern: {
    value: /\d/,
    message: "Please use only numbers",
  },
  minLength: {
    value: 5,
    message:
      "The phone number must contain at least 5 and more than 14 digits.",
  },
  maxLength: {
    value: 14,
    message:
      "The phone number must contain at least 5 and more than 14 digits.",
  },
};
export const validationAddress = {
  required: { value: true, message: "Please enter your address" },
};

export const validationSex = {
  required: { value: true, message: "Please enter your sex" },
};

export const validationEmail = {
  required: { value: true, message: "Please enter your email" },
  pattern: {
    value: /\S+@\S+\.\S+/,
    message: "Please enter a valid email address",
  },
};
export const validationAcceptTerms = {
  required: { value: true, message: "Please confirm your consent" },
};
