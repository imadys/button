function Button(props) {
    return (
        <button onClick={props.onClick} autoFocus={props.autofocus} type={props.type} disabled={props.disabled} className={`btn btn-${props.color}${props.outline ? '-outline' : ''} ${props.size ? 'btn-' + props.size : ''} ${props.rounded ? 'rounded-md' : ''} ${props.className ? props.className : ''}`}>
            {props.iconDirection == "right" && props.icon}
            {props.children}
            {props.iconDirection == "left" && props.icon}
        </button>
    )
}
export default Button