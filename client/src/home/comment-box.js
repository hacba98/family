import React from 'react';

class CommentBox extends React.Component {
    render() {
        return (
            <div>
                <form class="form">
                    <textarea class="form-control" placeholder="Your comments" style={{ width: '70%' }}></textarea>
                    <div style={{ marginTop: '5px' }} >
                        <button class="btn btn-primary float-left">Thêm bình luận</button>
                    </div>
                    <div style={{ clear: 'both' }}>

                    </div>
                </form>
            </div>
        )
    }
}

export default CommentBox;

