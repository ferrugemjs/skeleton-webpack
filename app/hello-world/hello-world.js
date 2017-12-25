import pugtest from "./test-a.pug";

export class HelloWorld{
	constructor(){
		this.name = "FerrugemJS"
	}
	connectedCallback(){
		console.log(pugtest);
	}
}