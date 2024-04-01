export const checkValidData = (email, password,name,isSignIn) => {
  if(!email) return "Please enter your email";
  if(!password) return "Please enter your password";
  if(!isSignIn && !name) return "Please enter the name";
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password);
  if(!isSignIn){
    var isNameValid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);
  }

  if (!isEmailValid) return "Email ID is not valid format ";
  if (!isPasswordValid) return "Password is not valid format";
  if(!isSignIn && !isNameValid) return "Name entered is not a valid format";

  return null;
};
