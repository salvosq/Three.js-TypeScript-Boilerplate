import { World } from './World/World'

// create the main function
function main() {
  // Get a reference to the container element
  const container = document.querySelector('#scene-container')
  if (!(container instanceof HTMLDivElement)) {
    throw new Error('scene-container div not found in dom')
  }
  
  // 1. Create an instance of the World app
  const world = new World(container)

  // 2. Start the animation loop
  world.start()
}

// call main to start the app
main()
