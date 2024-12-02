import { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

class CommentList extends Component {
  state = {
    comments: []
  };

  // addCommment = (commentToAdd) => {
  //   this.setState((allComments) => ({
  //     comments: [...allComments.comments, commentToAdd]
  //   }));
  // };

  //ricevo l'id come prop e lo uso per cercare i commenti di ogni singolo libro
  fetchCommmentList = () => {
    const { asin } = this.props;
    console.log(asin);
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzNiYTlkYmRkMDNhNjAwMTUwOWJhNTMiLCJpYXQiOjE3MzI4MDI3ODksImV4cCI6MTczNDAxMjM4OX0.-qUlEXNSeD8L4AiPY83QV21uD4L-zuUOU4T8r71-rsc"
      }
    })
      //la resp conterrà tutti i commenti di ogni singolo libro
      .then((resp) => {
        if (resp.ok) {
          console.log(resp);
          return resp.json();
        } else {
          throw new Error("Errore nella chiamata");
        }
      })

      //i commenti saranno contenuti nella proprietà comments dello state e successivamente mappati
      //per formare i listItem che conterranno tutti i commenti di ogni singolo libro
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

  componentDidUpdate(prevProps) {
    //controllo per vedere se la prop è cambiata
    //se la prop non cambia non ci sarà una nuova fetch
    //al primo caricamento della pagina altrimenti partirebbe una fetch senza id
    //che genererebbe una fetch con tutti i commenti di tutti i libri e non di un libro specifico
    if (prevProps.asin != this.props.asin) {
      console.log("prevProps", prevProps);
      this.fetchCommmentList();
    }
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
