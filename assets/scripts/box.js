const boxWrapperKeyframes = [
  { transform: "translate(0, 0) rotate(0deg)" },
  { transform: "translate(5px, 5px) rotate(5deg)" },
  { transform: "translate(0, 0) rotate(0eg)" },
  { transform: "translate(-5px, 5px) rotate(-5deg)" },
  { transform: "translate(0, 0) rotate(0deg)" },
];

const boxWrapperTiming = {
  duration: 200,
  iterations: 3,
};

const boxWrapper = document.querySelector("#box_wrapper");
const boxMeowSound = document.querySelector('#boxMeowSound')

const playMeow = () => {
  boxMeowSound.play()
}

const boxIntervalCallback = () => {
  boxWrapper.animate(boxWrapperKeyframes, boxWrapperTiming);
  playMeow()
}

const startInterval = () => {
  setInterval(boxIntervalCallback, 3000);
}

startInterval()