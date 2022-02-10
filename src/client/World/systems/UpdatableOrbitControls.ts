import { Updatable } from "./Updatable";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export class UpdatableOrbitControls extends OrbitControls implements Updatable {
  tick(delta: number): void {
    throw new Error("Method not implemented.")
  }
}
