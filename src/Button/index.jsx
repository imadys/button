function Button({ children, click = () => { }, color = "", rounded = true, size = "", outline = false, disabled = false, setIcon = {} }) {
    return (
        <button onClick={click} disabled={disabled} className={`btn btn-${color}${outline ? '-outline' : ''} ${size ? 'btn-' + size : ''} ${rounded ? 'rounded-md' : ''} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}>
            {setIcon.direction == 'left' && setIcon.icon}
            {children}
            {setIcon.direction == 'right' && setIcon.icon}
        </button>
    )
}
export default Button