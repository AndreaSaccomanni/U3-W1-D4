import { Component } from "react";
import { Card } from "react-bootstrap";

//creao una funzione con un oggetto book come prop
class SingleBook extends Component {
  // state = {
  //   selected: false
  // };
  render() {
    const { book } = this.props;
    console.log("props.asin", this.props.asin);
    console.log("book.asin", this.props.book.asin);
    // console.log(book.asin);
    return (
      //la funzione ritorna una card composta da un'immagine e un titolo
      //In bookList ci sarà un'altra funzione che ritornerà un SingleBook
      //per ogni book presente nell'array  di oggetti(contenente libri) fornito

      //passo l'id di ogni libro come props per farla arrivare a commentArea

      //se l'asin della carta selezionata è uguale a quello della props si selezionerà
      //ci sarà sempre solo una carta selezionata
      <Card className={book.asin === this.props.asin ? "border-danger" : " "}>
        <Card.Img
          variant="top"
          src={book.img}
          onClick={() => {
            this.props.changeAsin(book.asin);
          }}
        />
        <Card.Body>
          <Card.Title>
            <strong>Title: </strong>
            {book.title}
          </Card.Title>

          {/* {this.state.selected && <CommentArea id={book.asin} />} */}
        </Card.Body>
      </Card>
    );
  }
}
export default SingleBook;
