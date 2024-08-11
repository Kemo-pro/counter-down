const countDown = document.querySelector('.countdown');

// Set Lunch Date
const launchDate = new Date('Jan 1, 2024 13:00:00').getTime();
// Update Every Second
const intiVal = setInterval( () => {

// Get Today Day And Time (ms)
const now = new Date().getTime();

// Get Distance From now to lunch date
const distance = now- launchDate ;

// Time Caulculation
const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor( (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const mins = Math.floor( (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 ));
const sec = Math.floor( (distance % (1000 * 60 * 60 * 24)) / (1000 ));

// Display Results
countDown.innerHTML = `
<div>${days}<span>Days</span></div>
<div>${hours}<span>Hours</span></div>
<div>${mins}<span>Minutes</span></div>
<div>${sec}<span>Secound</span></div>
`;

// If Launch Date Passed
if(distance < 0){
//Stop CountDown
clearInterval(intiVal)
// Style OutPut And Text
countDown.style.color = '#17a2b8';
countDown.innerHTML = 'Lunched!'
}
}, 1000)








