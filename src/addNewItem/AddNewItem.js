import { Component } from 'react'

import './addNewItem.css'


class AddNewItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            href: '',
            urlMarker: '',
            title: '',
            text: '',
            urlImg: '',
            lat: 0,
            lng: 0,
            name: '',
            url: '',
        }
    }
    changeValue = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }
    onAddItem = (e) =>{
        e.preventDefault()
        this.props.onAddData({
            href: this.state.href,
            urlImgMarker: this.state.urlMarker,

            bangalore: {
                lat: this.state.lat,
                lng: this.state.lng
            },
            id: 0,
            dataPopup: {
                title: this.state.title,
                text: this.state.text,
                urlImg: this.state.urlImg,
            },
            disabled: true
        })
        this.setState({
            href: '',
            urlMarker: '',
            title: '',
            text: '',
            urlImg: '',
            lat: 0,
            lng: 0,
            name: '',
            url: '',
        })
    }

    render() {
        const {href, urlMarker, title, text, urlImg, lat, lng, name, url} = this.state
        return(
            <div className="add__item">
                <form action="" onSubmit={this.onAddItem}>
                <ul className="list">
                    <li className="item">
                        <input type="text" id="href"
                            placeholder='href'
                            name='href'
                            value={href}
                            onChange={this.changeValue}
                        />
                    </li>
                    <li className="item">
                        <input type="text" id="url-marker"
                            placeholder='url-marker'
                            name='urlMarker'
                            value={urlMarker}
                            onChange={this.changeValue}
                        />
                    </li>
                    <li className="item">
                        <input type="text" id="title"
                            placeholder='title'
                            name='title'
                            value={title}
                            onChange={this.changeValue}
                        />
                    </li>
                    <li className="item">
                        <input type="text" id="text"
                            placeholder='text'
                            name='text'
                            value={text}
                            onChange={this.changeValue}
                        />
                    </li>
                    <li className="item">
                        <input type="text" id="url-img"
                            placeholder='url-img'
                            name='urlImg'
                            value={urlImg}
                            onChange={this.changeValue}
                        />
                    </li>
                    <li className="item">
                        <input type="number" id="lat"
                            placeholder='lat'
                            name='lat'
                            value={lat}
                            onChange={this.changeValue}
                        />
                    </li>
                    <li className="item">
                        <input type="number" id="lng"
                            placeholder='lng'
                            name='lng'
                            value={lng}
                            onChange={this.changeValue}
                        />
                    </li>
                    <li className="item">
                        <input type="text" id="name"
                            placeholder='name'
                            name='name'
                            value={name}
                            onChange={this.changeValue}
                        />
                    </li>
                    <li className="item">
                        <input type="text" id="url"
                            placeholder='url'
                            name='url'
                            value={url}
                            onChange={this.changeValue}
                        />
                    </li>
                    <li className='item'>
                        <button className='add__item-button'
                        >Save</button>
                    </li>
                </ul>
                </form>
            </div>
        )
    }
}


export default AddNewItem