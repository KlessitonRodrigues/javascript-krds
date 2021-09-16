const colors = {
  red: '#F00',
  green: '#0F0',
  blue: '#00F',
};

// getting type
type Colors = typeof colors;

// getting keys in union format
type colorsKeys = keyof Colors;

export function hexCodeOf(color: colorsKeys) {
  return colors[color];
}

hexCodeOf("blue")
hexCodeOf("red")