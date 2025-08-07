import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MotorcycleService } from '../services/motorcycle.service';
import { Brand, Model, Motorcycle } from '../interfaces/motorcycle.interface';

@Component({
  selector: 'app-motorcycle-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="selector-container">
      <h3 class="selector-title">{{ title }}</h3>
      
      <div class="form-group">
        <label for="brand-{{ selectorId }}">Fabricante</label>
        <select 
          id="brand-{{ selectorId }}"
          [(ngModel)]="selectedBrand" 
          (ngModelChange)="onBrandChange()"
          class="form-select"
        >
          <option value="">Selecione uma fabricante</option>
          <option *ngFor="let brand of brands" [value]="brand.name">
            {{ brand.name }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="model-{{ selectorId }}">Modelo</label>
        <select 
          id="model-{{ selectorId }}"
          [(ngModel)]="selectedModel" 
          (ngModelChange)="onModelChange()"
          class="form-select"
          [disabled]="!selectedBrand"
        >
          <option value="">Selecione um modelo</option>
          <option *ngFor="let model of availableModels" [value]="model.name">
            {{ model.name }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="year-{{ selectorId }}">Ano</label>
        <select 
          id="year-{{ selectorId }}"
          [(ngModel)]="selectedYear" 
          (ngModelChange)="onYearChange()"
          class="form-select"
          [disabled]="!selectedModel"
        >
          <option value="">Selecione um ano</option>
          <option *ngFor="let year of availableYears" [value]="year">
            {{ year }}
          </option>
        </select>
      </div>

      <div *ngIf="selectedMotorcycle" class="motorcycle-preview">
        <img [src]="selectedMotorcycle.image" [alt]="selectedMotorcycle.model" class="preview-image">
        <div class="preview-info">
          <h4>{{ selectedMotorcycle.brand }} {{ selectedMotorcycle.model }}</h4>
          <p class="year">{{ selectedMotorcycle.year }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .selector-container {
      background: white;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
      border: 1px solid #e5e7eb;
    }

    .selector-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 20px;
      text-align: center;
    }

    .form-group {
      margin-bottom: 16px;
    }

    label {
      display: block;
      font-size: 0.875rem;
      font-weight: 500;
      color: #374151;
      margin-bottom: 6px;
    }

    .form-select {
      width: 100%;
      padding: 10px 12px;
      border: 2px solid #d1d5db;
      border-radius: 8px;
      font-size: 14px;
      color: #374151;
      background-color: white;
      transition: all 0.3s ease;
    }

    .form-select:focus {
      outline: none;
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    }

    .form-select:disabled {
      background-color: #f9fafb;
      color: #9ca3af;
      cursor: not-allowed;
    }

    .motorcycle-preview {
      margin-top: 20px;
      padding: 16px;
      background: #f8fafc;
      border-radius: 8px;
      border: 1px solid #e2e8f0;
    }

    .preview-image {
      width: 100%;
      height: 120px;
      object-fit: cover;
      border-radius: 6px;
      margin-bottom: 12px;
    }

    .preview-info h4 {
      font-size: 1.1rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 4px;
    }

    .year {
      font-size: 0.875rem;
      color: #6b7280;
      margin: 0;
    }
  `]
})
export class MotorcycleSelectorComponent {
  @Input() title: string = '';
  @Input() selectorId: string = '';
  @Output() motorcycleSelected = new EventEmitter<Motorcycle | undefined>();

  selectedBrand: string = '';
  selectedModel: string = '';
  selectedYear: number | '' = '';
  brands: Brand[] = [];
  availableModels: Model[] = [];
  availableYears: number[] = [];
  selectedMotorcycle: Motorcycle | undefined;

  constructor(private motorcycleService: MotorcycleService) {
    this.brands = this.motorcycleService.getBrands();
  }

  onBrandChange() {
    this.selectedModel = '';
    this.selectedYear = '';
    this.selectedMotorcycle = undefined;
    this.availableYears = [];
    this.availableModels = this.selectedBrand 
      ? this.motorcycleService.getModelsByBrand(this.selectedBrand)
      : [];
    this.motorcycleSelected.emit(undefined);
  }

  onModelChange() {
    this.selectedYear = '';
    this.selectedMotorcycle = undefined;
    this.availableYears = this.selectedBrand && this.selectedModel
      ? this.motorcycleService.getYearsByBrandAndModel(this.selectedBrand, this.selectedModel)
      : [];
    this.motorcycleSelected.emit(undefined);
  }

  onYearChange() {
    if (this.selectedBrand && this.selectedModel && this.selectedYear) {
      this.selectedMotorcycle = this.motorcycleService.getMotorcycleByBrandModelAndYear(
        this.selectedBrand,
        this.selectedModel,
        Number(this.selectedYear)
      );
    } else {
      this.selectedMotorcycle = undefined;
    }
    this.motorcycleSelected.emit(this.selectedMotorcycle);
  }
}