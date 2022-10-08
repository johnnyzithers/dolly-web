const setSize = (container, camera, renderer) => {
  camera.aspect = container.clientHeight / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientHeight, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
};

class Resizer {
  constructor(container, camera, renderer) {
    // set initial size
    setSize(container, camera, renderer);

    window.addEventListener('resize', () => {
      // set the size again if a resize occurs
      setSize(container, camera, renderer);
      // perform any custom actions
      this.onResize();
    });
  }

  onResize() {}
}

export { Resizer };
