import { Content } from "./content"
import { useState } from "react"

//
export const Chapter = (props) => {
    const [content,setContent] = useState()
    return (
        <div style={{ width: '100%', justifySelffy: 'left' }} class="btn-group">
            <button style={{ textAlign: 'left' }} class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                Clickable outside
            </button>

            <ul class="dropdown-menu" style={{ paddingInline: '15%', width: '100%' }}>
                {[1, 2, 3].map(() => {
                    return <Content></Content>
                })}
                <li><button type="button" class="btn btn-outline-success">Add content
                    <span style={{ position: 'relative', top: '5px', left: '3px' }} class="material-symbols-outlined">
                        add_circle
                    </span>
                </button></li>
            </ul>
        </div>
    )
}