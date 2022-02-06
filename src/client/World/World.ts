import { PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { createCamera } from './components/camera'
import { createCube } from './components/cube'
import { createLights } from './components/lights'
import { createScene } from './components/scene'
import { Loop } from './systems/Loop'

import { createRenderer } from './systems/renderer'
import { Resizer } from './systems/Resizer'

// These variables are module-scoped: we cannot access them
// from outside the module
let camera:PerspectiveCamera
let scene:Scene
let renderer:WebGLRenderer
let loop:Loop

class World {
  constructor(container:HTMLDivElement) {
    camera = createCamera()
    scene = createScene()
    renderer = createRenderer()
    loop = new Loop(camera, scene, renderer)
    container.append(renderer.domElement)

    const cube = createCube()
    const light = createLights()

    scene.add(cube, light)

    const resizer = new Resizer(container, camera, renderer)
  }

  start() {
    loop.start()
  }

  stop() {
    loop.stop()
  }
}

export { World }
