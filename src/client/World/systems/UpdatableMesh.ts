import { Mesh } from "three"
import { Updatable } from "./Updatable";

export class UpdatableMesh extends Mesh implements Updatable {
  tick(delta: number): void {
    throw new Error("Method not implemented.")
  }
}
