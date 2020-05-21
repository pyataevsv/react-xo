import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class PlayApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      condition: Array(9).fill(null),
    }
    this.handleClick = this.handleClick.bind(this)
    this.xTime = true;
    this.thereIsWinner = false;
    this.progress = [Array(9).fill(null)];
    this.step = 0;
  }

  handleClick(i) {
    if (!this.thereIsWinner && (this.step === (this.progress.length - 1))) {
      let newArr = this.state.condition.slice();
      newArr[i] = this.xTime ? 'x' : 'o';
      this.progress.push(newArr);
      this.setState({ condition: newArr });
      this.step++;


    }
  }

  reset() {
    this.progress = [Array(9).fill(null)];
    this.step = 0;
    this.setState({ condition: Array(9).fill(null) });
  }

  prev() {
    if ((this.step - 1) >= 0) {
      this.step--;
      this.setState({ condition: this.progress[this.step] });
    }
  }

  next() {
    if (this.step < this.progress.length - 1) {
      this.step++;
      this.setState({ condition: this.progress[this.step] });
    }
  }

  goStep(i) {
    this.step = i;
    this.setState({ condition: this.progress[i] })
  }


  checkWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of lines) {
      if (this.state.condition[line[0]] === this.state.condition[line[1]] && this.state.condition[line[1]] === this.state.condition[line[2]] && this.state.condition[line[0]] != null) {

        return true;
      }
    }
    return false;
  }

  render() {
    this.thereIsWinner = this.checkWinner();
    let winner = '';
    if (this.thereIsWinner && this.xTime) {
      winner = 'x'
    } else if (this.thereIsWinner && !this.xTime) {
      winner = 'o'
    }
    this.xTime = !this.xTime;


    return (
      <div>
        <Board condition={this.state.condition} handleClick={this.handleClick} />
        <Control
          winner={winner}
          reset={() => { this.reset() }}
          prev={() => { this.prev() }}
          next={() => { this.next() }}
          steps={this.progress.length - 1}
          goStep={(i) => { this.goStep(i) }}

        />
      </div>

    );
  }
}


function Board(props) {

  return (
    <div className='board'>
      <Square number={0} condition={props.condition} handleClick={props.handleClick} />
      <Square number={1} condition={props.condition} handleClick={props.handleClick} />
      <Square number={2} condition={props.condition} handleClick={props.handleClick} />
      <Square number={3} condition={props.condition} handleClick={props.handleClick} />
      <Square number={4} condition={props.condition} handleClick={props.handleClick} />
      <Square number={5} condition={props.condition} handleClick={props.handleClick} />
      <Square number={6} condition={props.condition} handleClick={props.handleClick} />
      <Square number={7} condition={props.condition} handleClick={props.handleClick} />
      <Square number={8} condition={props.condition} handleClick={props.handleClick} />
    </div>
  )
}




function Square(props) {
  return (
    <div
      className='btn'
      onClick={() => { props.handleClick(props.number) }}
    >
      {props.condition[props.number]}
    </div>
  )
}

function Control(props) {
  let winnerText = '';
  if (props.winner) {
    winnerText = props.winner + ' win'
  }

  return (
    <div>
      <div className='winner-box'>
        {winnerText}
      </div>

      <button
        onClick={props.reset}
      >
        Reset
    </button>

      <button
        onClick={props.prev}
      >
        Prev
    </button>

      <button onClick={props.next}>
        Next
    </button>
      <div>
        <Steps steps={props.steps} goStep={props.goStep} />
      </div>

    </div>
  )

}

function Steps(props) {
  let buttons = Array(props.steps).fill(null).map((item, ind) => ind + 1).map((item) => <button key={item} onClick={() => { props.goStep(item) }}>step {item}</button>);

  return (
    buttons
  );
}





ReactDOM.render(
  <PlayApp />,
  document.getElementById('root')
);
