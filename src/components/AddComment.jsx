import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: {
      newComment: "",
      rate: "1"
    }
  };

  handleAdd = (e) => {
    e.preventDefault();

    const { asin, onAddComment } = this.props; // Ottieni l'asin come prop dal genitore
    const { newComment, rate } = this.state.comment;

    // Oggetto da inviare
    const commentToAdd = {
      comment: newComment,
      rate: rate,
      elementId: asin // ID specifico del libro
    };

    // Log per verificare il payload
    console.log("Payload inviato:", commentToAdd);

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(commentToAdd),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzNiYTlkYmRkMDNhNjAwMTUwOWJhNTMiLCJpYXQiOjE3MzI4MDI3ODksImV4cCI6MTczNDAxMjM4OX0.-qUlEXNSeD8L4AiPY83QV21uD4L-zuUOU4T8r71-rsc"
      }
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          console.log("Errore nella risposta:", resp.status, resp.statusText);
          throw new Error("Errore nella chiamata");
        }
      })
      .then((data) => {
        console.log("Risposta dell'API:", data);
        onAddComment(data); // Aggiungi il commento alla lista nel genitore
        this.setState({
          comment: { newComment: "", rate: "1" } // Reset del form
        });
      })
      .catch((e) => {
        console.log("Errore:", e);
      });
  };

  render() {
    return (
      <Form onSubmit={this.handleAdd}>
        <Form.Group controlId="addComment">
          <Form.Label className="fs-5">Add your comment:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add a comment..."
            value={this.state.comment.newComment}
            onChange={(e) =>
              this.setState({
                comment: { ...this.state.comment, newComment: e.target.value }
              })
            }
          />
        </Form.Group>
        <Form.Group controlId="rate" className="mt-3">
          <Form.Label className="fs-5">Rate:</Form.Label>
          <Form.Select
            value={this.state.comment.rate}
            onChange={(e) =>
              this.setState({
                comment: { ...this.state.comment, rate: e.target.value }
              })
            }
            required
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
        </Form.Group>
        <Button className="mt-3 py-1" type="submit">
          Add your comment
        </Button>
      </Form>
    );
  }
}

export default AddComment;
