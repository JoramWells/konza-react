import React, { useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
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

    <Router>
      <Switch>
        <Route path="/" exact component={Navigation} />

      </Switch>

    </Router>

  );
}

export default App;
