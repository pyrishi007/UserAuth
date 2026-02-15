import { EmailRegex, PasswordRegex } from "./regex";

const validation = (email, password) => {
  const Email = email?.current?.value?.trim() || "";
  const Password = password?.current?.value?.trim() || "";
  //Alert
  if (!Email || !Password) return "Kindly enter your email and password";

  //Email && Password check
  const isEmailValid = EmailRegex.test(Email);
  const isPasswordValid = PasswordRegex.test(Password);

  //ErrorMessage
  if (!isEmailValid || !isPasswordValid) return "Invalid Email or Password";

  //SuccessFul Validation
  return null;
};

export default validation;
