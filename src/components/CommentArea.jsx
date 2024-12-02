import { Component } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class CommentArea extends Component {
  render() {
    console.log(this.props);
    //ricevo l'id da commentArea e poi lo passo nuovamente come prop per farlo arrivare a commentList
    const { id } = this.props.asin;

    console.log({ id });
    return (
      <>
        <div>
          <CommentList id={{ id }} />
        </div>
        <div>
          <AddComment />
        </div>
      </>
    );
  }
}
export default CommentArea;
