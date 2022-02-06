import { Clock, PerspectiveCamera, Scene, WebGLRenderer } from 'three';

class Loop {
  camera: PerspectiveCamera;
  scene: Scene;
  renderer: WebGLRenderer;

  constructor(camera:PerspectiveCamera, scene:Scene, renderer:WebGLRenderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      // render a frame
      this.renderer.render(this.scene, this.camera);
    });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }
}

export { Loop }
