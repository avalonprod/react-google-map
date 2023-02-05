
import { Component } from 'react'
import './listItem.css'



class ListItem extends Component{
    constructor(props) {
        super(props)
        this.state = {
            href: this.props.href,
            urlMarker: this.props.urlImgMarker,
            title: this.props.title,
            text: this.props.text,
            urlImg: this.props.urlImg,
            lat: this.props.lat,
            lng: this.props.lng,
            name: this.props.name,
            url: this.props.url,
        }
    }
    onChangeValue = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }
    
    render() {
        const {disabled, onToggleProp, deleteItem} = this.props
        const {href, urlMarker, title, text, urlImg, lat, lng} = this.state
        let editDisplay, saveDisplay
        if(disabled){
            editDisplay = 'block'
            saveDisplay = 'none'
        } else{
            saveDisplay = 'block'
            editDisplay = 'none'
        };
        return(
            <div className="list__item">
                <ul className="list" >
                    <li className="item">
                        <input type="text" 
                            value={href}
                            disabled={disabled}
                            name='href'
                            onChange={this.onChangeValue}
                        />
                    </li>
                    <li className="item">
                        <input type="text" 
                            value={urlMarker}
                            disabled={disabled}
                            name='urlMarker'
                            onChange={this.onChangeValue}
                        />
                    </li>
                    <li className="item">
                        <input type="text" 
                            value={title}
                            disabled={disabled}
                            name='title'
                            onChange={this.onChangeValue}
                        />
                    </li>
                    <li className="item">
                        <input type="text" 
                            value={text}
                            disabled={disabled}
                            name='text'
                            onChange={this.onChangeValue}
                        />
                    </li>
                    <li className="item">
                        <input type="text" 
                            value={urlImg}
                            disabled={disabled}
                            name='urlImg'
                            onChange={this.onChangeValue}
                        />
                    </li>
                    <li className="item">
                        <input type="number"
                            disabled={disabled}
                            name='lat'
                            onChange={this.onChangeValue}
                            value={lat}
                        />
                    </li>
                    <li className="item">
                        <input type="number" 
                            value={lng}
                            disabled={disabled}
                            name='lng'
                            onChange={this.onChangeValue}
                        />
                    </li>
                    <li className="item">
                        <input type="text" 
                            value={'sdf'}
                            disabled={disabled}
                            name=''
                            onChange={this.onChangeValue}
                        />
                    </li>
                    <li className="item">
                        <input type="text" 
                            value={'sdf'}
                            disabled={disabled}
                            name=''
                            onChange={this.onChangeValue}
                        />
                    </li>
                    <li className='item'>
                        <button className='edit list__item-btn'
                            data-toggle='disabled'
                            style={{display: editDisplay}}
                            onClick={onToggleProp}
                        >Edit</button>
                        <button className='save list__item-btn'
                            data-toggle='disabled'
                            style={{display: saveDisplay}}
                            onClick={onToggleProp}
                        >Save</button>
                        <button className="delete list__item-btn"
                            onClick={deleteItem}
                        >
                            Delete
                        </button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default ListItem;