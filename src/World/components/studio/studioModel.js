import { AnimationMixer } from '/vendor/three/build/three.module.js';

function studioModel(data) {
  const model = data.scenes[0];//.children[0];
  const clip = data.animations[0];

//   const mixer = new AnimationMixer(model);
//   const action = mixer.clipAction(clip);
//   action.play();

//   model.tick = (delta) => mixer.update(delta);d

// console.log("studiomodeL: " + model. );
  return model;
}

export { studioModel };
