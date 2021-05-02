import React, { useEffect } from 'react';
import axios from 'axios'
import Navigation from './components/navigation/Navigation'
async function fetchData(){
  await axios.get('/api/todos').then(res=>console.log(res.data)).catch(err=>console.log(err))
}

function App() {
  useEffect(() => {
    fetchData()
    return () => {
      
    }
  }, [])
  return (
    <>
    <Navigation />
    </>

  );
}

export default App;
