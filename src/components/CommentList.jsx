import { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

class CommentList extends Component {
  state = {
    comments: []
  };

  fetchCommmentList = () => {
    const { id } = this.props;
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzNiYTlkYmRkMDNhNjAwMTUwOWJhNTMiLCJpYXQiOjE3MzI4MDI3ODksImV4cCI6MTczNDAxMjM4OX0.-qUlEXNSeD8L4AiPY83QV21uD4L-zuUOU4T8r71-rsc"
      }
    })
      .then((resp) => {
        if (resp.ok) {
          console.log(resp);
          return resp.json();
        } else {
          throw new Error("Errore nella chiamata");
        }
      })
      .then((data) => {
        console.log(data);
        this.setState({
          comments: data
        });
      })
      .catch((e) => {
        console.log("Errore: ", e);
      });
  };

  componentDidMount() {
    this.fetchCommmentList();
  }

  render() {
    return (
      <ListGroup>
        {this.state.comments.map((element) => {
          return (
            <ListGroupItem key={element._id}>
              <strong>Comment: </strong>
              {element.comment} - <strong>Rate: </strong>
              {element.rate}
            </ListGroupItem>
          );
        })}
      </ListGroup>
    );
  }
}
export default CommentList;
