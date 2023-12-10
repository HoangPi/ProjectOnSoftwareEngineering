import { useState } from "react"

export const Content = (props) => {
    // const [content,setContent] = useState(props.content)
    // console.log(props.content)
    const handleContentOnChange=(ev)=>{
        props.update(ev.target.value,ev.target.getAttribute('index'))
    }
    const handleRemoveContent=(ev)=>{
        props.remove(ev.target.getAttribute('index'))
    }
    const handleMoveUp =(ev)=>{
        props.moveup(ev.target.getAttribute('index'))
    }
    const handleMoveDown =(ev)=>{
        props.movedown(ev.target.getAttribute('index'))
    }
    return (
        <li style={{ paddingBottom: "10px" }}>
            <div class="input-group">
                <input index={props.index} value={props.content} onChange={handleContentOnChange} type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
                <span class="input-group-text">
                    <a onClick={handleRemoveContent} href="#">
                        <span index={props.index} class="material-symbols-outlined">
                            delete
                        </span>
                    </a>
                </span>
                <span class="input-group-text">
                    <a onClick={()=>{}} href="#">
                        <span index={props.index} class="material-symbols-outlined">
                            upload_file
                        </span>
                    </a>
                </span>
                <span class="input-group-text">
                    <div style={{ height: '35px', margin: '0' }} class="btn-group-vertical" role="group" aria-label="Vertical button group">
                        <a onClick={handleMoveUp} style={{ paddingTop: '8px' }} href="#">
                            <span index={props.index} class="material-symbols-outlined">
                                expand_less
                            </span>
                        </a>
                        <a onClick={handleMoveDown} href="#">
                            <span index={props.index} class="material-symbols-outlined">
                                expand_more
                            </span>
                        </a>
                    </div>
                </span>
            </div>
        </li>
    )
}