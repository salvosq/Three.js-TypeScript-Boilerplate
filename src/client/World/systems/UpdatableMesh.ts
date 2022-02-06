import { Mesh } from "three"

export class UpdatableMesh extends Mesh {
  tick(delta: number): void {}
}
