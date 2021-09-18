import react, {Component} from 'react'
import { Button, Container } from 'reactstrap'

import {rotate} from "../util/Anims"

class Rotate extends Component {
    componentDidMount(){
        rotate()
    }
    render(){
        return (
            <div className="container-fluid" id="contentContainer">
                <div id="scoreContainer">
                    <h3>Score: <h5 id="score"></h5></h3>
                </div>
                <Container>
                    <Container id="main">
                        <div className="geomitry" id="geo"><div className="sec" id="sec"></div></div>
                        
                    </Container>
                    <hr />
                </Container>
                <Button color="primary" className="centerContent" style={{position:"relative", left:"25%", width:"50vw", bottom:"10vh"}} id="btn">Go</Button>

            </div>
        )
    }
}

export default Rotate