import React from 'react'

const App=() =>{
  return(
    <div>
      <h1>Wlcome</h1>
    </div>
  );
}
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      students:[
        {id:101,name:'First',cgpa:3.8},
        {id:102,name:'Second',cgpa:2.5},
        {id:103,name:'Third',cgpa:4.5},
        {id:104,name:'Fourth',cgpa:3.3},
        {id:105,name:'Fifth',cgpa:3.7},
      ]
    };
  }
  render(){
    return(
      <div>
        <h3>Student List</h3>
      </div>
    );
  }
}

export default App;