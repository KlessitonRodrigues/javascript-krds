// first arg is the "this" type
export function localeDate(this: Date, label: string) {
  return label + '' + this.toLocaleString();
}

localeDate.call(new Date(), 'DATE:');
localeDate.apply(new Date(), ['Date:']);
