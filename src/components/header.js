function Header(props){
    return(
        <header className="App-header">
            <h1>Hello World!! Check Console~~</h1>
            <p>Product Count: {props.prodCount}</p>
            <p>Categories Count: {props.catCount}</p>
        </header>
    )
}
export default Header