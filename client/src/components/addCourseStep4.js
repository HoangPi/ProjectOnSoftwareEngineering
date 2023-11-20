export const AddCourseStep4 = (props) => {
    const SubmitCourse =(ev)=>{
        props.submit()
    }
    return (
        <div>
            <div style={{ paddingLeft: '22%' }} class="col-lg-9 col-md-8 col-12">
                {/* <!-- Card --> */}
                <div class="card">
                    {/* <!-- Card header --> */}
                    <div class="card-header">
                        <h3 class="mb-0">Review Your Course</h3>
                        <p class="mb-0">Review your creation.</p>
                    </div>
                    {/* <!-- Card body --> */}
                    <div class="card-body">

                        <div>
                            <div class="card" style={{ width: '100%' }}>
                                <img src={props.file} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{props.coursename}</h5>
                                    <div class="list-inline-item">
                                        <svg class="me-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                                            <rect x="7" y="5" width="2" height="9" rx="1" fill={props.level==='Intermediate' || props.level==='Expert' ? "#754FFE" : "#DBD8E9"}></rect>
                                            <rect x="11" y="2" width="2" height="12" rx="1" fill={props.level==='Expert' ? "#754FFE" : "#DBD8E9"}></rect>
                                        </svg>
                                        {props.level} {props.cat} course
                                    </div>
                                    <div style={{backgroundColor:"#787A7C", width:'100%', height:'1px'}}></div>
                                    <p class="card-text">{props.description}</p>
                                    <a onClick={SubmitCourse} class="btn btn-primary">Submit</a>
                                </div>

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
        </div>
    )
}