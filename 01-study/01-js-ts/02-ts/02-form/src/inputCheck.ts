export type CheckConfig = {
  input: HTMLInputElement;
  errorSpan?: HTMLSpanElement;
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
    upperChars?: number;
    lowerChars?: number;
    specialChars?: number;
    numerics?: number;
  };
};

export function inputCheck(config: CheckConfig): Validation {
  const value = config.input.value;
  const validation: Validation = { input: config.input };
  if (value.length > 0) {
    if (config.only && config.only === 'CHARACTERS')
      validation.only = !/\d/.test(value);
    else if (config.only === 'NUMBERS') validation.only = !/\D/.test(value);

    if (config.onlyCase && config.onlyCase === 'UPPERCASE')
      validation.onlyCase = !/[a-z]/.test(value);
    else if (config.onlyCase === 'LOWERCASE')
      validation.onlyCase = !/[A-Z]/.test(value);
  }
  if (config.limit) {
    validation.limit = {
      min: config.limit.min <= value.length,
      max: config.limit.max >= value.length,
    };
  }

  if (config.haveChar) {
    const lowers = value.match(/[a-z]/g);
    const uppers = value.match(/[A-Z]/g);
    const specials = value.match(/[^\wÁ-ú]/gi);
    const numbers = value.match(/\d/g);

    validation.have = {
      upperChars: uppers ? uppers.length : 0,
      lowerChars: lowers ? lowers.length : 0,
      specialChars: specials ? specials.length : 0,
      numerics: numbers ? numbers.length : 0,
    };
  }

  return validation;
}

export function msgFlags(config: CheckConfig): string {
  const valid = inputCheck(config);
  let errorFlags = '';

  if (!valid.only) {
    if (config.only === 'CHARACTERS') errorFlags += ' evite números';
    else if (config.only === 'NUMBERS') errorFlags += ' evite letras';
  }

  if (valid.limit) {
    if (!valid.limit.min) errorFlags += ', muito curto';
    else if (!valid.limit.max) errorFlags += ',  muito grande';
  }

  if (valid.have) {
    if (valid.have.numerics) errorFlags += ', adicione números';
    else if (valid.have.upperChars) errorFlags += ', adicione Maiúsculas';
    else if (valid.have.lowerChars) errorFlags += ', adicione Minúsculas';
    else if (valid.have.specialChars) errorFlags += ', adicione Caracteres';
  }

  return errorFlags.slice(1);
}
