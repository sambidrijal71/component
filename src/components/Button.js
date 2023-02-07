import className from "classnames"
import { TiStarOutline } from 'react-icons/ti'
function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    rounded,
    outline,
    ...rest }) {

    const styles = className(rest.className, 'px-3 py-1.5 border border-2 m-4 text-white flex items-center', {
        'bg-blue-500 border-blue-700': primary,
        'bg-black border-black': secondary,
        'bg-green-500 border-green-700': success,
        'bg-yellow-500 border-yellow-700': warning,
        'bg-red-500 border-red-700': danger,
        'bg-white text-black': outline,
        'rounded-full': rounded,
        'text-blue-400': primary && outline,
        'text-green-400': success && outline,
        'text-yellow-400': warning && outline,
        'text-red-400': danger && outline
    })
    return (
        <div>
            <button className={styles} {...rest}><TiStarOutline className="mr-2" />{children}</button>
        </div>
    )
}
Button.propTypes = {
    checkVariation: ({
        primary,
        secondary,
        success,
        warning,
        danger }) => {
        let count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger);
        if (count > 1) {
            return new Error("Can only have one name")
        }
    }
}

export default Button