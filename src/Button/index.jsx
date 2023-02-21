import { useCallback } from "react";
import '../index.css'
function Button(
    {
        color,
        outline,
        size,
        rounded,
        className,
        icon,
        iconDirection,
        children,
        type = "button",
        disabled,
        onClick,
        ...props

    }
) {

    const onClickHandler = useCallback((e) => {
        if (disabled) {
            return
        }
        onClick?.(e)
    }, [onClick, disabled])

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClickHandler}
            className={`btn btn-${color}${outline ? '-outline' : ''} ${size ? 'btn-' + size : ''} ${rounded ? 'rounded-md' : ''} ${className ? className : ''}`}
            {...props}
        >
            {iconDirection === "right" && icon}
            {children}
            {iconDirection === "left" && icon}
        </button>
    )
}

export default Button