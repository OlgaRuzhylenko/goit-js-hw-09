import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const myInput = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const timer = document.querySelector('.timer');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

let defaultDate = new Date();
let intervalId;

function updateDefaultDate() {
    defaultDate = new Date();
}
    
function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    return { days, hours, minutes, seconds };
} 
btnStart.setAttribute('disabled', 'true'); 
const fp = flatpickr(myInput, {
    enableTime: true,
    time_24hr: true,
    defaultDate: defaultDate,
    minuteIncrement: 1,
    onClose(selectedDates) {
        // console.log(selectedDates[0]);
        if (selectedDates[0] - defaultDate <= 0) {
            alert('Please choose a date in the future');
            
        } else {
            btnStart.removeAttribute('disabled');
            btnStart.addEventListener('click', onBtnStartClick);
            function onBtnStartClick() {
                if (intervalId) {
                    clearInterval(intervalId);
                };

                this.setAttribute('disabled', 'true')
                intervalId = setInterval(() => {
                    updateDefaultDate();
                    const ms = selectedDates[0] - defaultDate;
                  
                    if (ms <= 900) {
                        clearInterval(intervalId)
                    }
                    const result = convertMs(ms);
                    console.log(result);
                    
                    dataDays.textContent = addLeadingZero(result.days);
                    dataHours.textContent = addLeadingZero(result.hours);
                    dataMinutes.textContent = addLeadingZero(result.minutes);
                    dataSeconds.textContent = addLeadingZero(result.seconds);
                }, 1000);
            }
        }
    }
}
);
function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
};
