
export function validatePhoneNumberHelper(input) {
  const phoneNumberPattern = /^\+\d+$/;

  return phoneNumberPattern.test(input);
}

export function validateEmailHelper(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return emailPattern.test(email);
}

export function equatePassword(psd, confirmPsd) {
  return psd === confirmPsd;
}

export const validatePassword = (value, handleChange) => {
  if (value === "")
    handleChange("passwordError", "Password is required");
  else if (value.length < 8 )
    handleChange("passwordError", "password must be at least 8 characters");
  else {
    handleChange("passwordError", null);
    return false;
  }

  return true;
};

export const validateEmail = (value, handleChange) =>{
  if (value === "") handleChange("emailError", "Email is required");
  else if (!validateEmailHelper(value))
    handleChange("emailError", "Invalid email address");
  else {
    handleChange("emailError", null);
    return false;
  }
  return true;
}

export const validateFirstName = (value, handleChange) => {
  if (value === "")
    handleChange("firstNameError", "First name is required");
  else if (value.length < 3 )
    handleChange("firstNameError", "First name must be at least 3 characters");
  else {
    handleChange("firstNameError", null);
    return false;
  }

  return true;
};

export const validateLastName = (value, handleChange) => {
  if (value === "")
    handleChange("lastNameError", "Last name is required");
  else if (value.length < 3 )
    handleChange("lastNameError", "Last name must be at least 3 characters");
  else {
    handleChange("lastNameError", null);
    return false;
  }

  return true;
};


export const validatePhoneNumber = (value, handleChange) => {
  if (value === "")
    handleChange("phoneError", "phone number is required");
  else if (value.length <= 10 )
    handleChange("phoneError", "phone number must be at least 10 numbers");
  else if (!validatePhoneNumberHelper(value))
    handleChange("phoneError", "Invalid phone number ");
  else {
    handleChange("phoneError", null);
    return false;
  }

  return true;
};


export const validateConfirmPassword = (confirmPsd, psd, handleChange) => {
  if(!handleChange) return true;
  if (confirmPsd === "")
    handleChange("confirmError", "Confirm password is required");
  else if (confirmPsd.length < 8 )
    handleChange("confirmError", "Confirm password must be at least 8 characters");
  else if (!equatePassword(psd, confirmPsd))
    handleChange("confirmError", "password does not match");
  else {
    handleChange("confirmError", null);
    return false;
  }

  return true;
};