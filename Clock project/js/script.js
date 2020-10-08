let clockH= document.querySelector('.clock-hours');
let clockM= document.querySelector('.clock-minutes');
let clockS= document.querySelector('.clock-seconds');
let finalDate= new Date( 'Jul 25, 2025 00:00:00');
let second= 1000;
let minute = second *60;
let hour= minute*60;
let day= hour * 24;
let countdownDays= document.querySelector('.countdown-days');
let countdownHours= document.querySelector('.countdown-hours');
let countdownMins= document.querySelector('.countdown-minutes');
let countdownSecs= document.querySelector('.countdown-seconds');


let startClock =() =>{
	updateTime();
	updateCountdown();
	setInterval(() =>{
		updateTime();
		updateCountdown();
		},1000);
}
let updateTime =() =>{

	let now=new Date();
	let hours = now.getHours()% 12;
	let minutes = now.getMinutes();
	let seconds= now.getSeconds();


	clockH.style.transform= `rotate(${360/12 * hours}deg)`; 
	clockM.style.transform= `rotate(${360/60 * minutes}deg)`;
	clockS.style.transform= `rotate(${360/60 * seconds}deg)`;
}


let updateCountdown= () =>{
	let now= new Date();
	let diff= finalDate - now;
	let diff0bj =convert(diff);
	countdownDays.textContent = diff0bj.days >= 10 ? diff0bj.days: '0'+ diff0bj.days;
	countdownHours.textContent = diff0bj.hours >= 10 ? diff0bj.hours: '0'+ diff0bj.hours;
	countdownMins.textContent = diff0bj.minutes >= 10 ? diff0bj.minutes: '0'+ diff0bj.minutes;
	countdownSecs.textContent = diff0bj.seconds >= 10 ? diff0bj.seconds: '0'+ diff0bj.seconds;


}

let convert= (millis)=>{
	let days= Math.floor(millis/day);
	let hours = Math.floor(millis% day/hour);
	let minutes = Math.floor(millis% hour/minute);
	let seconds = Math.floor(millis% minute/second);
	return{days, hours, minutes,seconds};
}
startClock();