import { useState } from "react";
import { SignUp } from "../api/generalAPI.js";
import {useNavigate} from "react-router-dom"
function convertToBase64(file){
    return new Promise((resolve,reject)=>{
        try{
            const fileReader = new FileReader()
            
            fileReader.readAsDataURL(file)
            fileReader.onload=() => resolve(fileReader.result)
            fileReader.onerror=(err) => reject(err)
        }
        
        catch(err){
            console.log(err)
        }
    })
}
export const Signup = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState(1);
    const [certifications, setCertifications] = useState([]);
    const [file, setFile] = useState('https://th.bing.com/th/id/R.8e2c571ff125b3531705198a15d3103c?rik=gzhbzBpXBa%2bxMA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-big-image-png-2240.png&ehk=VeWsrun%2fvDy5QDv2Z6Xm8XnIMXyeaz2fhR3AgxlvxAc%3d&risl=&pid=ImgRaw&r=0')

    const handleUploadFile = async (ev) => {
        const base64=await convertToBase64(ev.target.files[0])
        if(base64.slice(5,10)==='image') setFile(base64)
        else alert("File is not image")
        // console.log(base64)
    }
    const handleUsernameOnChange = (ev) => {
        setUsername(ev.target.value);
    }
    const handlePassword1OnChange = (ev) => {
        setPassword1(ev.target.value);
    }
    const handlePassword2OnChange = (ev) => {
        setPassword2(ev.target.value);
    }
    const handelEmailOnChange = (ev) => {
        setEmail(ev.target.value)
    }
    const handleNameOnChange = (ev) => {
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
    const handleSignUp = async (ev) => {
        if (password1 !== password2) {
            alert("Passwords Must Be The Same and Non-empty");
            return;
        }
        if (username === ''
            || password1 === ''
            || password2 === ''
            || email === ''
            || fullname === '') {
            alert("Please Fill All The Fields");
            return;
        }
        SignUp(username,password1,email,fullname,role,file,certifications)
            .then((data)=>{
                if(data.status===200){
                    alert("Account created")
                    navigate('/')
                }
                else if(data.status===400){
                    alert("Username exist, please use an another one")
                }
                else{
                    alert("Internal error, please try again sometime later")
                }
                // console.log(data.json())

            })
    }
    return (
        <div style={{ paddingLeft: '25%', paddingRight: '25%', paddingTop:'5%', paddingBottom:'10%' }}>
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
                <input type="text" class="form-control" id="floatingPassword3" placeholder="Your Name" onChange={handleNameOnChange} />
                <label for="floatingPassword">Your Name</label>
            </div>
            <div class="input-group mb-3">
                <input type="email" class="form-control" id="floatingInput4" placeholder="Email" onChange={handelEmailOnChange} />
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Send OTP</button>
            </div>
            <div class="input-group mb-3">
                <input onChange={handleUploadFile} type="file" class="form-control" id="inputGroupFile02" />
            </div>
            <div class="text-center">
                <img width='200px' height='200px' src={file} class="rounded" alt="User avatar" />
            </div>
            <h6>Tell us who you are</h6>
            <div class="form-check">
                <input class="form-check-input" type="radio" value={1} name="flexRadioDefault" id="flexRadioDefault1" checked={role === 1} onChange={roleOnClick} />
                <label class="form-check-label" for="flexRadioDefault1">
                    Student
                </label>
            </div>

            <div class="form-check">
                <input class="form-check-input" type="radio" value={2} name="flexRadioDefault" id="flexRadioDefault2" onChange={roleOnClick} />
                <label class="form-check-label" for="flexRadioDefault2">
                    Tutor
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
                            <input class="form-control" type="text" placeholder="Add new title" aria-label="Disabled input example" disabled ></input>
                        </div>
                    </>
                )
            }
            <button  style={{marginRight:'20px'}} type="button" class="btn btn-primary btn-lg" onClick={handleSignUp}>Submit</button>
            <a style={{marginRight:'20px'}} href="/">
                <button type="button" class="btn btn-primary btn-lg" >Return</button>
            </a>
            <a style={{marginRight:'20px'}} href="/signin">
                <button type="button" class="btn btn-primary btn-lg" >Sign in</button>
            </a>
        </div>
    )
}