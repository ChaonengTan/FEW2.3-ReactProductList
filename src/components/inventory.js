function Inventory(props){
    const totalPrice = props.data.reduce((acc, obj) => {
        return acc+parseFloat(obj.price.slice(1))
    }, 0).toFixed(2)
    const totalUnits = props.data.reduce((acc, obj) => {
        return acc+obj.units
    }, 0)
    return (
        <div className='inventory'>
            <h3>Total Inventory Cost: ${totalPrice}</h3>
            <h3>Total Units: {totalUnits}</h3>
        </div>
    )
}
export default Inventory