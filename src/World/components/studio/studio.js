import { GLTFLoader } from '/vendor/three/examples/jsm/loaders/GLTFLoader.js';

import { studioModel } from './studioModel.js';

async function loadStudio() {
  const loader = new GLTFLoader();

  const studioData = await loader.loadAsync('/assets/models/mix-room.glb');

  console.log('STUDIO!!', studioData);

  const studio = studioModel(studioData);
  studio.position.set(0, 0, 0);

//   studio.scale.set(10,10,10);

//   const flamingo = setupModel(flamingoData);
//   flamingo.position.set(7.5, 0, -10);

//   const stork = setupModel(storkData);
//   stork.position.set(0, -2.5, -10);

  return studio;
}

export { loadStudio };
