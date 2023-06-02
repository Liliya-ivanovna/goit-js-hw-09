import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const days=document.querySelector('span[data-days]');
const hours=document.querySelector('span[data-hours]');
const minutes=document.querySelector('span[data-minutes]');
const seconds=document.querySelector('span[data-seconds]');
const fp = flatpickr("#datetime-picker",{
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
     });
function update(){
    let now = Date.now();
    let target = defaultDate.getTime()
   
}
function start(){
    setInterval(()=>update(),1000)};
    start()