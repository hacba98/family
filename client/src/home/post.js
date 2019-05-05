import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import logo_user from './img/user.png'

class Post extends React.Component {
    render() {
        return (
            <div style={{marginTop:'5px'}}>
                <Card className="text-left">
                    <Row>
                        <Col sm='2'><CardImg style={{width:'100%'}} src={logo_user} alt="Card image cap" /></Col>
                        <Col>
                            <CardTitle left><b>Title</b></CardTitle>
                            <CardBody left>Content</CardBody>
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }
}

export default Post;