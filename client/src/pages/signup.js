import { useState } from "react";
import * as api from "../api/apiColections.js"
export const Signup = () => {
    const [username, setUsername] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState(1);
    const [certifications, setCertifications] = useState([]);


    const handleUsernameOnChange = (ev) => {
        setUsername(ev.target.value);
    }
    const handlePassword1OnChange = (ev) => {
        setPassword1(ev.target.value);
    }
    const handlePassword2OnChange = (ev) => {
        setPassword2(ev.target.value);
    }
    const handelEmailOnChange = (ev) =>{
        setEmail(ev.target.value)
    }
    const handleNameOnChange = (ev) =>{
        setFullname(ev.target.value)
    }
    const roleOnClick = (ev) => {
        // console.log(ev.target.value);
        setRole(Number(ev.target.value));
    }
    const addCertification = () => {
        setCertifications([...certifications, ''])
        // console.log(Object.keys(certifications).length)
    }
    const updateCertifications = (ev) => {
        let newArray = [...certifications]
        newArray[ev.target.id] = ev.target.value
        setCertifications(newArray)
    }
    const removeCerification = (ev) => {
        // console.log(ev.target)
        const temp = Number(ev.target.id)
        // console.log(temp)

        setCertifications([...certifications.slice(0, temp), ...certifications.slice(temp + 1)])
    }
    const sendInfo = (ev)=>{
        if(password1!==password2){
            alert("Passwords Must Be The Same and Non-empty");
            return;
        }
        if(username===''
        || password1===''
        || password2===''
        || email === ''
        || fullname === ''){
            alert("Please Fill All The Fields");
            return;
        }
        role===1 && api.SignupForUser(ev,username,password1,role,email,fullname);
        role===2 && api.SignupForLecturer(ev,username,password1,role,email,fullname,certifications)
    }
    return (
        <div>
            <div class="form-floating mb-3">
                <input type='text' class="form-control" id="floatingInput0" placeholder="username" onChange={handleUsernameOnChange} />
                <label for="floatingInput">Username</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword1" placeholder="Password" onChange={handlePassword1OnChange} />
                <label for="floatingPassword">Password</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword2" placeholder="Retype Password" onChange={handlePassword2OnChange} />
                <label for="floatingPassword">Retype Password</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingPassword3" placeholder="Your Name" onChange={handleNameOnChange}/>
                <label for="floatingPassword">Your Name</label>
            </div>
            <div class="input-group mb-3">
                <input type="email" class="form-control" id="floatingInput4" placeholder="Email" onChange={handelEmailOnChange}/>
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Send OTP</button>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" value={1} name="flexRadioDefault" id="flexRadioDefault1" checked={role === 1} onChange={roleOnClick} />
                <label class="form-check-label" for="flexRadioDefault1">
                    Looking For Courses
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" value={2} name="flexRadioDefault" id="flexRadioDefault2" onChange={roleOnClick} />
                <label class="form-check-label" for="flexRadioDefault2">
                    Want To Share Courses
                </label>
            </div>
            {
                role === 2 && (
                    <>
                        {certifications.map((value, key) =>
                            <div class="input-group mb-3">
                                <button class="btn btn-outline-secondary" type="button" id={key} onClickCapture={removeCerification}>
                                    <span id={key} class="material-icons">
                                        remove
                                    </span>
                                </button>
                                <input value={value} id={key} onChange={updateCertifications} type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                            </div>
                        )}
                        <div class="input-group mb-3">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon1" onClick={addCertification}>
                                <span class="material-icons">
                                    add_circle_outline
                                </span>
                            </button>
                            <input class="form-control" type="text" placeholder="Add More" aria-label="Disabled input example" disabled ></input>
                        </div>
                    </>
                )
            }
            <button type="button" class="btn btn-primary btn-lg" onClick={sendInfo}>Submit</button>
        </div>
    )
}