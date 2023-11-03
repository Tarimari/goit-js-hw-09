const form = document.querySelector(`.form`);

form.addEventListener(`submit`, startGeneration);

function startGeneration(evt) {
  evt.preventDefault();
  let { delay, step, amount } = evt.currentTarget.elements;
  for (let position = 1; position <= amount.valueAsNumber; position++) {
    delay = position * step.valueAsNumber;
    createPromise(position, delay)
  }
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    new Promise((resolve, reject) => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    })
  
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    })
  },
    delay
  );
  
}
