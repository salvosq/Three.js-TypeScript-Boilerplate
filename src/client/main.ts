import { World } from './World/World'

// create the main function
async function main() {
  // Get a reference to the container element
  const container = document.querySelector('#scene-container')
  if (!(container instanceof HTMLDivElement)) {
    throw new Error('scene-container div not found in dom')
  }

  // create a new world
  const world = new World(container)

  // complete async tasks
  await world.init()

  // start the animation loop
  world.start()
}

// call main to start the app
main().catch((err) => {
  console.error(err)
})
