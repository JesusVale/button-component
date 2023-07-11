
export default function Button({variant="default", startIcon, endIcon, size="md", color="default", disableShadow=false, children="Default", disabled=false}){

    let className = `button button--${variant}--${color} button--${size}`;

    if(!disableShadow){
        className += " button--shadow";
    }

    return (
        <button type="button" className={className} disabled={disabled}>
            {
                startIcon && <span className="material-symbols-outlined icon">{startIcon}</span>
            }
            {children}
            {
                endIcon && <span className="material-symbols-outlined icon">{endIcon}</span>
            }
        </button>
    )
}