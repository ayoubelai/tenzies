export default function Die(props) {
    function handleClick() {
        props.hold(props.id)
    }
    return (
        <button className={props.isHeld ? "isHeld" : undefined} onClick={handleClick}>{props.value}</button>
    )
}