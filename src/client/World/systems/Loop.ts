import { Clock, PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { UpdatableMesh } from './UpdatableMesh'

class Loop {
  camera: PerspectiveCamera
  scene: Scene
  renderer: WebGLRenderer
  updatables: UpdatableMesh[]

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
    for (const object of this.updatables) {
      object.tick()
    }
  }
}

export { Loop }
