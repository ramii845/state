import './App.css';
import React,{Component} from 'react';
class App extends React.Component{
  state={
  data:[{
    fullName:"Rami",
   profession:"student",
   bio:"sfax",
    bol:true,
    image:<img src="img1.jpg" alt="image" height={150} width={150}/>,
    id:0
  },
  {
fullName:"sami",
profession:"teacher",
bio:"tunis",
image:<img src="img1.jpg" alt="image" height={150} width={150}/>,
bol:false,
id:0
  },
]};
handclick=()=> this.setState({
    data:{id:this.state.id+1}
  });
 handshow=()=> this.setState({
  data:{bol:!this.state.data.bol}
});
render(){
return(
  <div className="c1">
    <button onClick={this.handshow}> cliquer pour changement </button>
      {this.state.data[0] && 
      <div>
    {this.state.data.map((el)=>
    <div>
     <h1>{el.fullName} </h1>
     <h1>{el.profession}</h1>
    <h1>{el.bio}</h1>
    <h1> {el.id}</h1>
    <h1>{el.image}</h1>
    </div>)}
    </div>  }
    <button onClick={this.handclick}> cliquer pour avancement</button>
    </div> 
)
    };
};
export default App;


