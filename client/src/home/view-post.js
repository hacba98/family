import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

import React, {Component} from "react"
import NavBar from './navbar'
import logo_user from './img/user.png'
import CommentBox from './comment-box'
import CommentItem from './comment-item'


const items = [
    {
      src: logo_user,
    },
    {
      src: logo_user,
    },
    {
      src: logo_user,
    }
  ];

class ViewPost extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
            <CarouselItem
                onExiting={this.onExiting}
                onExited={this.onExited}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
            );
        });

        return (
            <div>
                <NavBar/>
                <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
                >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>

                <h1 style={{textAlign: "left"}}>Title</h1>
                <hr></hr>
                <h4 style={{textAlign: "left"}}>Công việc</h4>
                <p style={{textAlign: "left"}}>
                    Noi dung
                </p>

                <hr></hr>
                <h4 style={{textAlign: "left"}}>Địa chỉ</h4>
                <p style={{textAlign: "left"}}>
                    abc, xyz
                </p>

                <hr></hr>
                <h4 style={{textAlign: "left"}}>Những người đã nhận công việc này</h4>


                <hr></hr>
                <h4 style={{textAlign: "left"}}>Bình luận</h4>
                <CommentBox/>
                <br></br>
                <CommentItem/>
                <CommentItem/>
                <CommentItem/>
                

            </div>
        );
    }
}

export default ViewPost;