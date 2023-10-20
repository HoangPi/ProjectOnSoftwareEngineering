
export const InputPost = (props) =>{
  const handleOnChange = (ev) =>{
    // console.log(ev.target.value)
    props.updatePost(ev.target.value)
  }
  const handleOnClick = (event) => {
    props.sendCommand(event)
  }
  return(
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">What Is On Your Mind.</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your post" onChange={handleOnChange}/>
      <div id="emailHelp" class="form-text">Please Share With Us.</div>
    </div>
    <button type="submit" class="btn btn-primary" onClick={(event) => handleOnClick(event)}>Submit</button>
  </form>)
}