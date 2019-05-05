import React, {Component} from "react"
import NavBar from './navbar'
import Post from './post'

class Home extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        )
    }
}

export default Home;