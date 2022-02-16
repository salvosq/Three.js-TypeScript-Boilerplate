import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { setupModel } from './setupModel'

async function loadBirds() {
  const loader = new GLTFLoader()

  const parrotData = await loader.loadAsync('/assets/models/Parrot.glb')

  console.log('Squaaawk!', parrotData)

  const parrot = setupModel(parrotData)

  return { parrot }
}

export { loadBirds }
