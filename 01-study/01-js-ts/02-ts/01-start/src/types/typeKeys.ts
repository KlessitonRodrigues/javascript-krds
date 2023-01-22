type Car = {
  name: string;
  color: string;
  tires: {
    type: 'radial' | 'slip';
    inchs: number;
    madedBy: string;
  };
};

type Bike = {
  name: string;
  color: string;
  wheels: Car['tires'];
};

