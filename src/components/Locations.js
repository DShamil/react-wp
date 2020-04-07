import React, {Component} from 'react';
import axios from 'axios';
import SingleLocation from './SingleLocation';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export class Locations extends Component{
    state ={
        
        Locations: [],
        isLoaded: false
    }

    componentDidMount(){
        axios.get('https://paruwa.co.uk/wp-json/wp/v2/location')
        .then(res => this.setState({
            locations: res.data,
            isLoaded:true
        }))
        .catch(err => console.log(err));
    }
    render(){
        const { locations, isLoaded } = this.state;
        if(isLoaded){
            return(
                <div>
                    <Row>
                        {locations.map(location =>(
                            <Col sm={3} key={location.id}>
                            <SingleLocation  location={location} />
                            </Col>
                        ))}
                    </Row>
                   
                </div>  
            );
        }
        return <p>...</p>
    }
}
export default Locations