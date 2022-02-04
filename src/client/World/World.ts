import { PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { createCamera } from './components/camera'
import { createCube } from './components/cube'
import { createLights } from './components/lights'
import { createScene } from './components/scene'

import { createRenderer } from './systems/renderer'
import { Resizer } from './systems/Resizer'

// These variables are module-scoped: we cannot access them
// from outside the module
let camera:PerspectiveCamera
let scene:Scene
let renderer:WebGLRenderer

class World {
  constructor(container:HTMLDivElement) {
    camera = createCamera()
    scene = createScene()
    renderer = createRenderer()
    container.append(renderer.domElement)

    const cube = createCube()
    const light = createLights()

    scene.add(cube, light)

    const resizer = new Resizer(container, camera, renderer)
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera)
  }
}

export { World }