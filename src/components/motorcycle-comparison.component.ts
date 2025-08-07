import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Motorcycle } from '../interfaces/motorcycle.interface';

@Component({
  selector: 'app-motorcycle-comparison',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="comparison-container" *ngIf="motorcycle1 && motorcycle2">
      <h2 class="comparison-title">Comparação de Motocicletas</h2>
      
      <div class="comparison-grid">
        <!-- Motocicleta 1 -->
        <div class="motorcycle-card">
          <div class="card-header">
            <img [src]="motorcycle1.image" [alt]="motorcycle1.model" class="motorcycle-image">
            <div class="motorcycle-info">
              <h3>{{ motorcycle1.brand }} {{ motorcycle1.model }}</h3>
              <p class="year">{{ motorcycle1.year }}</p>
            </div>
          </div>
          
          <div class="specifications">
            <div class="spec-group">
              <h4>Dimensões</h4>
              <div class="spec-item">
                <span class="spec-label">Comprimento:</span>
                <span class="spec-value">{{ motorcycle1.specifications.length }}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Peso:</span>
                <span class="spec-value">{{ motorcycle1.specifications.weight }}</span>
              </div>
            </div>

            <div class="spec-group">
              <h4>Aparência</h4>
              <div class="spec-item">
                <span class="spec-label">Cores disponíveis:</span>
                <div class="colors">
                  <span *ngFor="let color of motorcycle1.specifications.colors" class="color-badge">
                    {{ color }}
                  </span>
                </div>
              </div>
              <div class="spec-item">
                <span class="spec-label">Farol:</span>
                <span class="spec-value">{{ motorcycle1.specifications.headlight }}</span>
              </div>
            </div>

            <div class="spec-group">
              <h4>Sistema de Freios</h4>
              <div class="spec-item">
                <span class="spec-label">Dianteiro:</span>
                <span class="spec-value">{{ motorcycle1.specifications.brakeType.front }}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Traseiro:</span>
                <span class="spec-value">{{ motorcycle1.specifications.brakeType.rear }}</span>
              </div>
            </div>

            <div class="spec-group">
              <h4>Motor</h4>
              <div class="spec-item">
                <span class="spec-label">Cilindrada:</span>
                <span class="spec-value">{{ motorcycle1.specifications.engine.displacement }}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Tipo:</span>
                <span class="spec-value">{{ motorcycle1.specifications.engine.type }}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Potência:</span>
                <span class="spec-value">{{ motorcycle1.specifications.engine.power }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Motocicleta 2 -->
        <div class="motorcycle-card">
          <div class="card-header">
            <img [src]="motorcycle2.image" [alt]="motorcycle2.model" class="motorcycle-image">
            <div class="motorcycle-info">
              <h3>{{ motorcycle2.brand }} {{ motorcycle2.model }}</h3>
              <p class="year">{{ motorcycle2.year }}</p>
            </div>
          </div>
          
          <div class="specifications">
            <div class="spec-group">
              <h4>Dimensões</h4>
              <div class="spec-item">
                <span class="spec-label">Comprimento:</span>
                <span class="spec-value">{{ motorcycle2.specifications.length }}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Peso:</span>
                <span class="spec-value">{{ motorcycle2.specifications.weight }}</span>
              </div>
            </div>

            <div class="spec-group">
              <h4>Aparência</h4>
              <div class="spec-item">
                <span class="spec-label">Cores disponíveis:</span>
                <div class="colors">
                  <span *ngFor="let color of motorcycle2.specifications.colors" class="color-badge">
                    {{ color }}
                  </span>
                </div>
              </div>
              <div class="spec-item">
                <span class="spec-label">Farol:</span>
                <span class="spec-value">{{ motorcycle2.specifications.headlight }}</span>
              </div>
            </div>

            <div class="spec-group">
              <h4>Sistema de Freios</h4>
              <div class="spec-item">
                <span class="spec-label">Dianteiro:</span>
                <span class="spec-value">{{ motorcycle2.specifications.brakeType.front }}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Traseiro:</span>
                <span class="spec-value">{{ motorcycle2.specifications.brakeType.rear }}</span>
              </div>
            </div>

            <div class="spec-group">
              <h4>Motor</h4>
              <div class="spec-item">
                <span class="spec-label">Cilindrada:</span>
                <span class="spec-value">{{ motorcycle2.specifications.engine.displacement }}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Tipo:</span>
                <span class="spec-value">{{ motorcycle2.specifications.engine.type }}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Potência:</span>
                <span class="spec-value">{{ motorcycle2.specifications.engine.power }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .comparison-container {
      margin-top: 32px;
    }

    .comparison-title {
      font-size: 2rem;
      font-weight: 700;
      color: #1f2937;
      text-align: center;
      margin-bottom: 32px;
    }

    .comparison-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
    }

    .motorcycle-card {
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      border: 1px solid #e5e7eb;
    }

    .card-header {
      background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
      color: white;
      padding: 24px;
      text-align: center;
    }

    .motorcycle-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 16px;
    }

    .motorcycle-info h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 4px;
    }

    .year {
      font-size: 1rem;
      opacity: 0.9;
      margin: 0;
    }

    .specifications {
      padding: 24px;
    }

    .spec-group {
      margin-bottom: 24px;
    }

    .spec-group:last-child {
      margin-bottom: 0;
    }

    .spec-group h4 {
      font-size: 1.1rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 2px solid #e5e7eb;
    }

    .spec-item {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 8px;
    }

    .spec-label {
      font-weight: 500;
      color: #6b7280;
      flex: 1;
    }

    .spec-value {
      font-weight: 600;
      color: #1f2937;
      text-align: right;
      flex: 1;
    }

    .colors {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      justify-content: flex-end;
      flex: 1;
    }

    .color-badge {
      background: #f3f4f6;
      color: #374151;
      padding: 4px 8px;
      border-radius: 16px;
      font-size: 0.75rem;
      font-weight: 500;
      border: 1px solid #d1d5db;
    }

    @media (max-width: 768px) {
      .comparison-grid {
        grid-template-columns: 1fr;
        gap: 24px;
      }

      .comparison-title {
        font-size: 1.5rem;
      }

      .spec-item {
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
      }

      .spec-value,
      .colors {
        justify-content: flex-start;
      }
    }
  `]
})
export class MotorcycleComparisonComponent {
  @Input() motorcycle1: Motorcycle | undefined;
  @Input() motorcycle2: Motorcycle | undefined;
}