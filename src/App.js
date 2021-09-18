import logo from './logo.svg';
import './App.css';
import react, {Component, Fragment} from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Rotate from './Components/rotate.comp';
import DegreeVisualizer from './Components/degree.comp';
import NavBar from './Components/navbar.comp';
import 'bootstrap/dist/css/bootstrap.css';
class App extends Component {
  render(){
    return (
        <>
        <Router>
            <NavBar />
            <Fragment>
              <Switch>
                <Route path="/" exact component={()=>{return <h3>Heeloo</h3>}} />
                <Route path="/rotate" exact component={Rotate} />
                <Route path="/degree" exact component={DegreeVisualizer} />
              </Switch>
            </Fragment>
        </Router>
        </>
      
    )
  }
}

export default App;
