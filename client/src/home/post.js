import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import logo_user from './img/user.png'
import { SSL_OP_TLS_ROLLBACK_BUG } from 'constants';

class Post extends React.Component {
    render() {
        return (

<div style={{marginTop: "5px"}}>
    <div class="card flex-row flex-wrap">
        <div class="card-header border-0">
            <img src={logo_user} style={{width: "100px"}} alt=""></img>
        </div>
        <div class="card-block px-2">
            <h4 class="card-title">Title</h4>
            <p class="card-text">Description</p>
            <div class="card-text"><i class="fa fa-map-marker fa-2x"></i> Location</div>
            <div class="card-text">
                <i class="fa fa-star fa-2x" style={{color: rgb(0,255,255);}}></i>
                <i class="fa fa-star fa-2x"></i>
                <i class="fa fa-star fa-2x"></i>
                <i class="fa fa-star fa-2x"></i>
                <i class="fa fa-star fa-2x"></i>
            </div>
            
            {/* <a href="#" ><i class="fa fa-heart fa-2x" aria-hidden="true" style={{color: "pink"}}></i></a> */}
        </div>
        <div class="w-100"></div>
    </div>
</div>

        )
    }
}

export default Post;