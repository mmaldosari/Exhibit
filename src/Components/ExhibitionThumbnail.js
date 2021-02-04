import React from 'react'
import { Link } from 'react-router-dom'



class exhibitionThumbnail extends React.Component {

    deleteClickHandler = () => {
        this.props.deleteExhibition(this.props.exhibition.id)
    }

    
    
    render(){
    
    return (
        <>
        {this.props.container ? 
        
        <div className="flex-item">
            <h3>
                {console.log(this.props)}
                {console.log(this.props.exhibition.description)}
                {this.props.exhibition.gallery}
            </h3>
            <Link to={{ pathname: `/exhibitions/${this.props.exhibition.id}` }}>
            <img 
            className="index-img"
            src={this.props.exhibition.image.image_url}
            alt={this.props.exhibition.title}
            />
            </Link>
            {console.log(this.props.image)}
        </div>
        :
        <div className="flex-item">
            <h3>
                {console.log(this.props)}
                {this.props.exhibition.title}
            </h3>
            <Link to={{ pathname: `/exhibitions/edit/${this.props.exhibition.id}` }}>
            <img 
            className="index-img"
            src={this.props.image}
            alt={this.props.exhibition.title}
            />
            </Link>
            <br></br>
            <button onClick={this.deleteClickHandler}>delete this exhibition</button>
            {console.log(this.props.image)}
            
            </div>
        
        }
        </>
    )
    }
}

export default exhibitionThumbnail