import React from 'react';
import { Row, Col, Button, Collapsible, CollapsibleItem, Icon, Input} from 'react-materialize';
import axios from 'axios'
class User extends React.Component {
  
  
  constructor (props) {
    super(props) 
    this.state = {
      editing:'false',
      user:props.user.user,
      email:props.user.email,

    }
    this.enableEdit= this.enableEdit.bind(this)
    this.handleEdit= this.handleEdit.bind(this)
    this.handleDelete= this.handleDelete.bind(this)

  }

  enableEdit(){
    this.setState({editing:'true'})
  }
  handleEdit(){
    this.setState({editing:"false"})

        let edit = {
            _id:this.props.user._id,
            user:this.state.name,
            email:this.state.email,
        }
    console.log(edit)

    axios.post("/update/user",edit).then(response=>{
        console.log("User Update", response)
    })
  }

  handleDelete(){
    let searchEmail={email:this.props.user.email}
console.log(this.props)
    axios.post("/delete/user",searchEmail).then(response=>{
        console.log("User Deleted", response)
    })
  }

  handleName = event => {
    this.setState({"name":event.target.value})
   }

  handleEmail = event => {
  this.setState({"email":event.target.value})
  }


  render() {

    return (
   <CollapsibleItem icon='person' header = {`${this.state.user}`}  >

                  <Row>
                  {(this.state.editing ==='false') ?
                      <div> 
                      <Col s={3}> {this.state.user} </Col>
                      <Col s={4}> {this.state.email} </Col> 
                      </div>
                      :
                      <div>
                      <Input s={3} label="Name"  onChange={this.handleName} />
                      <Input s={4} label="Email Address" onChange={this.handleEmail} />
                      </div>
                }
                            
                    <Col s={5}>
                    {(this.state.editing ==='false') ?
                    <Button  className="ModButton" waves='light' onClick={this.enableEdit}><Icon large >edit</Icon ></Button> :
                    <Button  className="ModButton" waves='light' onClick={this.handleEdit}><Icon large >check</Icon ></Button> 
                        }


                    <Button  className="ModButton" waves='light' onClick={this.handleDelete}><Icon large >delete_forever</Icon></Button>
                    
                    </Col>
                  </Row>
                  
    </CollapsibleItem>                

    );
  }
}

export default User;
