import React, {Component} from "react"
import './mess.css'
import ChatList from './chatlist.js'
import ChatWindow from './chatwindow.js'
import { Container, Row, Col } from 'reactstrap';

class Mess extends Component {
    
    render() {
        return (
        <div>
            <ChatWindow/>
        </div>
        )
    }
}

export default Mess;