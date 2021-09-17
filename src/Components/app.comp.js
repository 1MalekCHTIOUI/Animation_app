import react, {Component} from 'react'
import { Button, Container } from 'reactstrap'

import "../util/Anims"

class appInterface extends Component {

    
    render(){
        return (
            <div id="contentContainer">
                <Container >
                    <h3>Score: <h5 id="score"></h5></h3>
                </Container>
                <Container className="wrapper-app" >
                    <div id="main">
                        <div className="geomitry" id="geo"></div>
                        <div className="sec"></div>
                    </div>
                    <hr />
                    <Button color="primary" style={{position:"absolute", width:"50vw", top:"80%", left:"25%"}} id="btn">Go</Button>

                </Container>
            </div>
        )
    }
}

export default appInterface