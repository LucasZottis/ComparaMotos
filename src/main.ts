import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MotorcycleSelectorComponent } from './components/motorcycle-selector.component';
import { MotorcycleComparisonComponent } from './components/motorcycle-comparison.component';
import { Motorcycle } from './interfaces/motorcycle.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MotorcycleSelectorComponent, MotorcycleComparisonComponent],
  template: `
    <div class="app-container">
      <header class="header">
        <div class="container">
          <h1 class="main-title">
            <span class="title-icon">🏍️</span>
            MotoCompare
          </h1>
          <p class="subtitle">Compare especificações técnicas de motocicletas</p>
        </div>
      </header>

      <main class="main-content">
        <div class="container">
          <section class="selection-section">
            <h2 class="section-title">Selecione as Motocicletas para Comparar</h2>
            
            <div class="selectors-grid">
              <app-motorcycle-selector
                title="Primeira Motocicleta"
                selectorId="1"
                (motorcycleSelected)="onFirstMotorcycleSelected($event)">
              </app-motorcycle-selector>

              <div class="vs-divider">
                <span class="vs-text">VS</span>
              </div>

              <app-motorcycle-selector
                title="Segunda Motocicleta"
                selectorId="2"
                (motorcycleSelected)="onSecondMotorcycleSelected($event)">
              </app-motorcycle-selector>
            </div>

            <div class="compare-button-container" *ngIf="firstMotorcycle && secondMotorcycle">
              <button 
                class="compare-button"
                [class.disabled]="!canCompare()"
                [disabled]="!canCompare()"
                (click)="compare()">
                {{ getCompareButtonText() }}
              </button>
            </div>
          </section>

          <section class="comparison-section" *ngIf="showComparison">
            <app-motorcycle-comparison
              [motorcycle1]="firstMotorcycle"
              [motorcycle2]="secondMotorcycle">
            </app-motorcycle-comparison>
          </section>
        </div>
      </main>

      <footer class="footer">
        <div class="container">
          <p>&copy; 2024 MotoCompare. Comparação técnica de motocicletas.</p>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #1f2937;
    }

    .app-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      flex-direction: column;
    }

    .header {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      padding: 24px 0;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .main-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1f2937;
      text-align: center;
      margin-bottom: 8px;
    }

    .title-icon {
      margin-right: 12px;
    }

    .subtitle {
      font-size: 1.1rem;
      color: #6b7280;
      text-align: center;
    }

    .main-content {
      flex: 1;
      padding: 40px 0;
    }

    .selection-section {
      margin-bottom: 40px;
    }

    .section-title {
      font-size: 1.75rem;
      font-weight: 600;
      color: white;
      text-align: center;
      margin-bottom: 32px;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .selectors-grid {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      gap: 32px;
      align-items: center;
      margin-bottom: 32px;
    }

    .vs-divider {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .vs-text {
      background: linear-gradient(135deg, #ea580c 0%, #f97316 100%);
      color: white;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
      font-weight: 700;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
      border: 3px solid white;
    }

    .compare-button-container {
      display: flex;
      justify-content: center;
      margin-top: 32px;
    }

    .compare-button {
      background: linear-gradient(135deg, #059669 0%, #10b981 100%);
      color: white;
      border: none;
      padding: 16px 32px;
      border-radius: 12px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 16px rgba(5, 150, 105, 0.3);
      min-width: 200px;
    }

    .compare-button:hover:not(.disabled) {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(5, 150, 105, 0.4);
    }

    .compare-button.disabled {
      background: #9ca3af;
      cursor: not-allowed;
      box-shadow: none;
    }

    .comparison-section {
      background: rgba(255, 255, 255, 0.95);
      border-radius: 20px;
      padding: 32px;
      backdrop-filter: blur(10px);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    }

    .footer {
      background: rgba(31, 41, 55, 0.9);
      color: white;
      text-align: center;
      padding: 20px 0;
      backdrop-filter: blur(10px);
    }

    @media (max-width: 1024px) {
      .selectors-grid {
        grid-template-columns: 1fr auto 1fr;
        gap: 32px;
      }

      .vs-divider {
        order: 0;
      }
    }

    @media (max-width: 768px) {
      .selectors-grid {
        grid-template-columns: 1fr;
        gap: 24px;
      }

      .vs-divider {
        order: 2;
      }

      .main-title {
        font-size: 2rem;
      }

      .section-title {
        font-size: 1.5rem;
      }

      .comparison-section {
        padding: 20px;
      }

      .container {
        padding: 0 16px;
      }
    }
  `]
})
export class App {
  firstMotorcycle: Motorcycle | undefined;
  secondMotorcycle: Motorcycle | undefined;
  showComparison: boolean = false;

  onFirstMotorcycleSelected(motorcycle: Motorcycle | undefined) {
    this.firstMotorcycle = motorcycle;
    this.showComparison = false;
  }

  onSecondMotorcycleSelected(motorcycle: Motorcycle | undefined) {
    this.secondMotorcycle = motorcycle;
    this.showComparison = false;
  }

  canCompare(): boolean {
    if (!this.firstMotorcycle || !this.secondMotorcycle) {
      return false;
    }
    
    // Evitar comparação da mesma motocicleta
    return this.firstMotorcycle.id !== this.secondMotorcycle.id;
  }

  getCompareButtonText(): string {
    if (!this.firstMotorcycle || !this.secondMotorcycle) {
      return 'Selecione duas motocicletas';
    }
    
    if (this.firstMotorcycle.id === this.secondMotorcycle.id) {
      return 'Selecione motocicletas diferentes';
    }
    
    return 'Comparar Motocicletas';
  }

  compare() {
    if (this.canCompare()) {
      this.showComparison = true;
      // Scroll suave para a seção de comparação
      setTimeout(() => {
        const comparisonSection = document.querySelector('.comparison-section');
        if (comparisonSection) {
          comparisonSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }
}

bootstrapApplication(App);