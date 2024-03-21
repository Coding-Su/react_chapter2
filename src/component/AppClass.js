import React, { Component } from 'react'
import BoxClass from './BoxClass';
import "../App.css"

const choice = {
  rock:{
    name:"Rock",
    img:"https://i.namu.wiki/i/EVY3w8dcRy6kNpqW9vXduBDLJXSql8VJEt9Zs3ga9qgmE3qMIjTRUvaDXW4UoKlw2bpErfqd1g43Kv2dr8k2vA.webp",
  },
  scissors:{
    name:"Scissors",
    img:"https://www.tefal.co.kr/medias/?context=bWFzdGVyfGltYWdlc3wzMTM3MHxpbWFnZS9qcGVnfGltYWdlcy9oMjgvaDc4LzE2MjU1MjQwODMxMDA2LmpwZ3xiYzhjMzQ5ODEwM2JhYTRiYWFmYzBhZDBkMDFhNjYzNWY1NDBkMzc1OWZhM2FjZDg0ZjAwM2MzZTE3OTU2N2Zi",
  },
  paper:{
    name:"Paper",
    img:"https://previews.123rf.com/images/taddeus/taddeus1208/taddeus120800135/14813510-%EC%98%A4%EB%9E%98%EB%90%9C-%EC%A2%85%EC%9D%B4.jpg"
  },
};

export default class AppClass extends Component {

  constructor() {
    super();
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: "",
    };
  }

  play = (userChoice) => {
    // setUserSelect(choice[userChoice]);
    let computerChoice = this.randomChoice();
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: this.judgement(choice[userChoice], computerChoice),
    });
  };

  judgement = (user, computer) => {  
    if(user.name === computer.name){
      return "tie";
    } else if (user.name === "Rock") 
      return computer.name === "Scissors"?"win":"lose";
    else if (user.name === "Scissors") 
      return computer.name === "Paper"?"win":"lose";
    else if (user.name === "Paper") 
      return computer.name === "Rock"?"win":"lose";
  };  

  randomChoice = () => {
    // 객체의 키값만 뽑아서 어레이로 만들어주는 함수
    let itemArray = Object.keys(choice); 
    // console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  }

  render() {
    return (
      <div>
        <div className="main">
          <BoxClass 
            title = "You" 
            item = {this.state.userSelect} 
            result = {this.state.result}
          />
          <BoxClass 
            title = "Computer" 
            item = {this.state.computerSelect} 
            result = {this.state.result}
          />  
        </div>
        <div className="main">
          <button onClick={() => this.play("scissors")}>가위</button>
          <button onClick={() => this.play("rock")}>바위</button>
          <button onClick={() => this.play("paper")}>보</button>
        </div>
      </div>
    );
  }
}
