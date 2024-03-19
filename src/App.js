import {useState} from "react"
import './App.css';
import Box from './component/Box';

// 1. 박스 2개 (타이틀,사진,결과값) 
// 2. 가위 바위 보 버튼이 있다. 
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임.
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3 4번의 결과를 가지고 누가 이겼는지 승패를 나눔 
// 6. 승패결과에 따라 테두리 색이 바뀐다. (이기면:초록 지면:빨강 비기면:검은색)

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
}
function App() {

  const [userSelect, setUserSelect] = useState(null)
  
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect}/>
        {/* <Box title="Computer"/>   */}
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
