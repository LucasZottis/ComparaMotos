import { Injectable } from '@angular/core';
import { Motorcycle, Brand, Model } from '../interfaces/motorcycle.interface';

@Injectable({
  providedIn: 'root'
})
export class MotorcycleService {
  private motorcycles: Motorcycle[] = [
    {
      id: 1,
      brand: 'Honda',
      model: 'CBR 600RR',
      year: 2024,
      specifications: {
        length: '2040mm',
        colors: ['Vermelho', 'Preto', 'Branco'],
        brakeType: {
          front: 'Disco duplo com ABS',
          rear: 'Disco simples com ABS'
        },
        headlight: 'LED Full',
        engine: {
          displacement: '599cc',
          type: '4 cilindros em linha',
          power: '121 cv'
        },
        weight: '194kg',
        fuelCapacity: '18.1L'
      },
      image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg'
    },
    {
      id: 7,
      brand: 'Honda',
      model: 'CBR 600RR',
      year: 2023,
      specifications: {
        length: '2040mm',
        colors: ['Vermelho', 'Preto'],
        brakeType: {
          front: 'Disco duplo com ABS',
          rear: 'Disco simples com ABS'
        },
        headlight: 'LED',
        engine: {
          displacement: '599cc',
          type: '4 cilindros em linha',
          power: '118 cv'
        },
        weight: '196kg',
        fuelCapacity: '18.1L'
      },
      image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg'
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'CB 650F',
      year: 2024,
      specifications: {
        length: '2110mm',
        colors: ['Azul', 'Prata', 'Preto'],
        brakeType: {
          front: 'Disco duplo',
          rear: 'Disco simples'
        },
        headlight: 'LED com DRL',
        engine: {
          displacement: '649cc',
          type: '4 cilindros em linha',
          power: '95 cv'
        },
        weight: '208kg',
        fuelCapacity: '17.3L'
      },
      image: 'https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg'
    },
    {
      id: 8,
      brand: 'Honda',
      model: 'CB 650F',
      year: 2023,
      specifications: {
        length: '2110mm',
        colors: ['Azul', 'Prata'],
        brakeType: {
          front: 'Disco duplo',
          rear: 'Disco simples'
        },
        headlight: 'LED',
        engine: {
          displacement: '649cc',
          type: '4 cilindros em linha',
          power: '92 cv'
        },
        weight: '210kg',
        fuelCapacity: '17.3L'
      },
      image: 'https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg'
    },
    {
      id: 3,
      brand: 'Yamaha',
      model: 'YZF-R6',
      year: 2024,
      specifications: {
        length: '2040mm',
        colors: ['Azul Yamaha', 'Preto', 'Branco'],
        brakeType: {
          front: 'Disco duplo radial',
          rear: 'Disco simples'
        },
        headlight: 'LED Bi-Function',
        engine: {
          displacement: '599cc',
          type: '4 cilindros em linha',
          power: '118 cv'
        },
        weight: '190kg',
        fuelCapacity: '17L'
      },
      image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg'
    },
    {
      id: 9,
      brand: 'Yamaha',
      model: 'YZF-R6',
      year: 2022,
      specifications: {
        length: '2040mm',
        colors: ['Azul Yamaha', 'Preto'],
        brakeType: {
          front: 'Disco duplo radial',
          rear: 'Disco simples'
        },
        headlight: 'LED',
        engine: {
          displacement: '599cc',
          type: '4 cilindros em linha',
          power: '116 cv'
        },
        weight: '192kg',
        fuelCapacity: '17L'
      },
      image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg'
    },
    {
      id: 4,
      brand: 'Yamaha',
      model: 'MT-07',
      year: 2024,
      specifications: {
        length: '2085mm',
        colors: ['Cinza', 'Azul', 'Laranja'],
        brakeType: {
          front: 'Disco duplo com ABS',
          rear: 'Disco simples com ABS'
        },
        headlight: 'LED',
        engine: {
          displacement: '689cc',
          type: '2 cilindros em paralelo',
          power: '75 cv'
        },
        weight: '184kg',
        fuelCapacity: '14L'
      },
      image: 'https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg'
    },
    {
      id: 5,
      brand: 'Suzuki',
      model: 'GSX-R750',
      year: 2024,
      specifications: {
        length: '2030mm',
        colors: ['Azul/Branco', 'Preto/Cinza'],
        brakeType: {
          front: 'Disco duplo Brembo',
          rear: 'Disco simples'
        },
        headlight: 'LED Multi-reflector',
        engine: {
          displacement: '749cc',
          type: '4 cilindros em linha',
          power: '148 cv'
        },
        weight: '190kg',
        fuelCapacity: '16L'
      },
      image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg'
    },
    {
      id: 10,
      brand: 'Suzuki',
      model: 'GSX-R750',
      year: 2023,
      specifications: {
        length: '2030mm',
        colors: ['Azul/Branco'],
        brakeType: {
          front: 'Disco duplo Brembo',
          rear: 'Disco simples'
        },
        headlight: 'LED',
        engine: {
          displacement: '749cc',
          type: '4 cilindros em linha',
          power: '145 cv'
        },
        weight: '192kg',
        fuelCapacity: '16L'
      },
      image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg'
    },
    {
      id: 6,
      brand: 'Kawasaki',
      model: 'Ninja ZX-6R',
      year: 2024,
      specifications: {
        length: '2020mm',
        colors: ['Verde Kawasaki', 'Preto'],
        brakeType: {
          front: 'Disco duplo petal',
          rear: 'Disco simples petal'
        },
        headlight: 'LED Dual',
        engine: {
          displacement: '636cc',
          type: '4 cilindros em linha',
          power: '130 cv'
        },
        weight: '196kg',
        fuelCapacity: '17L'
      },
      image: 'https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg'
    }
  ];

  private brands: Brand[] = [
    { 
      name: 'Honda', 
      models: [
        { name: 'CBR 600RR', years: [2024, 2023] },
        { name: 'CB 650F', years: [2024, 2023] }
      ] 
    },
    { 
      name: 'Yamaha', 
      models: [
        { name: 'YZF-R6', years: [2024, 2022] },
        { name: 'MT-07', years: [2024] }
      ] 
    },
    { 
      name: 'Suzuki', 
      models: [
        { name: 'GSX-R750', years: [2024, 2023] }
      ] 
    },
    { 
      name: 'Kawasaki', 
      models: [
        { name: 'Ninja ZX-6R', years: [2024] }
      ] 
    }
  ];

  getBrands(): Brand[] {
    return this.brands;
  }

  getModelsByBrand(brandName: string): Model[] {
    const brand = this.brands.find(b => b.name === brandName);
    return brand ? brand.models : [];
  }

  getYearsByBrandAndModel(brandName: string, modelName: string): number[] {
    const brand = this.brands.find(b => b.name === brandName);
    if (!brand) return [];
    
    const model = brand.models.find(m => m.name === modelName);
    return model ? model.years : [];
  }

  getMotorcycleByBrandModelAndYear(brand: string, model: string, year: number): Motorcycle | undefined {
    return this.motorcycles.find(m => m.brand === brand && m.model === model && m.year === year);
  }

  getAllMotorcycles(): Motorcycle[] {
    return this.motorcycles;
  }
}