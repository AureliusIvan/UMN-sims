function Btn(props) {
  return (
    <button onClick={props.function} id={props.id}>
      {props.content}
    </button>
  )
}

export default Btn;
