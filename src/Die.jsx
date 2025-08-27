export default function Die(props) {
    return (
        <button className={props.isHeld && "isHeld"}>{props.value}</button>
    )
}