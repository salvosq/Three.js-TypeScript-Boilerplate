import { BoxBufferGeometry, MathUtils, MeshStandardMaterial, TextureLoader } from 'three'
import { UpdatableMesh } from '../systems/UpdatableMesh'

function createMaterial() {
  // create a texture loader.
  const textureLoader = new TextureLoader()

  // load a texture
  const texture = textureLoader.load(
    '/assets/textures/uv-test-bw.png',
  )

  // create a "standard" material using
  // the texture we just loaded as a color map
  const material = new MeshStandardMaterial({
    map: texture,
  })

  return material
}

function createCube() {
  // create a geometry
  const geometry = new BoxBufferGeometry(2, 2, 2)

  const material = createMaterial()

  // create a Mesh containing the geometry and material
  const cube = new UpdatableMesh(geometry, material)

  cube.rotation.set(-0.5, -0.1, 0.8)

  const radiansPerSecond = MathUtils.degToRad(30)

  // this method will be called once per frame
  cube.tick = (delta:number) => {
    // increase the cube's rotation each frame
    cube.rotation.z += radiansPerSecond * delta
    cube.rotation.x += radiansPerSecond * delta
    cube.rotation.y += radiansPerSecond * delta
  }

  return cube
}

export { createCube }
