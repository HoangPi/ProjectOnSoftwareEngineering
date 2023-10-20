export const User = (props) =>{
    return(
      <div>
        <h1>{props.ID}</h1>
        <h2>{props.name}</h2>
        <h3>{props.age}</h3>
        {props.age <= 15 ? <h3>This is a child</h3> : <h3>This is a boy</h3>}
      </div>
    )
  }