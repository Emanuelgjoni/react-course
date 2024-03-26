import PropTypes from 'prop-types';

const Button = ({title , classes,color,onClick}) => {
    return <button onClick={onClick} className={classes} style={{backgroundColor: color}}>{title}</button>
}

Button.defaultProps={
    'color':'black'
}
Button.prototype={
    'title':PropTypes.string,
    'onClick':PropTypes.func
}
export default Button
