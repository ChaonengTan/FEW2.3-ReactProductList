function Categories(props){
    return(
        <div className='categories'>
            {props.catWCount.map(obj => {
                const className = obj.name === props.category ? 'select' : ''
                return (
                    <button className={className} onClick={() => props.onClick(obj.name)}>
                        {obj.name}
                        <span>{obj.count}</span>
                    </button>
                )
            })}
        </div>
    )
}
export default Categories