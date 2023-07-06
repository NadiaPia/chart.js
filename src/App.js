import { useState } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import {TempData} from "./Data";
import LineChart from './components/LineChart';

function App() {

  const [tempData, setTempData] = useState({
    labels: TempData.map((data) => data.hour), //['00:00', '01:00','02:00','03:00'...]
    datasets: [{
      label: "temp",
      //data: TempData.map((data) => data.temp),
      data: TempData.map((data) => data.temp),
      backgroundColor: ["green", "blue", "red", "yellow", "purple"], //optinal
      borderColor: "black",
      borderWidth: 2,
    }]
  })
  return (
    <div className="App">
      <div style={{width: 700}}>
      <BarChart chartData={tempData}/>
      </div>

      <div style={{width: 700}}>
      <LineChart chartData={tempData}/>
      </div>
    </div>
  );
}

export default App;
