import React, { Component } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import { Embed } from 'semantic-ui-react'
import { Comment, Form, Header } from 'semantic-ui-react';
import Comments from './comments.js';
import List from './list.js';
import { Segment } from 'semantic-ui-react'
const musichead = {
    fontSize: '30px',
    color: '#3493eb',
    fontWeight: 'bolder',
  }
const sportbtn = {
    border: '2px solid #d1e3ff',
    backgroundColor: '#3493eb',
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
class NestedModal extends Component {
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
            <button class="ui button">Proceed<Icon name='right chevron' /></button>
        }
        t
      >
        <Modal.Header>Charts</Modal.Header>
        <Modal.Content>
          <List />
        </Modal.Content>
        <Modal.Actions>
          <Button icon='check' content='All Done' onClick={this.close} />
        </Modal.Actions>
      </Modal>
    )
  }
}
const ModalExampleMultiple = () => (
  <Modal trigger={<Button style={sportbtn}>Music</Button>}>
    <Modal.Header style={musichead}>Music </Modal.Header>
    <Segment style={{overflow: 'auto', maxHeight: 500 }}>
    <Modal.Content>
      <div className='image'>
        <h1 id='vid-header'>Video Of The Day</h1>
        <hr style={seperate } />
      <Embed
    id='VDGysJGNoI'
    placeholder='https://pmcvariety.files.wordpress.com/2020/06/lil-baby-the-bigger-picture-clean-no-text-copy-e1591971958390.jpg'
    source='youtube'
  />
      </div>
      <Modal.Description>
    <Comments />
      </Modal.Description>
      <hr style={end} />
    </Modal.Content>
    </Segment>
    <Modal.Actions>
      <NestedModal />
    </Modal.Actions>
  </Modal>
)
export default ModalExampleMultiple
