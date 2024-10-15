export const checkEmail = (email:string): boolean=>{
  const isValid = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/.test(email);
  return isValid
}
export const checkPassword = (password: string ): boolean=>{
  const isPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
  return isPassword;
}