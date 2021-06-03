function Header(props){
    return(
        <header className="App-header">
            <h1>React Product List</h1>
            <p>Product Count: {props.prodCount}</p>
            <p>Categories Count: {props.catCount}</p>
        </header>
    )
}
export default Header