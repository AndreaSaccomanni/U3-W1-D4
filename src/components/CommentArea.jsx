import { Component } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class CommentArea extends Component {
  render() {
    console.log(this.props);

    const { asin } = this.props;

    console.log(asin);
    return (
      <>
        <div>
          <CommentList asin={asin} />
        </div>
        <div>
          <AddComment />
        </div>
      </>
    );
  }
}
export default CommentArea;
