import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    newComment: ""
  };
  render() {
    return (
      <Form>
        <Form.Group controlId="addComment">
          <Form.Label className="fs-5">Add your comment:</Form.Label>
          <Form.Control //prittier-ignored
            type="text"
            placeholder="Add a comment..."
            value={this.state.newComment}
            onChange={(e) => this.setState({ newComment: e.target.value })}
          />
        </Form.Group>
        <Button className="mt-3 py-1" type="submit">
          Add your comment
        </Button>
      </Form>
    );
  }
}
export default AddComment;
