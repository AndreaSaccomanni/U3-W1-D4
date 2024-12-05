import { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

class CommentList extends Component {
  state = {
    comments: []
  };

  addCommentToState = (newComment) => {
    this.setState((prevState) => ({
      comments: [...prevState.comments, newComment]
    }));
  };

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
  //farà una nuova fetch solo se la prop è cambiata quinid ho un nuovo id
  //che genererà una fetch con un altro libro e quindi commenti di un altro libriio
  //così avrò sempre i commenti relativi al libro cliccato, se clicco sulla card gia selezionata i commenti sono sempre i stessi
  //la prop non cambia e quindi non c'è bisogno di fare una nuova fetch

  componentDidUpdate(prevProps) {
    //controllo per vedere se la prop è cambiata
    //se la prop non cambia non ci sarà una nuova fetch
    //al primo caricamento della pagina altrimenti partirebbe una fetch senza id
    //che genererebbe una fetch con tutti i commenti di tutti i libri e non di un libro specifico

    if (prevProps.asin != this.props.asin) {
      console.log("prevProps", prevProps);
      this.fetchCommmentList();
    }

    if (this.props.newComment && prevProps.newComment !== this.props.newComment) {
      this.setState((prevState) => ({
        comments: [...prevState.comments, this.props.newComment]
      }));
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
