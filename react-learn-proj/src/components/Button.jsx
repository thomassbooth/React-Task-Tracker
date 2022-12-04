import PropTypes from 'prop-types'

const Button = ({onClick, text, color}) => {

    return (
        <button onClick = {onClick} 
        style = {{backgroundColor: color}} 
        className = "btn">
            {text}
        </button    >
    )
}

Button.defaultProps = {
    color: 'steelblue',
    onClick: () => {
        console.log("Clicked")
    }
}

Button.propTypes = {
    color: PropTypes.string,
    onClick: PropTypes.func,

}
export default Button