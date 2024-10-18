import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Todo from './Todo';

function App() {
  // const [data, setData] = useState([]);

  // const getData = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:3500/todo");
      
  //     setData(response.data.tasks)
  //   } catch (error) {
  //     console.error("Error fetching data:");
  //     setData("Failed to fetch data");
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      {/* {data.map((el)=>(
        <p>{el.task}</p>
      ))} */}
      <Todo/>
    </>
  );
}

export default App;
