import React from 'react';
import logo_user from './img/user.png'


class CommentItem extends React.Component {
    render() {
        return (
            <div style={{marginTop: "5px"}}>
                <div class="card flex-row flex-wrap">
                    <div class="card-header border-0">
                        <img src={logo_user} style={{width: "100px"}} alt=""></img>
                    </div>
                    <div class="card-block px-2">
                        <h4 class="card-title">Username</h4>
                        <p class="card-text">Comment</p>
                       
     
                        
                        {/* <a href="#" ><i class="fa fa-heart fa-2x" aria-hidden="true" style={{color: "pink"}}></i></a> */}
                    </div>
                    <div class="w-100"></div>
                </div>
            </div>
        )
    }
}

export default CommentItem;

