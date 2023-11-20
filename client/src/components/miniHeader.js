export const MiniHeader = (props) => {
    return (
        <div class="row align-items-center">
            {/* <!-- User info --> */}
            <div class="col-xl-12 col-lg-12 col-md-12 col-12">
                {/* <!-- Bg --> */}
                <div class="rounded-top" style={{backgroundColor: '#ABABAB', backgroundSize: 'cover', height: '100px' }}></div>
                <div class="card px-4 pt-2 pb-4 shadow-sm rounded-top-0 rounded-bottom-0 rounded-bottom-md-2">
                    <div class="d-flex align-items-end justify-content-between">
                        <div class="d-flex align-items-center">
                            <div class="me-2 position-relative d-flex justify-content-end align-items-end mt-n5">
                                <img src={props.avatar} height='100px' width='100px' class="avatar-xl rounded-circle border border-4 border-white position-relative" alt="avatar" />
                            </div>
                            <div class="lh-1">
                                <h2 class="mb-0">{props.name}</h2>
                            </div>
                        </div>
                        <div>
                            <a href="/addcourse" class="btn btn-primary d-none d-md-block">Create New Course</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}