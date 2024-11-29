import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    newComment: "",
    rate: "1"
  };

  handleAdd = (e) => {
    e.preventDefault();

    /*oggetto che verrà passato come props una volta inserito il commento
    const commentToAdd = {
      comment: this.state.newComment,
      rate: this.state.rate
    };
    //passo l'oggetto come props alla funzione che dovrà aggiungere il commento alla lista
    this.props.addComment = commentToAdd;
    //reset del campo input
    this.setState({
      newComment: "",
      rate: 1
    });*/
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzNiYTlkYmRkMDNhNjAwMTUwOWJhNTMiLCJpYXQiOjE3MzI4MDI3ODksImV4cCI6MTczNDAxMjM4OX0.-qUlEXNSeD8L4AiPY83QV21uD4L-zuUOU4T8r71-rsc"
      }
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nella chiamata");
        }
      })
      .catch((e) => {
        console.log("Errore: ", e);
      });
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
          <Form.Group controlId="rate">
            <Form.Label className="fs-5">Rate:</Form.Label>
            <Form.Select aria-label="Default select example" required>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Select>
          </Form.Group>
        </Form.Group>
        <Button className="mt-3 py-1" type="submit" onClick={this.handleAdd}>
          Add your comment
        </Button>
      </Form>
    );
  }
}

export default AddComment;
