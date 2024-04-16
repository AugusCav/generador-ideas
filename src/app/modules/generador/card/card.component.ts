import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Tema } from 'src/app/core/interfaces/tema.interface';
import { Tipo } from 'src/app/core/interfaces/tipo.interface';
import {
  trigger,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('generar', [
      transition('* => true', [
        animate(
          '0.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)',
          keyframes([
            style({ transform: 'scaleX(.4)' }),
            style({ transform: 'scaleX(1)' }),
          ])
        ),
      ]),
      transition('* => false', [
        animate(
          '0.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)',
          keyframes([
            style({ transform: 'scaleX(.4)' }),
            style({ transform: 'scaleX(1)' }),
          ])
        ),
      ]),
    ]),
  ],
})
export class CardComponent implements OnInit, OnChanges {
  @Input() tipo!: Tipo;
  @Input() tema!: Tema;
  @Output() regenerar = new EventEmitter<boolean>();
  subtitulo: string = '';
  esTema: boolean = true;
  estado: boolean = false;

  animar() {
    this.estado = !this.estado;
  }

  ngOnInit(): void {
    if (this.tema != undefined) {
      this.subtitulo = '🎨 Tema';
    } else {
      this.subtitulo = '🔧 Tipo';
      this.esTema = false;
    }
    this.animar();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.animar();
  }

  regenerarEmit() {
    this.regenerar.emit(this.esTema);
  }
}
