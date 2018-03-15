export class TodoList{  
  constructor(){
    this.todos = ['do a test'];
  }
  set desc(desc){
    if(desc.trim()){
      this.todos.push(desc);
    }
  }
}
