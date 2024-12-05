import { Component } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class CommentArea extends Component {
  // Metodo chiamato da AddComment
  handleAddComment = (newComment) => {
    if (this.commentListRef) {
      this.commentListRef.addCommentToState(newComment); // Chiama il metodo di CommentList tramite il ref
    }
  };

  render() {
    const { asin } = this.props;

    return (
      <>
        <div>
          {/* Passa il ref al componente CommentList */}
          <CommentList asin={asin} ref={(ref) => (this.commentListRef = ref)} />
        </div>
        <div>
          {/* Passa il metodo handleAddComment come prop */}
          <AddComment asin={asin} onAddComment={this.handleAddComment} />
        </div>
      </>
    );
  }
}

export default CommentArea;
