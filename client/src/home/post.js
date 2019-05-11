import React from 'react';
import logo_user from './img/user.png'

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
                <i class="fa fa-star fa-2x" style={{color: 'yellow'}}></i>
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