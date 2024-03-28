import { Component, OnInit } from '@angular/core';
import { Tema } from 'src/app/core/interfaces/tema.interface';
import { Tipo } from 'src/app/core/interfaces/tipo.interface';
import { GeneradorService } from 'src/app/core/services/generador.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  tema: Tema = {} as Tema;
  tipo: Tipo = {} as Tipo;
  carga: number = 0;
  intervalId: ReturnType<typeof setInterval> = setInterval(() => {}, 0);

  constructor(private generadorService: GeneradorService) {}

  ngOnInit(): void {}

  cargar() {
    let randomData = this.generadorService.getRandom();

    this.tema = randomData.tema;
    this.tipo = randomData.tipo;

    clearInterval(this.intervalId);
    this.carga = 0;

    this.carga = 100;

    this.intervalId = setInterval(() => {
      this.carga = 0;
    }, 500);
  }
}
