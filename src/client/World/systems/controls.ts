import { Camera } from 'three'
import { UpdatableOrbitControls } from './UpdatableOrbitControls'

function createControls(camera: Camera, canvas: HTMLElement) {
  const controls = new UpdatableOrbitControls(camera, canvas)

  controls.enableDamping = true

  controls.tick = () => controls.update()

  return controls
}

export { createControls }
