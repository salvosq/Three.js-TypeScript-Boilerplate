import { PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { createCamera } from './components/camera'
import { createCube } from './components/cube'
import { createScene } from './components/scene'

import { createRenderer } from './systems/renderer'
import { Resizer } from './systems/Resizer'

// These variables are module-scoped: we cannot access them
// from outside the module
let camera:PerspectiveCamera
let renderer:WebGLRenderer
let scene:Scene

class World {
  constructor(container:HTMLDivElement) {
    camera = createCamera()
    scene = createScene()
    renderer = createRenderer()
    container.append(renderer.domElement)

    const cube = createCube()

    scene.add(cube)

    const resizer = new Resizer(container, camera, renderer)
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera)
  }
}

export { World }