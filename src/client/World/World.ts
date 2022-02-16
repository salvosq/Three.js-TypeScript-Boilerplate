import { PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { createCamera } from './components/camera'
import { createLights } from './components/lights'
import { createScene } from './components/scene'
import { createControls } from './systems/controls'
import { Loop } from './systems/Loop'

import { createRenderer } from './systems/renderer'
import { Resizer } from './systems/Resizer'
import { loadBirds } from './components/birds/birds'

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

    const controls = createControls(camera, renderer.domElement)

    const { ambientLight, mainLight } = createLights()

    loop.updatables.push(controls)

    scene.add(ambientLight, mainLight)

    const resizer = new Resizer(container, camera, renderer)
  }

  async init() {
    const { parrot } = await loadBirds()
    scene.add(parrot)
  }

  start() {
    loop.start()
  }

  stop() {
    loop.stop()
  }
}

export { World }
