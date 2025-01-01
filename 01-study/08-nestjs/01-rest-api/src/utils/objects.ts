export const getPasswordRules = (rule: any) => ({
  minLength: 8,
  minLowercase: 0,
  minNumbers: 0,
  minSymbols: 0,
  minUppercase: 0,
  ...rule,
});
