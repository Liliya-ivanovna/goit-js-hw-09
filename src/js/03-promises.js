import Notiflix from 'notiflix';
const formEl = document.getElementsByClassName('form');
const amount =document.getElementsByName("amount");
const step =document.getElementsByName("step");
function createPromise(position, delay) {
const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    
    return (delay+step)
  } else {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    // Reject
  }
}
createPromise(2,1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });