import React, { useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from 'axios'
import Navigation from './components/navigation/Navigation'
import ImageUpload from './components/uploads/ImageUpload';
import VideoUpload from './components/uploads/VideoUpload';
import Index from './components/Index';
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
      <Navigation/>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/image" exact component={ImageUpload} />
        <Route path="/video" exact component={VideoUpload} />

      </Switch>

    </Router>

  );
}

export default App;
