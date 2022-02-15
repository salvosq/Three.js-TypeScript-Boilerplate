import {
  SphereBufferGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  } from 'three'
import { UpdatableGroup } from '../systems/UpdatableGroup'

function createMeshGroup() {
  const group = new UpdatableGroup()

  const geometry = new SphereBufferGeometry(0.25, 16, 16)

  const material = new MeshStandardMaterial({
    color: 'indigo',
  })

  // create one prototype sphere
  const protoSphere = new Mesh(geometry, material)

  // add the sphere to the group
  group.add(protoSphere)

  for (let i = 0; i < 1; i += 0.05) {
    const sphere = protoSphere.clone()

    // position the spheres on around a circle
    sphere.position.x = Math.cos(2 * Math.PI * i)
    sphere.position.y = Math.sin(2 * Math.PI * i)

    sphere.scale.multiplyScalar(0.01 + i)

    group.add(sphere)
  }

  group.scale.multiplyScalar(2)

  const radiansPerSecond = MathUtils.degToRad(30)

  // each frame, rotate the entire group of spheres
  group.tick = (delta) => {
    group.rotation.z -= delta * radiansPerSecond
  }

  return group
}

export { createMeshGroup }
