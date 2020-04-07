import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export class SingleAttraction extends Component{
    state = {
        imgUrl: '',
        isLoaded: false
    }
    static propTypes = {
        attraction: PropTypes.object.isRequired
    }
    componentDidMount(){           
        const getImageUrl = axios.get('https://paruwa.co.uk/wp-json/wp/v2/media/'+this.props.attraction.featured_media);
        Promise.all([getImageUrl]).then(res => {
            this.setState({
                imgUrl: res[0].data.media_details.sizes.full.source_url,
                isLoaded: true
            });
        })
    }
    render(){        
        const { title, excerpt } = this.props.attraction;
        const {imgUrl, isLoaded} = this.state;
        if(isLoaded){
            return(
                <div>                    
                    <div style={{width: '100%', overflow:'hidden',backgroundPosition: 'center center'}}>
                        <img style={{minWidth: '100%',minHeight:'200px',maxHeight: '200px'}} src={imgUrl} alt={title.rendered} />
                    </div>
                    <div style={{padding: '15px', border: '1px solid #efefef',margin:'0px 0px 15px 0px'}}>
                    <h4> { title.rendered} </h4>
                    <div dangerouslySetInnerHTML={{__html: excerpt.rendered}}></div>
                    </div>
                </div>
            )
        }
       return null;
    }
}
export default SingleAttraction;