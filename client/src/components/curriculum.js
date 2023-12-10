import { Chapter } from "./chapter"
import { useState, useEffect } from "react"
import { Content } from "./content"
export const Curriculum = (props) => {
    const [contents,setContents] = useState(props.chapter.contents)
    // console.log(contents)
    const handleDeleteContent=(index)=>{
        let i = Number(index)
        setContents([...contents.slice(0,i),...contents.slice(i+1)])
    }
    const handleUpdateContent=(newContent, index)=>{
        
        let i = Number(index)
        let temp = [...contents]
        temp[i]=newContent
        setContents(temp)
    }
    const handleMoveUp=(index)=>{
        if(index !== '0' && Object.keys(contents).length > 1){
            let i = Number(index)
            let temp = contents[i]
            let t = [...contents]
            t[i]=t[i-1]
            t[i-1]=temp
            setContents(t)
        }
    }
    const handleMoveDown=(index)=>{
        let i = Number(index)
        if(Object.keys(contents).length > 1 && i< Object.keys(contents).length-1){
            let temp = contents[i]
            let t = [...contents]
            t[i]=t[i+1]
            t[i+1]=temp
            setContents(t)
        }
    }
    const handleAddContent=()=>{
        setContents([...contents,"New content"])
    }
    
    useEffect(()=>{
        props.update(contents,props.index)
    },[contents])
    return (
        <div style={{ width: '100%', justifySelffy: 'left' }} class="btn-group">
            <button style={{ textAlign: 'left' }} class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                {props.chapter.name}
            </button>

            <ul class="dropdown-menu" style={{ paddingInline: '15%', width: '100%' }}>
                {/* Because map function can execute within an empty array */}
                {/* {console.log(contents)} */}
                {contents && contents.map((value,key) => {
                    return <Content 
                    content = {value}
                    remove = {handleDeleteContent}
                    update = {handleUpdateContent}
                    index = {key}
                    moveup = {handleMoveUp}
                    movedown = {handleMoveDown}
                    >
                    </Content>
                })}
                <li><button onClick={handleAddContent} type="button" class="btn btn-outline-success">Add content
                    <span style={{ position: 'relative', top: '5px', left: '3px' }} class="material-symbols-outlined">
                        add_circle
                    </span>
                </button></li>
            </ul>
        </div>
    )
}