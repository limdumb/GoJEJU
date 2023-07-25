export const emailValidation = (email: string): boolean => {
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  return emailRegex.test(email);
};

export const passwordValidation = (password: string): boolean => {
  const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  return passwordRegex.test(password);
};

export const LEICodeValidation = (LEICode: string) => {
  const LEICodeRegex = /^\d{10}$/;
  return LEICodeRegex.test(LEICode);
};

export const authValueLengthChecked = (
  email: string,
  password: string
): boolean => {
  return email.length !== 0 && password.length !== 0 ? true : false;
};
