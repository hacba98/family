import React from 'react';
import './info.css'
import { CustomInput, Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Info extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="district" sm={2} id='ilabel'>District</Label>
          <Col sm={10}>
            <Input type="select" name="select" id="exampleSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </Col>
        </FormGroup>
        
        <FormGroup row>
          <Label for="address" sm={2} id='ilabel'>Address</Label>
          <Col sm={10}>
            <Input type="text" name="address" id="itext" placeholder="Address"/>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="checkbox" sm={2} id="ilabel">Signs of damage</Label>
          <Col sm={10}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="icheck" />{' '}
                Sign 1
              </Label>
            </FormGroup>
            
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="icheck" />{' '}
                Sign 2
              </Label>
            </FormGroup>
            
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="icheck" />{' '}
                Sign 3
              </Label>
            </FormGroup>
            
          </Col>
        </FormGroup>
        
        <FormGroup row>
          <Label for="exampleText" sm={2} id='ilabel'>More detail</Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="itext" />
          </Col>
        </FormGroup>
        
        <FormGroup row>
          <Label for="exampleFile" sm={2} id='ilabel'>Image</Label>
          <Col sm={10}>
            <Input type="file" name="file" id="exampleFile" multiple />
          </Col>
        </FormGroup>
        
        <Button>Post</Button>
      </Form>
    );
  }
}