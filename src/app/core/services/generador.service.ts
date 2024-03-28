import { Injectable } from '@angular/core';
import { Tema } from '../interfaces/tema.interface';
import { TEMAS } from '../constants/temas.constant';
import { TIPOS } from '../constants/tipos.constant';
import { Tipo } from '../interfaces/tipo.interface';

@Injectable({
  providedIn: 'root',
})
export class GeneradorService {
  private _temas: Tema[] = TEMAS;
  private _tipos: Tipo[] = TIPOS;

  constructor() {}

  public get temas(): Tema[] {
    return this._temas;
  }

  public get tipos(): Tipo[] {
    return this._tipos;
  }

  getRandom(): { tema: Tema; tipo: Tipo } {
    const tema = this.temas[Math.floor(Math.random() * this.temas.length)];
    const tipo = this.tipos[Math.floor(Math.random() * this.tipos.length)];
    return { tema, tipo };
  }
}
