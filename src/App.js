import React, { useEffect } from 'react';
import axios from 'axios'
import './App.css';

async function fetchData(){
  await axios.get('/todos').then(res=>console.log(res)).catch(err=>console.log(err))
}

function App() {
  useEffect(() => {
    fetchData()
    return () => {
      
    }
  }, [])
  return (
    <div>
      <h1>hahahaaa</h1>
    </div>

  );
}

export default App;
