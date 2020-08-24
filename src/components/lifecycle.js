
import React from 'react';
import $ from 'jquery'
class Lifecycle extends React.Component{

  constructor(props){
    super(props);
    this.state={tittle: "life cycle"};
    this.Changetittle=this.Changetittle.bind(this);
  }
  componentWillMount(){
      this.setState({
        tittle:"will state"
      })
  }
  componentDidMount(){
    
     $("h3.panel-title").css('color', 'white');
    
  }
  Changetittle(){
    this.setState({
      tittle: "change tittle"
    })
  }
  render(){
    return(
      <div class="panel panel-danger">
      <div class="panel-heading">
        <h3 class="panel-title">{this.state.tittle}</h3>
      </div>
      <div class="panel-body">
      <button type="button" class="btn btn-xs btn-warning" onClick={this.Changetittle}>button</button>
      </div>
  </div>
   
    )
  }
}



export default Lifecycle;

