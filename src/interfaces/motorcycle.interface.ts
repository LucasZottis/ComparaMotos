export interface Motorcycle {
  id: number;
  brand: string;
  model: string;
  year: number;
  specifications: {
    length: string;
    colors: string[];
    brakeType: {
      front: string;
      rear: string;
    };
    headlight: string;
    engine: {
      displacement: string;
      type: string;
      power: string;
    };
    weight: string;
    fuelCapacity: string;
  };
  image: string;
}

export interface Brand {
  name: string;
  models: Model[];
}

export interface Model {
  name: string;
  years: number[];
}