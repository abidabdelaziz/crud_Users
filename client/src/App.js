import React, { Component } from 'react';
import { Collection , Collapsible , CollapsibleItem , Row , Input , Button } from 'react-materialize'
import Users from "./Components/Users"

import axios from 'axios';

import './App.css';

class App extends Component {
  constructor () {
    super() 
    this.state = {
       users:[],
       "name":"",
       "email": "",

    }

  }


  getUsers(){
    axios.get("/all/users").then((res)=>{
      console.log(res.data)
      this.setState( {users: res.data})
    })
  }






  handleName = event => {
    this.setState({"name":event.target.value})
   }

  handleEmail = event => {
  this.setState({"email":event.target.value})
  }

  handleForm = (event) =>{
    let user={ 
    "user":this.state.name,
    "email": this.state.email,
             }

    axios.post("/add/user", user).then(res =>{
      console.log("User", user, "added")
    })
    
    this.setState({
      "name":"",
      "email": "",

    })
  }

  componentWillMount(){
    this.getUsers()
  }

  render() {
    this.getUsers()

    return (
      <div className="App">
        <header className="App-header">

          <Collapsible className="AddUser" >

            <CollapsibleItem header='Add User ' icon='person_add'>
            <Row> 
            <Input s={6} label="Name" value={this.state.name} onChange={this.handleName} />
            <Input s={6} label="Email Address" value={this.state.email} onChange={this.handleEmail}/>
            <Button  waves='light' onClick={this.handleForm}>Add User</Button>
            </Row>
            </CollapsibleItem>

          </Collapsible>


        

          <Users Users= {this.state.users}></Users>





          <Collapsible className="AddUser" >

            <CollapsibleItem header='Add User ' icon='person_add'>
            <Row> 
            <Input s={6} label="Name" value={this.state.name} onChange={this.handleName} />
            <Input s={6} label="Email Address" value={this.state.email} onChange={this.handleEmail}/>
            <Button  waves='light' onClick={this.handleForm}>Add User</Button>
            </Row>
            </CollapsibleItem>

          </Collapsible>





          
        
        </header>
      </div>
    );
  }
}

export default App;
