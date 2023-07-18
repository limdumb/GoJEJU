export const emailValidation = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const passwordValidation = (password: string): boolean => {
  const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  return passwordRegex.test(password);
};

export const LEICodeValidation = (LEICode: string) => {
  const LEICodeRegex = /^[0-9]+$/;
  return LEICodeRegex.test(LEICode);
};

export const authValueLengthChecked = (
  email: string,
  password: string
): boolean => {
  return email.length !== 0 && password.length !== 0 ? true : false;
};
