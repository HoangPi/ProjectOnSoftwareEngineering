export const Signup = () => {
    return (
        <div>
            <div class="form-floating mb-3">
                <input type='text' class="form-control" id="floatingInput" placeholder="username" />
                <label for="floatingInput">Username</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Retype Password" />
                <label for="floatingPassword">Retype Password</label>
            </div>
            <div class="input-group mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="Email" />
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Send OTP</button>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  />
                <label class="form-check-label" for="flexRadioDefault1">
                    Looking For Courses
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"checked />
                <label class="form-check-label" for="flexRadioDefault2">
                    Want To Share Courses
                </label>
            </div>
        </div>
    )
}