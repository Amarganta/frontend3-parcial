import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [nameValue, setNameValue] = useState("");
  const [bookValue, setBookValue] = useState("");
  const [errorMessage, setErrorMesagge] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const regex = /^\s/;
  const handleChangeName = (event) => {
    setNameValue(event.target.value);
  };

  const handleChangeBook = (event) => {
    setBookValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (nameValue.length < 3 && regex.test(nameValue)) ||
      bookValue.length < 6
    ) {
      setErrorMesagge(true);
    } else {
      setErrorMesagge(false);
      setShowCard(true);
    }
  };

  return (
    <div className="App">
      <h1>tell us your favorite book</h1>

      {!showCard ? (
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Type your name"
              onChange={handleChangeName}
            />
            <input
              type="text"
              placeholder="Type your favorite book"
              onChange={handleChangeBook}
            />
          </div>
          <div>
            <button>Send</button>
          </div>
        </form>
      ) : null}

      {errorMessage && (
        <div>
          <span>
            Name length must be more than 3 characters and Book lenght more than
            6
            <br />
            watch any blank spaces too!
          </span>
        </div>
      )}
      {showCard && (
        <>
          <Card name={nameValue} book={bookValue} />{" "}
          <button onClick={() => window.location.reload(false)}>
            Let's try another one!
          </button>
        </>
      )}
    </div>
  );
}

export default App;
