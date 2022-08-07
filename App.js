import {useState} from 'react'
import {InputName} from './component/InputName.js'
import {ChooseAnimal} from './component/ChooseAnimal.js'
import {ChooseWeight} from './component/ChooseWeight.js'
import {ChooseWool} from './component/ChooseWool.js'
import {ChooseRoom} from './component/ChooseRoom.js'
import {PriceCalculation} from './component/PriceCalculation.js'
import './App.css';

function App() {

  const [counter, setCounter] = useState(0);
  const [inputText, setInputText] = useState('');
  const [DataBase, setDataBase] = useState([])

  if (counter === 0) {
    return <InputName setInputText={setInputText} inputText={inputText} setCounter={setCounter} />
  } else if (counter === 1){
    return <ChooseAnimal setCounter={setCounter} setDataBase={setDataBase} counter={counter} />
  } else if (counter === 2) {
    return <ChooseWeight setCounter={setCounter} setDataBase={setDataBase} />
  } else if (counter === 3) {
    return <ChooseWool setCounter={setCounter} setDataBase={setDataBase} />
  } else if (counter === 4) {
    return <ChooseRoom setCounter={setCounter} setDataBase={setDataBase} />
  } else if (counter === 5) {
    return <PriceCalculation setCounter={setCounter} DataBase={DataBase} inputText={inputText} />
}
}
export default App;
