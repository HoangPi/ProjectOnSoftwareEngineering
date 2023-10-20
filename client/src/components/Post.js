export const Post = (props) => {
    return (
        <div>
            <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Post: </label>
                <div class="col-sm-10">
                    <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={props.content} />
                </div>
            </div>
            <label for="inputPassword" class="col-sm-2 col-form-label">Comments:</label>
            {props.comment.map((comment) => {
                return (
                    <div class="col-sm-10">
                        <input type="text" readonly class="form-control-plaintext" id="staticEmail"  value={comment}/>
                    </div>
                )
            })}
            {/* <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword" />
                </div>
            </div> */}
        </div>
    )
}