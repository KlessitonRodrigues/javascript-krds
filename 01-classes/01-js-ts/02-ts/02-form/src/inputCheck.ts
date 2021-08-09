type CheckConfig = {
  input: HTMLInputElement;
  only?: 'CHARACTERS' | 'NUMBERS';
  onlyCase?: 'UPPERCASE' | 'LOWERCASE';
  limit?: { min: number; max: number };
  haveChar?: boolean;
};

type Validation = {
  input: HTMLInputElement;
  only?: boolean;
  onlyCase?: boolean;
  limit?: { min: boolean; max: boolean };
  have?: {
    upperChar?: number;
    lowerChar?: number;
    specialChar?: number;
    numeric?: number;
  };
};

export function inputCheck(config: CheckConfig): Validation {
  const value = config.input.value;
  const validation: Validation = { input: config.input };

  if (config.only && config.only === 'CHARACTERS')
    validation.only = !/\d/.test(value);
  else if (config.only === 'NUMBERS') validation.only = !/\D/.test(value);

  if (config.onlyCase && config.onlyCase === 'UPPERCASE')
    validation.onlyCase = !/[a-z]/.test(value);
  else if (config.onlyCase === 'LOWERCASE')
    validation.onlyCase = !/[A-Z]/.test(value);

  if (config.limit) {
    validation.limit = {
      min: config.limit.min <= value.length,
      max: config.limit.max >= value.length,
    };
  }

  if (config.haveChar) {
    const lowers = value.match(/[a-z]/g);
    const uppers = value.match(/[A-Z]/g);
    const special = value.match(/[@|#]/g);
    const number = value.match(/\d/g);
  }

  return validation;
}
