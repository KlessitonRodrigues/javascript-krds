import { inputCheck } from './inputCheck';

const form = document.getElementById('login-form') as HTMLFormElement;
const iptName = document.getElementById('ipt-name') as HTMLInputElement;
const iptEmail = document.getElementById('ipt-email') as HTMLInputElement;
const iptPass = document.getElementById('ipt-password') as HTMLInputElement;
const iptPassCheck = document.getElementById(
  'ipt-password-check',
) as HTMLInputElement;

form.addEventListener('submit', (ev) => checkInputs(ev));

function checkInputs(ev: Event): void {
  ev.preventDefault();

  inputCheck({
    input: iptName,
    only: 'CHARACTERS',
    onlyCase: 'UPPERCASE',
    limit: { min: 4, max: 6 },
  });
}
