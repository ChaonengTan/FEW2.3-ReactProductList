function Products(props){
    return(
        <div className='products'>
            {props.data.filter(obj => obj.category === props.category || props.category === 'All').map(prod => {
            return (
                <div>
                    <h3>{prod.name}</h3>
                    <p>Category: {prod.category}</p>
                    <p>{prod.price}</p>
                </div>
            )
            })}
        </div>
    )
}
export default Products