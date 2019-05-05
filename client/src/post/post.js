import React, {Component} from "react"
import Info from './info'
import './post.css'
import { Card, CardImg, CardTitle, CardText, CardGroup,
 CardSubtitle, CardBody } from 'reactstrap';

class Post extends Component {
    render() {
        return (
        <CardGroup id="postcard">
          <Card>
            <CardBody>
              <CardTitle>Writing your post</CardTitle>
              <Info/>
            </CardBody>
          </Card>
        </CardGroup>
        )
    }
}

export default Post;