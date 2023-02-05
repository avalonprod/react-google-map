import { Component, useEffect, useState } from "react";
import axios from 'axios'


import List from "../list/List";
import AddNewItem from "../addNewItem/AddNewItem";

import './app.css'
import getAllPagesReq from "../api";



const App = () =>{
    let state ={
        data: [

        ]
    }
    
    const setToDo = useState;


    useEffect(() =>{
        getAllPagesReq(setToDo)
    })



    const onAddData = (data) =>{
        let newItem = data

        newItem.disabled = true

        let oldData = state.data
        let newData = [newItem]
        console.log(newItem)

        state.data = newData
    }
    onAddData(setToDo)

    const onToggleProp = (id, prop) =>{
        state.data.map(item =>{
            if(item.id === id) {
                return item = {...item, [prop]: !item[prop]}
            } else return item
        })
    }

    const deleteItem = (id)=> {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }



    return(
        <div className="app">
            <List data={state.data} onToggleProp={onToggleProp} deleteItem={deleteItem}/>
            <AddNewItem onAddData={onAddData}/>

        </div>
    )
  
}

export default App;



;