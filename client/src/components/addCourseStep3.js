import { useState } from "react"

export const AddCourseStep3 = (props) => {
    const [visible, setVisible] = useState(false)

    const closeWindow = () => {
        setVisible(false)
    }
    const onAddContent=(ev)=>{
        props.setcontent([...props.content,''])
        console.log(Object.keys(props.content).length)
    }
    const onRemoveContent=(ev)=>{
        const index = Number(ev.target.id)
        props.setcontent([...props.content.slice(0,index),...props.content.slice(index+1)])
    }
    const onContentChange=(ev)=>{
        let newArray = [...props.content]
        newArray[Number(ev.target.id)]=ev.target.value
        props.setcontent(newArray)
        console.log(Object.keys(props.content).length)
    }
    return (
        <div>
            <div style={{ paddingLeft: '22%' }} class="col-lg-9 col-md-8 col-12">
                {/* <!-- Card --> */}
                <div class="card">
                    {/* <!-- Card header --> */}
                    <div class="card-header">
                        <h3 class="mb-0">Your Course Curriculum</h3>
                        <p class="mb-0">Organize your course.</p>
                    </div>
                    {/* <!-- Card body --> */}
                    <div class="card-body">
                        <div>
                            <h4 class="mb-0">Curriculum</h4>
                            {/* <!-- Form --> */}
                            <div class="bg-light rounded p-2 mb-4">
                                <h4>Introduction to JavaScript</h4>
                                {/* <!-- List group --> */}
                                <div class="list-group list-group-flush border-top-0" id="courseList">

                                    <div id={"course"}>
                                        
                                        {props.content.map((value, key) => 
                                            <div class="input-group mb-3">
                                                <button id={key} onClick={onRemoveContent} class="btn btn-outline-secondary" type="button" >
                                                    <span id={key} class="material-symbols-outlined">
                                                        remove
                                                    </span>
                                                </button>
                                                <input id={key} onChange={onContentChange} value={value} type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <a class="btn btn-outline-primary btn-sm mt-3" onClick={onAddContent}>Add Lecture +</a>
                            </div>
                            <form class="row gx-3 needs-validation" novalidate="">
                                <div class="col-12">
                                    {/* <!-- Button --> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade show" id="addSectionModal" tabindex="-1" aria-labelledby="addSectionModalLabel" style={{ display: visible ? 'block' : 'none' }} aria-modal="true" role="dialog">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="addSectionModalLabel">Add New Section</h4>
                            <button onClick={closeWindow} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <input class="form-control mb-3" type="text" placeholder="Add new section " />
                            <button style={{ marginRight: '20px' }} class="btn btn-primary" type="Button">Add New Section</button>
                            <button onClick={closeWindow} class="btn btn-outline-secondary" data-bs-dismiss="modal" aria-label="Close">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}