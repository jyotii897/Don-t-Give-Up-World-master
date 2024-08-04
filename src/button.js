import './button.css'

function Button(props) {

  return (
  <button className="button-design" onClick={props.onClick} >{props.text}</button>
  );
}
export default Button