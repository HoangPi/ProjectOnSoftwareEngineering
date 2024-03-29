export const TestPage = () => {
    return (
        <div>
            <main>
                <section class="py-4 py-lg-6 bg-primary">
                    <div class="container">
                        <div class="row">
                            <div class="offset-lg-1 col-lg-10 col-md-12 col-12">
                                <div class="d-lg-flex align-items-center justify-content-between">
                                    {/* <!-- Content --> */}
                                    <div class="mb-4 mb-lg-0">
                                        <h1 class="text-white mb-1">Add New Course</h1>
                                        <p class="mb-0 text-white lead">Just fill the form and create your courses.</p>
                                    </div>
                                    <div>
                                        <a href="instructor-courses.html" class="btn btn-white">Back to Course</a>
                                        <a href="instructor-courses.html" class="btn btn-dark">Save</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Page Content --> */}
                <section class="pb-8">
                    <div class="container">
                        <div id="courseForm" class="bs-stepper">
                            <div class="row">
                                <div class="offset-lg-1 col-lg-10 col-md-12 col-12">
                                    {/* <!-- Stepper Button --> */}
                                    <div class="bs-stepper-header shadow-sm" role="tablist">
                                        <div class="step active" data-target="#test-l-1">
                                            <button type="button" class="step-trigger" role="tab" id="courseFormtrigger1" aria-controls="test-l-1" aria-selected="true">
                                                <span class="bs-stepper-circle">1</span>
                                                <span class="bs-stepper-label">Basic Information</span>
                                            </button>
                                        </div>
                                        <div class="bs-stepper-line"></div>
                                        <div class="step" data-target="#test-l-2">
                                            <button type="button" class="step-trigger" role="tab" id="courseFormtrigger2" aria-controls="test-l-2" aria-selected="false">
                                                <span class="bs-stepper-circle">2</span>
                                                <span class="bs-stepper-label">Courses Media</span>
                                            </button>
                                        </div>
                                        <div class="bs-stepper-line"></div>
                                        <div class="step" data-target="#test-l-3">
                                            <button type="button" class="step-trigger" role="tab" id="courseFormtrigger3" aria-controls="test-l-3" aria-selected="false">
                                                <span class="bs-stepper-circle">3</span>
                                                <span class="bs-stepper-label">Curriculum</span>
                                            </button>
                                        </div>
                                        <div class="bs-stepper-line"></div>
                                        <div class="step" data-target="#test-l-4">
                                            <button type="button" class="step-trigger" role="tab" id="courseFormtrigger4" aria-controls="test-l-4" aria-selected="false">
                                                <span class="bs-stepper-circle">4</span>
                                                <span class="bs-stepper-label">Settings</span>
                                            </button>
                                        </div>
                                    </div>
                                    {/* <!-- Stepper content --> */}
                                    <div class="bs-stepper-content mt-5">
                                        <form onsubmit="return false">
                                            {/* <!-- Content one --> */}
                                            <div id="test-l-1" role="tabpanel" class="bs-stepper-pane fade active dstepper-block" aria-labelledby="courseFormtrigger1">
                                                {/* <!-- Card --> */}
                                                <div class="card mb-3">
                                                    <div class="card-header border-bottom px-4 py-3">
                                                        <h4 class="mb-0">Basic Information</h4>
                                                    </div>
                                                    {/* <!-- Card body --> */}
                                                    <div class="card-body">
                                                        <div class="mb-3">
                                                            <label for="courseTitle" class="form-label">Course Title</label>
                                                            <input id="courseTitle" class="form-control" type="text" placeholder="Course Title " />
                                                            <small>Write a 60 character course title.</small>
                                                        </div>
                                                        <div class="mb-3">
                                                            <label class="form-label">Courses category</label>
                                                            <select class="form-select">
                                                                <option value="">Select category</option>
                                                                <option value="React">React</option>
                                                                <option value="Javascript">Javascript</option>
                                                                <option value="HTML">HTML</option>
                                                                <option value="Vue">Vue js</option>
                                                                <option value="Gulp">Gulp js</option>
                                                            </select>
                                                            <small>Help people find your courses by choosing categories that represent your course.</small>
                                                        </div>
                                                        <div class="mb-3">
                                                            <label class="form-label">Courses level</label>
                                                            <select class="form-select">
                                                                <option value="">Select level</option>
                                                                <option value="intermediate">Intermediate</option>
                                                                <option value="Beignners">Beignners</option>
                                                                <option value="Advance">Advance</option>
                                                            </select>
                                                        </div>
                                                        <div class="mb-3">
                                                            <label class="form-label">Course Description</label>
                                                            <small>A brief summary of your courses.</small>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Button --> */}
                                                <button class="btn btn-primary" onclick="courseForm.next()">Next</button>
                                            </div>
                                            {/* <!-- Content two --> */}
                                            <div id="test-l-2" role="tabpanel" class="bs-stepper-pane fade dstepper-none" aria-labelledby="courseFormtrigger2">
                                                {/* <!-- Card --> */}
                                                <div class="card mb-3 border-0">
                                                    <div class="card-header border-bottom px-4 py-3">
                                                        <h4 class="mb-0">Courses Media</h4>
                                                    </div>
                                                    {/* <!-- Card body --> */}
                                                    <div class="card-body">
                                                        <div class="custom-file-container mb-4" data-upload-id="courseImage">
                                                            <div class="label-container">
                                                                <label>Upload</label>
                                                                <a class="clear-button" href="javascript:void(0)" title="Clear Image">
                                                                    ×
                                                                </a>
                                                            </div>
                                                            <label class="input-container">
                                                                <input accept="*" aria-label="Choose File" class="input-hidden" id="file-upload-with-preview-courseImage" type="file" />
                                                                <span class="input-visible">Choose file...<span class="browse-button">Browse</span></span>
                                                            </label>
                                                            <div class="image-preview" style={{ backgroundImage: "url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiQAAAD6CAMAAACmhqw0AAAA+VBMVEUAAAD29u3u7unt7ent7enu7uju7uihoqCio6Gio6KjpKOkpaSmpqSmp6WoqKaqq6mqq6qrq6qsrautrauur62wsa6xsa+xsrCys7GztLK0tbK1trS2t7S3t7W4uba5ure6u7e7vLm8vbu9vrvAwL3Awb3DxMHFxcPGxsPHx8TIycXLzMjLzMnMzMnNzsrPz8vP0MzQ0M3S0s/U1NDV1dLX19TY2NTY2NXZ2dba2tXb29bc3Nfc3Njc3dnd3dre3tre39vg4Nvh4dzi4t3i4t7j497k5N/k5ODl5eDl5eHl5uLm5uHn5+Lo6OPp6eTq6uXr6+bs7Oft7eh54KxIAAAAB3RSTlMAHKbl5uztvql9swAABA1JREFUeNrt3VlT01AYgOG0oEEE910URNzFBVFcqCgKirLU/P8fI3QYbEOSdtrMyJzzvHfMlFx833NBQuY0SRrN8UwqabzZSJLGaYNQVacaSdMUVF0zGTMEVTeWmIH6BYkgESSCRJAIEkEiSCRIBIkgESSCRJAIEkEiQSJIBIkgESSCRJAIEgkSQSJIBIkgESSCRJBIkAgSQSJIBIkgESSCRIJEkAgSQSJIBIkgkSARJIJEkAgSQSJIBIkEiSARJIJEkAgSQSJIJEgEiSARJIJEkAgSQSJBIkgEiSARJIJEkAgSCRJBIkgEiSARJIJEgkSQ5PvxbdS+tyEJuZVb0+noTV579geSQGs/SOvqxiYkYfYwra+rbUhC7NNEjUjSJ5CE2P06jaTnIAmxKwe7vb468t3N14WOki1IAuzMwWrf1HCh3Q6S95AEWGe1b0/WlSCBBBJIIAkdSXvt1aNXa21IICld7dJU5+epJUggKV7tzuzRA4/ZHUggKVrtfNdjsXlIIClY7XLPw9NlSCA5vtqLPUguQgLJsdX+zv0fZhsSSPKrXckhWSn5jV8zG5DEiuR1DsnrEiOX0vMbkESKZDWHZLXMSFqsBJIIkOz1vn40sVdqpFgJJDHc3dzsQXKzwkihEkhiQLI+2f3y+3qVkSIlkMSAJFvsQrJYbaRACSRRIMlenj0UcPZlPyPHlUASB5Jsc+7cwevMc5v9jRxTAkkkSPbb+riVZYMYySuBJB4kJRUYySmBJHYkhUZ6lUASOZISIz1KIIkbSamRbiWQxIZkvT2YkS4lkESGpDV9tz2YkX9KIIkLSWs6TY+U9DFypASSqJC0OicfHSrpa2T/k5BEh6R1eDpWR8kARtIZSGJD0jo6QW1fySBGIIkOSavrlL27PwcxAklsSFo9JzFOppBAkl9ta5jTOiGJCslQRiCJCslwRiCJCcmQRiCJCMmwRiCJB8mXoU+YhyQaJM9TSCCBBBJIIIEEEkgggQQSSCCJAsnyzLA9hiQWJCfnSpBAAgkkkATXxFCnPxfU7iB5B0mAXT5Y7Z3t0Y087SDZgCTA7tX6bZ5TGSQBtlwrkgVIgmy+RiMXdiEJsp3b9Rn5nEESaC/O1/P3yMJuBkm4bX94O2rvNiKbWXRIBIkgESSCRJAIEkEiQSJIBIkgESSCRJAIEgkSQSJIBIkgESSCRIJEkAgSQSJIBIkgESQSJIJEkAgSQSJIBIkgkSARJIJEkAgSQSJIBIkEiSARJIJEkAgSQSJIJEgEiSARJIJEkAgSCRJBIkgEiSARJIJEkEiQCBJBIkgEiSARJIJEgkSQCBJBIkgEiSARJBIkgkSQ6P8gGTMDVTeWNA1B1TWTxmlTUFWnGknSaI4bhMoabzaSv+4BHFVoHZzfAAAAAElFTkSuQmCC&quot;);" }}></div>
                                                        </div>
                                                        <div>
                                                            <input type="url" class="form-control" placeholder="Video URL " />
                                                        </div>
                                                        <small class="mt-3 d-block">Enter a valid video URL. Students who watch a well-made promo video are 5X more likely to enroll in your course.</small>

                                                        <div class="mt-3 d-flex justify-content-center align-items-center position-relative rounded py-16 border-white border rounded bg-cover" style={{ backgroundImage: "url(../assets/images/course/course-javascript.jpg)", height: "250px" }}>
                                                            <a href="https://www.youtube.com/watch?v=Nfzi7034Kbg" class="icon-shape rounded-circle btn-play icon-xl glightbox position-absolute top-50 start-50 translate-middle">
                                                                <i class="bi bi-play-fill fs-3"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Button --> */}
                                                <div class="d-flex justify-content-between">
                                                    <button class="btn btn-secondary" onclick="courseForm.previous()">Previous</button>
                                                    <button class="btn btn-primary" onclick="courseForm.next()">Next</button>
                                                </div>
                                            </div>
                                            {/* <!-- Content three --> */}
                                            <div id="test-l-3" role="tabpanel" class="bs-stepper-pane fade dstepper-none" aria-labelledby="courseFormtrigger3">
                                                {/* <!-- Card --> */}
                                                <div class="card mb-3 border-0">
                                                    <div class="card-header border-bottom px-4 py-3">
                                                        <h4 class="mb-0">Curriculum</h4>
                                                    </div>
                                                    {/* <!-- Card body --> */}
                                                    <div class="card-body">
                                                        <div class="bg-light rounded p-2 mb-4">
                                                            <h4>Introduction to JavaScript</h4>
                                                            {/* <!-- List group --> */}
                                                            <div class="list-group list-group-flush border-top-0" id="courseList">
                                                                <div id="courseOne">
                                                                    <div class="list-group-item rounded px-3 text-nowrap mb-1" id="introduction">
                                                                        <div class="d-flex align-items-center justify-content-between">
                                                                            <h5 class="mb-0 text-truncate">
                                                                                <a href="#" class="text-inherit">
                                                                                    <i class="fe fe-menu me-1 align-middle"></i>
                                                                                    <span class="align-middle">Introduction</span>
                                                                                </a>
                                                                            </h5>
                                                                            <div>
                                                                                <a href="#" class="me-1 text-inherit" data-bs-toggle="tooltip" data-placement="top" aria-label="Edit" data-bs-original-title="Edit">
                                                                                    <i class="fe fe-edit fs-6"></i>
                                                                                </a>
                                                                                <a href="#" class="me-1 text-inherit" data-bs-toggle="tooltip" data-placement="top" aria-label="Delete" data-bs-original-title="Delete">
                                                                                    <i class="fe fe-trash-2 fs-6"></i>
                                                                                </a>
                                                                                <a href="#" class="text-inherit" aria-expanded="true" data-bs-toggle="collapse" data-bs-target="#collapselistOne" aria-controls="collapselistOne">
                                                                                    <span class="chevron-arrow"><i class="fe fe-chevron-down"></i></span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div id="collapselistOne" class="collapse show" aria-labelledby="introduction" data-bs-parent="#courseList">
                                                                            <div class="p-md-4 p-2">
                                                                                <a href="#" class="btn btn-secondary btn-sm">Add Article +</a>
                                                                                <a href="#" class="btn btn-secondary btn-sm">Add Description +</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="list-group-item rounded px-3 text-nowrap mb-1" id="development">
                                                                        <div class="d-flex align-items-center justify-content-between">
                                                                            <h5 class="mb-0 text-truncate">
                                                                                <a href="#" class="text-inherit">
                                                                                    <i class="fe fe-menu me-1 align-middle"></i>
                                                                                    <span class="align-middle">Installing Development Software</span>
                                                                                </a>
                                                                            </h5>
                                                                            <div>
                                                                                <a href="#" class="me-1 text-inherit" data-bs-toggle="tooltip" data-placement="top" aria-label="Edit" data-bs-original-title="Edit">
                                                                                    <i class="fe fe-edit fs-6"></i>
                                                                                </a>
                                                                                <a href="#" class="me-1 text-inherit" data-bs-toggle="tooltip" data-placement="top" aria-label="Delete" data-bs-original-title="Delete">
                                                                                    <i class="fe fe-trash-2 fs-6"></i>
                                                                                </a>
                                                                                <a href="#" class="text-inherit" data-bs-toggle="collapse" data-bs-target="#collapselistTwo" aria-expanded="false" aria-controls="collapselistTwo">
                                                                                    <span class="chevron-arrow"><i class="fe fe-chevron-down"></i></span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div id="collapselistTwo" class="collapse" aria-labelledby="development" data-bs-parent="#courseList">
                                                                            <div class="p-md-4 p-2">
                                                                                <a href="#" class="btn btn-secondary btn-sm">Add Article +</a>
                                                                                <a href="#" class="btn btn-secondary btn-sm">Add Description +</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="list-group-item rounded px-3 text-nowrap mb-1" id="project">
                                                                        <div class="d-flex align-items-center justify-content-between">
                                                                            <h5 class="mb-0 text-truncate">
                                                                                <a href="#" class="text-inherit">
                                                                                    <i class="fe fe-menu me-1 align-middle"></i>
                                                                                    <span class="align-middle">Hello World Project from GitHub</span>
                                                                                </a>
                                                                            </h5>
                                                                            <div>
                                                                                <a href="#" class="me-1 text-inherit" data-bs-toggle="tooltip" data-placement="top" aria-label="Edit" data-bs-original-title="Edit">
                                                                                    <i class="fe fe-edit fs-6"></i>
                                                                                </a>
                                                                                <a href="#" class="me-1 text-inherit" data-bs-toggle="tooltip" data-placement="top" aria-label="Delete" data-bs-original-title="Delete">
                                                                                    <i class="fe fe-trash-2 fs-6"></i>
                                                                                </a>
                                                                                <a href="#" class="text-inherit" data-bs-toggle="collapse" data-bs-target="#collapselistThree" aria-expanded="false" aria-controls="collapselistThree">
                                                                                    <span class="chevron-arrow"><i class="fe fe-chevron-down"></i></span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div id="collapselistThree" class="collapse" aria-labelledby="project" data-bs-parent="#courseList">
                                                                            <div class="p-md-4 p-2">
                                                                                <a href="#" class="btn btn-secondary btn-sm">Add Article +</a>
                                                                                <a href="#" class="btn btn-secondary btn-sm">Add Description +</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="list-group-item rounded px-3 text-nowrap mb-1" id="sample">
                                                                        <div class="d-flex align-items-center justify-content-between">
                                                                            <h5 class="mb-0 text-truncate">
                                                                                <a href="#" class="text-inherit">
                                                                                    <i class="fe fe-menu me-1 align-middle"></i>
                                                                                    <span class="align-middle">Our Sample Website</span>
                                                                                </a>
                                                                            </h5>
                                                                            <div>
                                                                                <a href="#" class="me-1 text-inherit" data-bs-toggle="tooltip" data-placement="top" aria-label="Edit" data-bs-original-title="Edit">
                                                                                    <i class="fe fe-edit fs-6"></i>
                                                                                </a>
                                                                                <a href="#" class="me-1 text-inherit" data-bs-toggle="tooltip" data-placement="top" aria-label="Delete" data-bs-original-title="Delete">
                                                                                    <i class="fe fe-trash-2 fs-6"></i>
                                                                                </a>
                                                                                <a href="#" class="text-inherit" data-bs-toggle="collapse" data-bs-target="#collapselistFour" aria-expanded="false" aria-controls="collapselistFour">
                                                                                    <span class="chevron-arrow"><i class="fe fe-chevron-down"></i></span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div id="collapselistFour" class="collapse" aria-labelledby="sample" data-bs-parent="#courseList">
                                                                            <div class="p-md-4 p-2">
                                                                                <a href="#" class="btn btn-secondary btn-sm">Add Article +</a>
                                                                                <a href="#" class="btn btn-secondary btn-sm">Add Description +</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <a href="#" class="btn btn-outline-primary btn-sm mt-3" data-bs-toggle="modal" data-bs-target="#addLectureModal">Add Lecture +</a>
                                                        </div>
                                                        <div class="bg-light rounded p-2 mb-4">
                                                            <h4>JavaScript Beginnings</h4>

                                                            {/* <!-- List group --> */}
                                                            <div class="list-group list-group-flush border-top-0" id="courseListSecond">
                                                                <div id="courseTwo">
                                                                    <div class="list-group-item rounded px-3 text-nowrap mb-1" id="introductionSecond">
                                                                        <div class="d-flex align-items-center justify-content-between">
                                                                            <h5 class="mb-0 text-truncate">
                                                                                <a href="#" class="text-inherit">
                                                                                    <i class="fe fe-menu me-1 align-middle"></i>
                                                                                    <span class="align-middle">Introduction</span>
                                                                                </a>
                                                                            </h5>
                                                                            <div>
                                                                                <a href="#" class="me-1 text-inherit" data-bs-toggle="tooltip" data-placement="top" aria-label="Edit" data-bs-original-title="Edit">
                                                                                    <i class="fe fe-edit fs-6"></i>
                                                                                </a>
                                                                                <a href="#" class="me-1 text-inherit" data-bs-toggle="tooltip" data-placement="top" aria-label="Delete" data-bs-original-title="Delete">
                                                                                    <i class="fe fe-trash-2 fs-6"></i>
                                                                                </a>
                                                                                <a href="#" class="text-inherit" data-bs-toggle="collapse" data-bs-target="#collapselistFive" aria-expanded="false" aria-controls="collapselistFive">
                                                                                    <span class="chevron-arrow"><i class="fe fe-chevron-down"></i></span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div id="collapselistFive" class="collapse" aria-labelledby="introductionSecond" data-bs-parent="#courseListSecond">
                                                                            <div class="p-md-4 p-2">
                                                                                <a href="#" class="btn btn-secondary btn-sm">Add Article +</a>
                                                                                <a href="#" class="btn btn-secondary btn-sm">Add Description +</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="list-group-item rounded px-3 text-nowrap mb-1" id="developmentSecond">
                                                                        <div class="d-flex align-items-center justify-content-between">
                                                                            <h5 class="mb-0 text-truncate">
                                                                                <a href="#" class="text-inherit">
                                                                                    <i class="fe fe-menu me-1 align-middle"></i>
                                                                                    <span class="align-middle">Installing Development Software</span>
                                                                                </a>
                                                                            </h5>
                                                                            <div>
                                                                                <a href="#" class="me-1 text-inherit" data-bs-toggle="tooltip" data-placement="top" aria-label="Edit" data-bs-original-title="Edit">
                                                                                    <i class="fe fe-edit fs-6"></i>
                                                                                </a>
                                                                                <a href="#" class="me-1 text-inherit" data-bs-toggle="tooltip" data-placement="top" aria-label="Delete" data-bs-original-title="Delete">
                                                                                    <i class="fe fe-trash-2 fs-6"></i>
                                                                                </a>
                                                                                <a href="#" class="text-inherit" data-bs-toggle="collapse" data-bs-target="#collapselistSix" aria-expanded="false" aria-controls="collapselistSix">
                                                                                    <span class="chevron-arrow"><i class="fe fe-chevron-down"></i></span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div id="collapselistSix" class="collapse" aria-labelledby="developmentSecond" data-bs-parent="#courseListSecond">
                                                                            <div class="p-md-4 p-2">
                                                                                <a href="#" class="btn btn-secondary btn-sm">Add Article +</a>
                                                                                <a href="#" class="btn btn-secondary btn-sm">Add Description +</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="list-group-item rounded px-3 text-nowrap mb-1" id="projectSecond">
                                                                        <div class="d-flex align-items-center justify-content-between">
                                                                            <h5 class="mb-0 text-truncate">
                                                                                <a href="#" class="text-inherit">
                                                                                    <i class="fe fe-menu me-1 align-middle"></i>
                                                                                    <span class="align-middle">Hello World Project from GitHub</span>
                                                                                </a>
                                                                            </h5>
                                                                            <div>
                                                                                <a href="#" class="me-1 text-inherit" data-bs-toggle="tooltip" data-placement="top" aria-label="Edit" data-bs-original-title="Edit">
                                                                                    <i class="fe fe-edit fs-6"></i>
                                                                                </a>
                                                                                <a href="#" class="me-1 text-inherit" data-bs-toggle="tooltip" data-placement="top" aria-label="Delete" data-bs-original-title="Delete">
                                                                                    <i class="fe fe-trash-2 fs-6"></i>
                                                                                </a>
                                                                                <a href="#" class="text-inherit" data-bs-toggle="collapse" data-bs-target="#collapselistSeven" aria-expanded="false" aria-controls="collapselistSeven">
                                                                                    <span class="chevron-arrow"><i class="fe fe-chevron-down"></i></span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div id="collapselistSeven" class="collapse" aria-labelledby="projectSecond" data-bs-parent="#courseListSecond">
                                                                            <div class="p-md-4 p-2">
                                                                                <a href="#" class="btn btn-secondary btn-sm">Add Article +</a>
                                                                                <a href="#" class="btn btn-secondary btn-sm">Add Description +</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="list-group-item rounded px-3 text-nowrap mb-1" id="sampleSecond">
                                                                        <div class="d-flex align-items-center justify-content-between">
                                                                            <h5 class="mb-0 text-truncate">
                                                                                <a href="#" class="text-inherit">
                                                                                    <i class="fe fe-menu me-1 align-middle"></i>
                                                                                    <span class="align-middle">Our Sample Website</span>
                                                                                </a>
                                                                            </h5>
                                                                            <div>
                                                                                <a href="#" class="me-1 text-inherit" data-bs-toggle="tooltip" data-placement="top" aria-label="Edit" data-bs-original-title="Edit">
                                                                                    <i class="fe fe-edit fs-6"></i>
                                                                                </a>
                                                                                <a href="#" class="me-1 text-inherit" data-bs-toggle="tooltip" data-placement="top" aria-label="Delete" data-bs-original-title="Delete">
                                                                                    <i class="fe fe-trash-2 fs-6"></i>
                                                                                </a>
                                                                                <a href="#" class="text-inherit" data-bs-toggle="collapse" data-bs-target="#collapselistEight" aria-expanded="false" aria-controls="collapselistEight">
                                                                                    <span class="chevron-arrow"><i class="fe fe-chevron-down"></i></span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div id="collapselistEight" class="collapse" aria-labelledby="sampleSecond" data-bs-parent="#courseListSecond">
                                                                            <div class="p-md-4 p-2">
                                                                                <a href="#" class="btn btn-secondary btn-sm">Add Article +</a>
                                                                                <a href="#" class="btn btn-secondary btn-sm">Add Description +</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <a href="#" class="btn btn-outline-primary btn-sm mt-3" data-bs-toggle="modal" data-bs-target="#addLectureModal">Add Lecture +</a>
                                                        </div>
                                                        <a href="#" class="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#addSectionModal">Add Section</a>
                                                    </div>
                                                </div>
                                                {/* <!-- Button --> */}
                                                <div class="d-flex justify-content-between">
                                                    <button class="btn btn-secondary" onclick="courseForm.previous()">Previous</button>
                                                    <button class="btn btn-primary" onclick="courseForm.next()">Next</button>
                                                </div>
                                            </div>
                                            {/* <!-- Content four --> */}
                                            <div id="test-l-4" role="tabpanel" class="bs-stepper-pane fade dstepper-none" aria-labelledby="courseFormtrigger4">
                                                {/* <!-- Card --> */}
                                                <div class="card mb-3 border-0">
                                                    <div class="card-header border-bottom px-4 py-3">
                                                        <h4 class="mb-0">Requirements</h4>
                                                    </div>
                                                    {/* <!-- Card body --> */}
                                                    <div class="card-body">
                                                        <tags class="tagify  w-100" tabindex="-1">
                                                            <tag title="jquery" contenteditable="false" spellcheck="false" tabindex="-1" class="tagify__tag tagify--noAnim" value="jquery"><x title="" class="tagify__tag__removeBtn" role="button" aria-label="remove tag"></x><div><span class="tagify__tag-text">jquery</span></div></tag><tag title="bootstrap" contenteditable="false" spellcheck="false" tabindex="-1" class="tagify__tag tagify--noAnim" value="bootstrap"><x title="" class="tagify__tag__removeBtn" role="button" aria-label="remove tag"></x><div><span class="tagify__tag-text">bootstrap</span></div></tag><span contenteditable="" tabindex="0" data-placeholder="​" aria-placeholder="" class="tagify__input" role="textbox" aria-autocomplete="both" aria-multiline="false"></span>

                                                        </tags><input name="tags" class="w-100" value="jquery, bootstrap" tabindex="-1" />
                                                    </div>
                                                </div>
                                                <div class="d-flex justify-content-between mb-8">
                                                    {/* <!-- Button --> */}
                                                    <button class="btn btn-secondary" onclick="courseForm.previous()">Previous</button>
                                                    <button type="submit" class="btn btn-danger">Submit For Review</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}