
type Props = {
    item : {
        name : string;
        quantity : number;
       
        
    }
}

const MenuItem = (props:Props) => {
    return(
        <>
        <li>
        <h2>{props.item.name}</h2>
        <span>{props.item.quantity}</span>
    </li></>
    )

}

export default MenuItem