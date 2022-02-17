import { AnimationMixer } from "three"
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"
import { UpdatableMesh } from "../../systems/UpdatableMesh"

function setupModel(data: GLTF) {
  const model:UpdatableMesh = data.scene.children[0] as UpdatableMesh
  const clip = data.animations[0]

  const mixer = new AnimationMixer(model)
  const action = mixer.clipAction(clip)
  action.play()

  model.tick = (delta) => mixer.update(delta)

  return model
}

export { setupModel }
