const form = document.querySelector(`.form`);

form.addEventListener(`submit`, startGeneration);

function startGeneration(evt) {
  evt.preventDefault();
  const { delay, step, amount } = evt.currentTarget.elements;
  for (const i = 1; i <= amount; i++) {
    setTimeout(() => { createPromise(i, delay) }, delay + (i - 1) * step)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  }
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise(resolve, reject)
  {
    if (shouldResolve) {
      resolve;
  } else {
      reject;
    }
  }
}
