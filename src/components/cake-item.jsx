import React from 'react'

class CakeItem extends React.Component {
    static propTypes = {
        cake:  React.PropTypes.shape({  
            title: React.PropTypes.string,
            desc: React.PropTypes.string,
            image: React.PropTypes.string
        }).isRequired,
        editCake: React.PropTypes.func.isRequired
    }
    edit(e){
        e.preventDefault()
        this.props.editCake(this.props.cake)
    }
    render(){
        const cake = this.props.cake
        return <div className="cake-item">
            <div className="cake-title">
                {cake.title}
            </div>
            <img src={cake.image ? cake.image : "http://placehold.it/250x200"} 
                alt={cake.title} 
                className="cake-img"/>
            <div>
                {cake.desc}
            </div>
            <a href="#" onClick={this.edit.bind(this)}>Edit</a>
        </div>
    }
}

export default CakeItem