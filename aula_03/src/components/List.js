import Item from "./Item"


function List(){
    return(
        <>
        <h1>Minha Lista</h1>
        <ul> 
            <Item marca="FIAT" ano={1952}/>
            <Item marca="VW" ano={1999}/>
        </ul>
        </>
    )
}

export default List