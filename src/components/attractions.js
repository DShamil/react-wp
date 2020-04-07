import React, {Component} from 'react';
import axios from 'axios';
import SingleAttraction from './SingleAttraction';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export class Attractions extends Component{
    state ={
        
        Attractions: [],
        isLoaded: false
    }

    componentDidMount(){
        axios.get('https://paruwa.co.uk/wp-json/wp/v2/st_activity')
        .then(res => this.setState({
            attractions: res.data,
            isLoaded:true
        }))
        .catch(err => console.log(err));
    }
    render(){
        const { attractions, isLoaded } = this.state;
        if(isLoaded){
            return(
                <div>
                    <Row>
                        {attractions.map(attraction =>(
                            <Col sm={3} key={attraction.id}>
                            <SingleAttraction  attraction={attraction} />
                            </Col>
                        ))}
                    </Row>
                   
                </div>  
            );
        }
        return <p>...</p>
    }
}
export default Attractions