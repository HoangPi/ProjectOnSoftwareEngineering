export const CourseList = (props) => {
    return (
        <tbody>
            <tr>
                <td>
                    <div class="d-flex align-items-center">
                        <div>
                            <a href={'/lessonEditor?c=' + props.id}><img src={props.thumbnail} width='80px' height='60px' alt="course" class="rounded img-4by3-lg" /></a>
                        </div>
                        <div class="ms-3">
                            <h4 class="mb-1 h5">
                                <a href={'/lessonEditor?c=' + props.id} class="text-inherit">{props.coursename}</a>
                            </h4>
                            <ul class="list-inline fs-6 mb-0">
                                <li class="list-inline-item">
                                    <span class="align-text-bottom">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                                        </svg>
                                    </span>
                                    <span>Will change later</span>
                                </li>
                                <li class="list-inline-item">
                                    <svg class="me-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                                        <rect x="7" y="5" width="2" height="9" rx="1" fill={props.level === 'Intermediate' || props.level === 'Expert' ? "#754FFE" : "#DBD8E9"}></rect>
                                        <rect x="11" y="2" width="2" height="12" rx="1" fill={props.level === 'Expert' ? "#754FFE" : "#DBD8E9"}></rect>
                                    </svg>
                                    {props.level}
                                </li>
                            </ul>
                        </div>
                    </div>
                </td>
                <td>{props.studentsid.length}</td>
                <td>
                    <span class="lh-1">
                        <span class="text-warning">4.5</span>
                        <span class="mx-1 align-text-top">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                </path></svg>
                        </span>

                    </span>
                </td>
                <td>
                    <span class="badge bg-danger">Something</span>
                </td>
                <td>
                    <span class="badge bg-danger">Remove?</span>
                </td>
                <td>
                    <span class="dropdown dropstart">
                        <a class="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" id="courseDropdown5" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
                            <i class="fe fe-more-vertical"></i>
                        </a>
                        <span class="dropdown-menu" aria-labelledby="courseDropdown5">
                            <span class="dropdown-header">Setting</span>
                            <a class="dropdown-item" href="#">
                                <i class="fe fe-edit dropdown-item-icon"></i>
                                Edit
                            </a>
                            <a class="dropdown-item" href="#">
                                <i class="fe fe-trash dropdown-item-icon"></i>
                                Remove
                            </a>
                        </span>
                    </span>
                </td>
            </tr>
        </tbody>
    )
}