export const AddCourseStep1 = (props) =>{
    const handleNameOnChange=(ev)=>{
        props.setcoursename(ev.target.value)
    }
    const handleLevelOnChange=(ev)=>{
        props.setlevel(ev.target.value)
    }
    const handleDescriptionOnChange=(ev)=>{
        props.setdescription(ev.target.value)
    }
    const handleCategoryOnChange=(ev)=>{
        props.setcategory(ev.target.value)
    }
    return(
        <div>
            <div style={{ paddingLeft: '22%' }} class="col-lg-9 col-md-8 col-12">
                {/* <!-- Card --> */}
                <div class="card">
                    {/* <!-- Card header --> */}
                    <div class="card-header">
                        <h3 class="mb-0">Your New Course</h3>
                        <p class="mb-0">You can change it later.</p>
                    </div>
                    {/* <!-- Card body --> */}
                    <div class="card-body">
                        <div>
                            <h4 class="mb-0">Basic Information</h4>
                            <p class="mb-4">Edit what everyone see on their first looks.</p>
                            {/* <!-- Form --> */}
                            <form class="row gx-3 needs-validation" novalidate="">
                                {/* <!-- First name --> */}
                                <div class="mb-3 col-12 col-md-6" style={{ width: '100%' }}>
                                    <label class="form-label" for="fname">Course Name</label>
                                    <input value={props.coursename} onChange={handleNameOnChange} type="text" id="fname" class="form-control" placeholder="Course Name" required="" />
                                    <div class="invalid-feedback">Please enter course name.</div>
                                </div>
                                {/* <!-- Category --> */}
                                <div class="mb-3 col-12 col-md-6">
                                    <label class="form-label" for="fname">Category</label>
                                    <select onChange={handleCategoryOnChange} class="form-select" id="inputGroupSelect01">
                                        <option selected={'Web programming'===props.defaultcat} value="Web programming">Web programming</option>
                                        <option selected={'Game development'===props.defaultcat} value="Game development">Game development</option>
                                        <option selected={'AI'===props.defaultcat} value="AI">AI</option>
                                        <option selected={'Database management'===props.defaultcat} value="Database management">Database management</option>
                                        <option selected={'Networking'===props.defaultcat} value="Networking">Networking</option>
                                    </select>
                                </div>
                                {/* <!-- Level --> */}
                                <div class="mb-3 col-12 col-md-6">
                                    <label class="form-label" for="editState">Level</label>
                                    <select onChange={handleLevelOnChange} class="form-select" id="editState" required="">
                                        <option selected={'Starter'===props.defaultlevel} value="Starter">Starter</option>
                                        <option selected={'Intermediate'===props.defaultlevel} value="Intermediate">Intermediate</option>
                                        <option selected={'Expert'===props.defaultlevel} value="Expert">Expert</option>
                                    </select>
                                    <div class="invalid-feedback">Please choose state.</div>
                                </div>
                                {/* <!-- Country --> */}
                                <div class="mb-3 col-12 col-md-6" style={{width:'100%'}}>
                                    <label class="form-label" for="editState">Short description</label>
                                    <div class="input-group">
                                        <textarea value={props.des} onChange={handleDescriptionOnChange} class="form-control" aria-label="With textarea"></textarea>
                                    </div>
                                </div>
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