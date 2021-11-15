import React, { Component } from "react";
import "./App.css";
import TitleBar from "./TitleBar/TitleBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.books = [
      {
        title:
          "The New Jim Crow: Mass Incarceration in the Age of Colorblindness",
        author: "Michelle Alexander",
      },
      { title: "Stamped From the Beginning", author: "Ibran X. Kendi" },
      { title: "Aquarius", author: "Taylor Moon" },
    ];
    this.state = {
      bookNumber: 1,
    };
  }

  goToNextBook = () => {
    let tempBookNumber = this.state.bookNumber;
    tempBookNumber++;
    if (tempBookNumber == this.books.length) {
      tempBookNumber = 0;
    }
    this.setState({
      bookNumber: tempBookNumber,
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <TitleBar />
        <div className="row">
          <div className="col-md-4">
            {/*Button is going to be here to move to previous book*/}
          </div>
          <div className="col-md-4">
            {/*Display book with cover*/}
            <h1>{this.books[this.state.bookNumber].title}</h1>
            <h4>{this.books[this.state.bookNumber].author}</h4>
          </div>
          <div className="col-md-4">
            {/*Button is going to be here to move to next book*/}
            <button onClick={this.goToNextBook}>Next Book</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
