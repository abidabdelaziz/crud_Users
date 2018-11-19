import React from 'react';
import { Row,  Collapsible} from 'react-materialize';
import User from "./User"
class Users extends React.Component {
  
  
  constructor () {
    super() 
    this.state = {
  

    }
    this.enableEdit= this.enableEdit.bind(this)
    this.handleEdit= this.handleEdit.bind(this)

  }

  enableEdit(){
    this.setState({editing:'true'})
  }
  handleEdit(){
    this.setState({editing:"false"})
  }


  handleName = event => {
    this.setState({"name":event.target.value})
   }

  handleEmail = event => {
  this.setState({"email":event.target.value})
  }



  componentWillReceiveProps(props){
    this.setState({Users:props.Users})
  }
  

  componentWillMount(){
    console.log("users",this.state)
  }

  render() {

    return (
    <Row className="UsersRow">

        {(Object.keys(this.state).length === 0 ) ? 
        
            <div>hi</div> :

            <Collapsible className= "UserCollection">
          
           
           {
                this.state.Users.map(function(object, i){
                  return <User key={i} user= {this.state.Users[i]}></User>
                        
                },this)
                
                } 
          
          </Collapsible>
        }

    </Row>
    );
  }
}

export default Users;
