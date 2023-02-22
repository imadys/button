import react from 'react';

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
    const colorVariants = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        success: 'btn-success',
        info: 'btn-info',
        warning: 'btn-warning',
        danger: 'btn-danger',
        primaryOutline: 'btn-primary-outline',
        secondaryOutline: 'btn-secondary-outline',
        successOutline: 'btn-success-outline',
        infoOutline: 'btn-info-outline',
        warningOutline: 'btn-warning-outline',
        dangerOutline: 'btn-danger-outline',
    }
    const sizes = {
        xs: 'btn-xs',
        sm: 'btn-sm',
        md: 'btn-md',
        lg: 'btn-lg',
        xl: 'btn-xl',
    }
    const onClickHandler = (e) => {
        if (disabled) {
            return
        }
        onClick?.(e)
    };

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClickHandler}
            className={`btn ${colorVariants[color]} ${size ? sizes[size] : ''} ${rounded ? 'rounded-md' : ''} ${className ? className : ''}`}
            {...props}
        >
            {iconDirection === "right" && icon}
            {children}
            {iconDirection === "left" && icon}
        </button>
    )
}

export default Button