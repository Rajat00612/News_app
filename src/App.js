import './App.css';
import React,{useState}  from 'react'
import NavBar from './Components/NavBar';
import News  from './Components/News';

import {
  BrowserRouter as Router,Routes, Route} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const  App =()=> {
   const PageSize=8;
const apiKey='8cd26a418c6a4326a21605595de2310b'




  
  
 
  const [progress, setProgress] = useState(0);
  
  
    return (
      
      <div>
        
        <Router>
          <NavBar/>
          <LoadingBar
          height={3}
        color="#f11946"
        progress={progress}
        
      />
          <Routes>
            <Route exact  path="/" element={<News setprogress={setProgress} apiKey={apiKey} key="general" pageSize={PageSize} country="us" category="general" />} />
            <Route exact path="/business" element={<News setprogress={setProgress} apiKey={apiKey} key="business" pageSize={PageSize} country="us" category="business" />} />
            <Route exact path="/health" element={<News setprogress={setProgress} apiKey={apiKey} key="health" pageSize={PageSize} country="us" category="health" />} />
            <Route exact path="/science" element={<News setprogress={setProgress} apiKey={apiKey}  key="science"pageSize={PageSize} country="us" category="science" />} />
            <Route exact path="/sports" element={<News setprogress={setProgress} apiKey={apiKey} key="sports" pageSize={PageSize} country="us" category="sports" />} />
            <Route exact path="/entertainment" element={<News setprogress={setProgress} apiKey={apiKey} key="entertainment" pageSize={PageSize} country="us" category="entertainment" />} />
            <Route exact path="/technology" element={<News setprogress={setProgress} apiKey={apiKey} key="technology" pageSize={PageSize} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
      
    )
  }

export default App