import react, {Component} from 'react'
import { Alert, Button, Container, Form, FormGroup, Input } from 'reactstrap'

import {Degree} from '../util/Anims'

class DegreeVisualizer extends Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    state = {
        degree: "",
        err:""
    }

    onSubmit(e){
        e.preventDefault();
        try {
            Degree(this.state.degree);
            this.setState({
                err: ""
            })
        }catch(e){
            this.setState({
                err: e.message
            })
        }
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })  
    }

    render(){
        return (
            <div className="container-fluid" id="contentContainer">
                <Container style={{textAlign:"center", padding:"6px"}}>
                <h6 style={{fontSize:"25px"}}>Please Enter Desired Degree!</h6>
                </Container>
                <Container>
                    <Form onSubmit={this.onSubmit} style={{position:"relative"}}>
                        <FormGroup>
                            <label>Enter degree: </label>
                            <input className="form-control" name="degree" value={this.state.degree} id="degree" type="text" onChange={this.onChange} />
                        </FormGroup>
                        <Button color="primary" type="submit" id="btn">Submit</Button>
                        <div style={{paddingTop:"1rem", width:"100%", position:"absolute"}}>
                            {this.state.err ? 
                                <Alert color="danger">{this.state.err}</Alert> 
                                : ""
                            }
                        </div>
                    </Form>
                </Container>

                <Container id="content" className="d-flex justify-content-center" style={{paddingTop:"18rem",paddingBottom:"9rem"}}>
                    <div id="visualizer"></div>
                    <div id="base"></div>

                </Container>
            </div>
        )
    }
}

export default DegreeVisualizer