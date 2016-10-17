import React from 'react'
import { Link } from 'react-router'

class CakeAdd extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.currentCake
        this.changeValue = this.changeValue.bind(this)
        this.save = this.save.bind(this)
    }
    static propTypes = {
        currentCake: React.PropTypes.shape({  
            title: React.PropTypes.string,
            desc: React.PropTypes.string,
            image: React.PropTypes.string
        }).isRequired,
        editCake: React.PropTypes.func.isRequired
    }
    changeValue(e){
        this.setState({[e.target.name]: e.target.value})
    }
    save(e){
        e.preventDefault()
        this.props.editCake(this.state, this.props.currentCake)
    }
    render(){
        let {title, desc, image} = this.state
        return <div>
            <Link to="/cakes" className="button">Back</Link>
            <br />
            <form>
                <h3>Cake</h3>
                <label>Title</label><br />
                <input type="text" name="title"
                 value={title}
                 required
                 onChange={this.changeValue}/>
                <br /><br />
                <label>Description</label><br />
                <input type="text" name="desc" 
                 value={desc}
                 onChange={this.changeValue}/>
                <br /><br />
                <label>Image Url</label><br />
                <input type="text" name="image" 
                 value={image}
                 onChange={this.changeValue}/>
                <br /><br />
                <button type="submit" onClick={this.save}>Save</button>
            </form>
        </div>
    }
}

export default CakeAdd