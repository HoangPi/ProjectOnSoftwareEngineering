export const newBlog = (props) => {
    return (
        <form>
            <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example" />
            <button class="btn btn-primary" type="submit" onClick={props.dosmth}>Post</button>
        </form>
    )
}