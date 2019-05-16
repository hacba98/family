import React from "react";
import logo_user from "./img/user.png";

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      desc: props.description,
      location: `${props.address.street}    ${props.address.district}`
    };
  }

  render() {
    return (
      <div style={{ marginTop: "5px" }}>
        <div class="card flex-row flex-wrap">
          <div class="card-header border-0">
            <img src={logo_user} style={{ width: "100px" }} alt="" />
          </div>
          <div class="card-block px-2">
            <h4 class="card-title">Title {this.state.title}</h4>
            <p class="card-text">Description {this.state.desc}</p>
            <div class="card-text">
              <i class="fa fa-map-marker fa-2x" /> Location:
              {this.state.location}
            </div>
            <div class="card-text">
              <i class="fa fa-star fa-2x" style={{ color: "yellow" }} />
              <i class="fa fa-star fa-2x" />
              <i class="fa fa-star fa-2x" />
              <i class="fa fa-star fa-2x" />
              <i class="fa fa-star fa-2x" />
            </div>

            {/* <a href="#" ><i class="fa fa-heart fa-2x" aria-hidden="true" style={{color: "pink"}}></i></a> */}
          </div>
          <div class="w-100" />
        </div>
      </div>
    );
  }
}

export default Post;
