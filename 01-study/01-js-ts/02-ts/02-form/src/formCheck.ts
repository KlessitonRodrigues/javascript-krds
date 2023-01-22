import { msgFlags, CheckConfig } from './inputCheck';

const form = document.getElementById('login-form') as HTMLFormElement;

function checkInputs(ev: Event): void {
  ev.preventDefault();

  function check(config: CheckConfig): void {
    const inputflags = msgFlags(config);
    config.errorSpan && (config.errorSpan.innerHTML = inputflags);
  }

  let input = document.querySelector('#ipt-name') as HTMLInputElement;
  let errorSpan = document.querySelector('#ipt-name ~ span') as HTMLSpanElement;
  check({
    input,
    errorSpan,
    only: 'CHARACTERS',
    limit: { min: 5, max: 50 },
  });

  input = document.querySelector('#ipt-email') as HTMLInputElement;
  errorSpan = document.querySelector('#ipt-email ~ span') as HTMLSpanElement;
  check({
    input,
    errorSpan,
    only: 'CHARACTERS',
    limit: { min: 5, max: 50 },
  });

  input = document.querySelector('#ipt-password') as HTMLInputElement;
  errorSpan = document.querySelector('#ipt-password ~ span') as HTMLSpanElement;
  check({
    input,
    errorSpan,
    limit: { min: 8, max: 20 },
  });

  input = document.querySelector('#ipt-password-check') as HTMLInputElement;
  errorSpan = document.querySelector(
    '#ipt-password-check ~ span',
  ) as HTMLSpanElement;
  check({
    input,
    errorSpan,
    limit: { min: 8, max: 20 },
  });
}

form.addEventListener('submit', (ev) => checkInputs(ev));
