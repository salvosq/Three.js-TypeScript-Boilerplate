import { Group } from "three"
import { Updatable } from "./Updatable"

export class UpdatableGroup extends Group implements Updatable {
  tick(delta: number): void {
    throw new Error("Method not implemented.")
  }
}
