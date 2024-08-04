import './card.css'

function Card(props) {
  return(
        <div className="card" onClick={props.onClick}>
            <img src={props.image} alt="Nature"/>
            <h2>{props.text}</h2>
        </div>
  );
}
export default Card