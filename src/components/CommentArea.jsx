import { Component } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {};

  render() {
    const { id } = this.props;
    console.log(id);
    return (
      <>
        <div>
          <CommentList id={id} />
        </div>
        <div>
          <AddComment />
        </div>
      </>
    );
  }
}
export default CommentArea;
