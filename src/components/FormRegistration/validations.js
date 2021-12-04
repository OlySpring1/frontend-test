export const validationFirstName = {
  required: { value: true, message: "Please enter your name" },
};

export const validationLastName = {
  required: { value: true, message: "Please enter your last name" },
};
export const validationPhone = {
  required: { value: true, message: "Please enter your phone number" },
  pattern: {
    value: /^\d{5,12}$/,
    message: "Please use only numbers. The phone number must contain at least 5 and more than 14 digits",
  },
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
