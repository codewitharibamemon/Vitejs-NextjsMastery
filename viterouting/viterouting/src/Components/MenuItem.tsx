
type Props = {
    item : {
        name : string;
        quantity : number;
        image : string;
        
    }
}

const MenuItem = (props:Props) => {
    return(
        <>
        <li className="flex">
            <img src={props.item.image} />
        <h3>{props.item.name}</h3>
        <span>{props.item.quantity}</span>
    </li></>
    )

}

export default MenuItem