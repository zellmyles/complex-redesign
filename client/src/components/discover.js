import React, { Component } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import { Embed } from 'semantic-ui-react'
import { Comment, Form, Header } from 'semantic-ui-react';
import Comments from './comments.js'
import { Segment } from 'semantic-ui-react'
import { Divider, Table } from 'semantic-ui-react'
import { red } from '@material-ui/core/colors';

const sportbtn = {
    border: '2px solid #d1e3ff',
    backgroundColor: '#ffd12b',
    color: 'black',
    fontWeight: 'strongr',
    borderRadius: '19px',
    padding: '30px',
    fontSize: '20px',

    ":hover": {
        backgroundColor: "#ff0000",
        color: "#ffffff"
      }
}

const seperate = {
    color: 'black',
    border: '2px solid purple',
}

const end = {
  border: '3px solid black',
}

const sportshead = {
  fontSize: '30px',
  color: 'orange',
  fontWeight: 'bolder',


}

const sportcontainer = {
    marginTop: '100px',
}

const thebreak = {
    color: 'red',
    fontSize: '40px',
    fontWeight: 'bolder',
    textShadow: '1px 2px black',

}
class NestedModal extends Component {
//load data from api
 


  state = { open: false }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open } = this.state

   
    
    
    return (
        
      <Modal 
        open={open}
        onOpen={this.open}
        onClose={this.close}
        size='small'
        trigger={
            <button style={{backgroundColor: 'red', color: 'white', fontWeight:'bold'}}class="ui button">Breaking News<Icon name='right chevron' /></button>
        }
        t
      >
        <Modal.Header style={thebreak}>The Break</Modal.Header>
        <Modal.Content>
          <h2 style={{backgroudColor: 'green', textAlign: 'center'}}>Read All About It!</h2>
          <hr style={seperate} />

            <div style={{margin: 'auto'}}>
            <h1 style={{fontSize: '30px', fontWeight: 'bolder', marginBottom: '50px'}}> 5 Concepts the NBA Could (and Should) Adopt After Orlando ‘Bubble’ Plan
SPORTS</h1>    
              <img style={{maxWidth: '500px', height:'300px', margin: 'auto', textAlign: 'center'}}src={process.env.PUBLIC_URL + '/imgs/laker.jpg'} />
           </div>
        </Modal.Content>
        <Modal.Actions>
          <Button style={{backgroundColor: 'green', color: 'white'}} icon='check' content='All Done' onClick={this.close} />
        </Modal.Actions>
      </Modal>
    )
  }

}

const ModalExampleMultiple = () => (
  <Modal trigger={<Button style={sportbtn}>Sports</Button>}>
    <Modal.Header style={sportshead}>Sports </Modal.Header>
    <Segment style={{overflow: 'auto', maxHeight: 500 }}>
    <Modal.Content>
      <div className='image'>
        <h1 id='vid-header'>Video Of The Day</h1>
        <hr style={seperate}/ >
      <Embed
    id='pEtDAzfWtIE'
    placeholder={process.env.PUBLIC_URL + '/imgs/nbaa.jpg'}
    source='youtube'
  />
      </div>
      <Modal.Description>
     
    <Comments />
  
      </Modal.Description>
      <hr style={end}/ >
     <div style={sportcontainer}>

     <React.Fragment>
    <Divider horizontal>
      <Header as='h1'>
        <Icon name='basketball ball' />
        The Game Room
      </Header>
    </Divider>

    <p style={{backgroundColor: '#3f2bcf', color: 'white', fontWeight: 'bold', padding: '30px', fontSize: '20px'}}>
    The NBA approved a competitive format to resume the 2019-20 season with 22 teams returning to play and a tentative start date of July 31. We will provide more information on the league's comprehensive season restart plan as soon as it becomes available.
    </p>

    <Divider horizontal>
      <Header as='h4'>
        <Icon name='bar chart' />
        Results
      </Header>
    </Divider>

    <Table definition>
      <Table.Body>
        <Table.Row>
          <Table.Cell width={2}>Date</Table.Cell>
          <Table.Cell>Monday, September 30</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Team #1</Table.Cell>
          <Table.Cell style={{color: '#db0206'}}>Shanghai Sharks</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Team #2</Table.Cell>
          <Table.Cell style={{color: '#008219'}}>Houston Rockets</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Final Score</Table.Cell>
          <Table.Cell><span style={{color: '#db0206'}}>71 </span>- <span style={{color: '#008219'}}>140</span></Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>

    {/*  */}

    <Table definition>
      <Table.Body>
        <Table.Row>
          <Table.Cell width={2}>Date</Table.Cell>
          <Table.Cell>
      Friday, October 4</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Team #1</Table.Cell>
          <Table.Cell style={{color: '#008219'}}>
Houston Rockets</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Team #2</Table.Cell>
          <Table.Cell style={{color: '#db0206'}}>LA Clippers</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Final Score</Table.Cell>
          <Table.Cell><span style={{color: '#008219'}}>109 </span>- <span style={{color: '#db0206'}}>96</span></Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </React.Fragment>


     </div>
    </Modal.Content>
    
    </Segment>
    <Modal.Actions>
  
      <NestedModal />
    </Modal.Actions>
  </Modal>
)

export default ModalExampleMultiple
