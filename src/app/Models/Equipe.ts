import { Membre } from "./Membre";

export class Equipe {
  constructor(public name: string = '', public membres: Membre[] = []) {}
}
