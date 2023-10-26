import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const myInput = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const defaultDate = new Date();

const fp = flatpickr(myInput, {
enableTime: true,
  time_24hr: true,
  defaultDate: defaultDate,
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
           if (selectedDates[0] - defaultDate <= 0) {
               alert('Please choose a date in the future');
               btnStart.setAttribute('disabled', 'true');
                  } else {
               
               btnStart.removeAttribute('disabled');
      }
         },

}); 
