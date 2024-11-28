import { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";
//creao una funzione con un oggetto book come prop
class SingleBook extends Component {
  state = {
    selected: false
  };
  render() {
    const { book } = this.props;
    return (
      //la funzione ritorna una card composta da un'immagine e un titolo
      //In bookList ci sarà un'altra funzione che ritornerà un SingleBook
      //per ogni book presente nell'array  di oggetti(contenente libri) fornito

      //passo l'id di ogni libro come props per farla arrivare a commentArea
      <Card className={this.state.selected ? "border-danger" : " "}>
        <Card.Img variant="top" src={book.img} onClick={() => this.setState({ selected: !this.state.selected })} />
        <Card.Body>
          <Card.Title>
            <strong>Title: </strong>
            {book.title}
          </Card.Title>

          {this.state.selected && <CommentArea id={book.asin} />}
        </Card.Body>
      </Card>
    );
  }
}
export default SingleBook;
