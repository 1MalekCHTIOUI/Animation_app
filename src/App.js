import logo from './logo.svg';
import './App.css';
import react, {Component, Fragment} from 'react'
import AppInterface from './Components/app.comp';
import NavBar from './Components/navbar.comp';
import 'bootstrap/dist/css/bootstrap.css';
class App extends Component {
  render(){
    return (
        <>
          <NavBar />
          <Fragment>
            <AppInterface />
          </Fragment>
        </>
      
    )
  }
}

export default App;
