export class PomodoroClock{
	constructor(){
		this.primaryColor = '#6A82FB';
		this.secondaryColor = '#FC5C7D';
		this.hours = 0;
		this.minutes = 10;
		this.seconds = 5;
		this.intervalId = null;
	}
	hoursToPercent(){
		return  this.hours * 4.16;
	}
	minutesToPercent(){
		return this.minutes * 1.66;
	}
	secondsToPercent(){
		return this.seconds * 1.66;
	}
	connectedCallback(){
		this.calculateTime();
		this.intervalId = setInterval(this.incrementTime.bind(this),1000);
	}
	calculateTime(){
		this.seconds = 59 - this.seconds;
		this.minutes = 59 - this.minutes;
		this.hours = 23 - this.hours;	
	}
	attributeChangedCallback(attr,oldVl,newVl){
		this.calculateTime();
	}
	disconnectedCallback(){
		if(this.intervalId){
			clearInterval(this.intervalId);
		}		
	}
	incrementTime(){
		this.seconds++;
		if(this.seconds > 59){
			this.seconds = 0;
			this.minutes++;
			if(this.minutes > 59){
				this.minutes = 0;
				this.hours++;
			}
		}
		this.refresh();
	}
}