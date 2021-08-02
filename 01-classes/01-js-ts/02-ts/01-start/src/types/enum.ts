enum Items {
  item1, // 0
  item2, // 1
  item3, // 2
  item4 = 10,
  item5, // 11
}

enum Colors {
  RED = 'F00',
  GREEN = '0F0',
  BLUE = '00F',
}

Items[11]; // => item5
Colors.BLUE; // => 00F
