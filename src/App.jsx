import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BookList from "./components/BookList";

import NavbarComponent from "./components/NavbarComponent";
import MyFooterComponent from "./components/MyFooterComponent";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <NavbarComponent />
      <Welcome />
      <BookList />
      <MyFooterComponent />
    </>
  );
}

export default App;
