import './App.css';
import { useEffect, useState } from 'react';
import Box from './Box';

function App() {

  const [grid, setGrid] = useState([
    {
      id: 1,
      isClicked: false,
    },
    {
      id: 2,
      isClicked: false,
    },
    {
      id: 3,
      isClicked: false,
    },
    {
      id: 4,
      isClicked: false,
    },
    {
      id: 5,
      isClicked: false,
    },
    {
      id: 6,
      isClicked: false,
    },
    {
      id: 7,
      isClicked: false,
    }
  ]);
  const [queue, setQueue] = useState([]);

  useEffect(()=> {

    if(queue.length === grid.length) {
      let count = 0;
      while(queue.length){
        count++;
        const elem = queue[queue.length-1];
        queue.splice(-1);
        setTimeout(() => {
          setGrid(grid.map((gridObj)=> {
            if(gridObj.id === elem.id) gridObj.isClicked = false;
            return gridObj;
          }));
        }, count*1000);
      }
    }
  }, [queue])

  const handleClick = (item)=> {
    const foundIndex = queue.findIndex((obj) => obj.id === item.id);
    if(foundIndex > -1){
      const newQueue = [...queue];
      newQueue.splice(foundIndex, 1);
      setQueue(newQueue);
    }
    else {
      setQueue((oldQueueState) => [...oldQueueState, item]);
    }
    setGrid(grid.map((gridObj)=> {
      if(gridObj.id === item.id) gridObj.isClicked = !gridObj.isClicked;
      return gridObj;
    }));
  }

  return (

    <div className="container">
       {grid.map((item) => {
        return <div className="box-container">
            <Box key={item.id} item={item} handleClick={handleClick}></Box>
        </div>
       })}
    </div>
  );
}

export default App;
