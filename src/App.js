
import './App.css';
import "./Dashboard.css";
import Signup from './Signup';
import Signin from './Signin';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'





function App() {
  return (
    <Router>

      <div className='App'>
        
        
        <div className="sign">
          <Switch>
            <Route exact path="/">

              <Dashboard/>

            </Route>
            <Route exact path="/signup">
              <Signup/>
            </Route>

            <Route path="/signin">
              <Signin/>
            </Route>

          </Switch> 
        </div>
      
      </div>

    </Router>
    
   
    
    
    
  );
}

export default App;
