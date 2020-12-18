import React, { Component } from "react";
import "./style.css";
import Quize from "./container/index";
import Result from "./components/Result";
import Bubble from "./components/Bubble";
import Rules from "./components/Rules";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      randomQuestion: [],
      score: 0,
      response: 0,
      showBubble: false,
      answer: "",
      correctAnswer: "",
    };
  }

  getQuestions = () => {
    Quize().then((question) => {
      this.setState({
        randomQuestion: question,
      });
    });
  };

  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({
        score: this.state.score + 1,
        answer,
        correctAnswer,
      });
    }
    this.setState({
      response: this.state.response < 5 ? this.state.response + 1 : 5,
    });
  };

  playAgain = () => {
    this.getQuestions();
    this.setState({
      score: 0,
      response: 0,
    });
  };

  showBubbleHandler = (value) => {
    this.setState({
      showBubble: value,
    });
    if (this.state.answer === this.state.correctAnswer) {
      this.interval = setInterval(
        () => this.setState({ showBubble: false }),
        5000
      );
    }
  };

  componentDidMount() {
    this.getQuestions();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <Router>
        <div className="container">
          {this.state.showBubble ? <Bubble /> : null}
          <div className="title">QuizeApp</div>
          <Switch>
            <Route exact path="/" component={Rules} />
            <Route
              exact
              path="/home"
              render={() => (
                <Home
                  randomQuestion={this.state.randomQuestion}
                  response={this.state.response}
                  showBubble={this.state.showBubble}
                  showBubbleHandler={this.showBubbleHandler}
                  computeAnswer={this.computeAnswer}
                />
              )}
            />
            <Route
              exact
              path="/result"
              component={() => (
                <Result score={this.state.score} playAgain={this.playAgain} />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
