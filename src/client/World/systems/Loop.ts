import { Clock, PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { Updatable } from './Updatable'

const clock = new Clock()

class Loop {
  camera: PerspectiveCamera
  scene: Scene
  renderer: WebGLRenderer
  updatables: Updatable[]

  constructor(camera: PerspectiveCamera, scene: Scene, renderer: WebGLRenderer) {
    this.camera = camera
    this.scene = scene
    this.renderer = renderer
    this.updatables = []
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      // tell every animated object to tick forward one frame
      this.tick()

      // render a frame
      this.renderer.render(this.scene, this.camera)
    })
  }

  stop() {
    this.renderer.setAnimationLoop(null)
  }

  tick() {
    const delta = clock.getDelta()

    for (const updatable of this.updatables) {
      updatable.tick(delta)
    }
  }
}

export { Loop }
