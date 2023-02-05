
import axios from "axios";

const getAllPagesReq = (setToDo) => {
    axios({
        url: 'http://localhost:8000/api/get-pages-data',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(({data}) => {
        console.log(data)
        setToDo(data)
    })
}


export default getAllPagesReq;
