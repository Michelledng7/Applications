import React, { useState } from 'react';
import './App.css';
import AddList from './components/AddList';
import List from './components/List';
export interface IState {
  people: {
  name: string;
  url: string;
  age: number;
  notes?: string;
}[]
}

function App() {



  const [people, setPeople] = useState<IState["people"]>([{
    name: "Rafal Nadal",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSifvZdMo3sfz3nDJ7eCblT_yY9-WO4qCD1xQ&usqp=CAU",
    age: 32,
    notes: "The 22-time Grand Slam champion has always been appreciated for his ability to never give up"
  }, 
  {
    name: "Roger Federer",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQriDlADuTpJp85y5HSV-KO2qAIhdgW39dHlQ&usqp=CAU",
    age: 40,
    notes: "Roger Federer holds several ATP records and is considered to be one of the greatest tennis players of all time."
  },

  {
    name: "Marcos Giron",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBaTA9YZFH2aUs-goMxRlRYAw9ch7PAkMVw&usqp=CAU",
    age: 29,
    notes: "Marcos Andres Giron (born July 24, 1993; Spanish: Marcos Girón) is an American professional tennis player."
  },
  ])
  return (
    <div className="App">
    <h1>Tennis legendary players</h1>
    <ul><List people = {people}/></ul>
   <div><AddList people = {people} setPeople = {setPeople}/></div> 
    </div>
  );
}

export default App;
