import ListItem from '../listItem/ListItem';


import './list.css';


const List = ({data, onToggleProp, deleteItem}) =>{
    
    const element = data.map((item) =>{
        const {id, ...itemProps} = item
        return(
            <ListItem {...itemProps} 
                deleteItem={() => deleteItem(id)}
                key={id}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            />
        )
    })
    return(
        <div className="list-wrapper">
            {element}
        </div>
    );
};

export default List;