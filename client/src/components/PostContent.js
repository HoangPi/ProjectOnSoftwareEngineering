import { useState } from "react"

export const PostContent = (props) => {
    const handleOnClick = (event,command) => {
        if(command === "Delete") props.deleteCommand(event,props.id)
        else if(command == "Comment") props.addComment(event,props.id,comment)
      }
    const handleOnChange = (ev) => {
        console.log(ev.target.value)
        setComment(ev.target.value)
    }
    const commentColor =['#E5E4DA','#BFB0B3']
    const [comment,setComment] = useState('')
    return (
        <form style={{margin:50}} id={props.id}>
            <div style={{backgroundColor:props.color}}>
                <div  class="container-fluid py-5">
                    <h1 class="display-5 fw-bold">{props.content}</h1>
                    {props.comment.map((value,key) => {
                        var c = commentColor[key&1]
                        return <p style={{textAlign:"left",backgroundColor:c}} class="col-md-8 fs-4">{value}</p>
                    })}
                    <input style={{marginBottom:20}} placeholder="Your comment" type="text" class="form-control" onChange={handleOnChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <input style={{ marginRight: 20 }} onClick={(event)=>{handleOnClick(event,"Comment")}} class="btn btn-primary btn-lg" type="button" value="Add Comment" />
                    <input class="btn btn-primary btn-lg" onClick={(event)=>{handleOnClick(event,"Delete")}} type="button" value="Delete Post" />
                </div>
            </div>
        </form>

    )
} 
