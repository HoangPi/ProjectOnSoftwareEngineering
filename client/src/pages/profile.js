import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { GetUserSession, UpdateProfile } from "../api/generalAPI"
import { NavigationBar } from "../components/NavBar"


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
export const Profile = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState()
    const [role, setRole] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [certifications, setCertifications] = useState([])
    const [name,setName]=useState('')
    const [file, setFile] = useState()

    const handleNameOnChange=(ev)=>{
        setName(ev.target.value)
    }
    //handle multiple button types
    const handleUploadFile = async (ev) => {
        const base64=await convertToBase64(ev.target.files[0])
        if(base64.slice(5,10)==='image') setFile(base64)
        else alert("File is not image")
        console.log(base64)
    }
    const handleButtonsOnClick = (ev) => {
        ev.preventDefault()
        if (ev.target.value === 'return') navigate('/')
        else if (ev.target.value === 'submit') {
            console.log("Update")
            UpdateProfile(name,certifications,role,file, user.accountid)
                .then((respone)=>{
                    window.location.reload()
                    console.log(respone)
                })
        }
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
    const addCertification = () => {
        setCertifications([...certifications, ''])
        // console.log(Object.keys(certifications).length)
    }
    useEffect(() => {
        GetUserSession()
            .then(respone => {
                // console.log(respone)
                if (respone.userinfo !== null && typeof (respone.userinfo) !== 'undefined') {
                    // console.log(respone.userinfo)
                    setUser(respone.userinfo)
                    setRole(respone.role)
                    setName(respone.userinfo.name)
                    setCertifications(respone.userinfo.titles)
                    setFile(respone.userinfo.avatar)
                    setIsLoading(false)
                }

            })
    }, [])
    if (isLoading) return <div class="d-flex align-items-center">
        <strong role="status">Loading...</strong>
        <div class="spinner-border ms-auto" aria-hidden="true"></div>
    </div>
    return (
        <div>
            <NavigationBar user={user} role={role}></NavigationBar>
            <div style={{ marginLeft: '13%', marginRight: '10%', paddingTop:'120px', marginBottom:'50px' }} class="col-lg-9 col-md-8 col-12">
                {/* <!-- Card --> */}
                <div class="card">
                    {/* <!-- Card header --> */}
                    <div class="card-header">
                        {/* Because I did not capitalize the first letter */}
                        <h3 class="mb-0">{role === 'student' ? "Student" : "Tutor"} Details</h3>
                        <p class="mb-0">You have full control to manage your own account setting.</p>
                    </div>
                    {/* <!-- Card body --> */}
                    <div class="card-body">
                        <div style={{ paddingBottom: '20px' }} class="d-lg-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center mb-4 mb-lg-0">
                                <img src={file} width="200px" height="200px" id="img-uploaded" class="avatar-xl rounded-circle" alt="avatar" />
                                <div class="ms-3">
                                    <h4 class="mb-0">Your avatar</h4>
                                </div>
                            </div>
                        </div>
                        {/* Upload Image */}
                        <input onChange={handleUploadFile} type="file" class="form-control" id="inputGroupFile02" />
                        <hr class="my-5" />
                        <div>
                            <h4 class="mb-0">Personal Details</h4>
                            <p class="mb-4">Edit your personal information and address.</p>
                            {/* <!-- Form --> */}
                            <form class="row gx-3 needs-validation" novalidate="">
                                {/* <!-- First name --> */}
                                <div class="mb-3 col-12 col-md-6">
                                    <label class="form-label" for="fname">Your name</label>
                                    <input value={name} onChange={handleNameOnChange} type="text" id="fname" class="form-control" placeholder="Your name" required="" />
                                    <div class="invalid-feedback">Please enter your name.</div>
                                </div>
                                {/* <!-- Last name --> */}
                                <div class="mb-3 col-12 col-md-6">
                                    <label class="form-label" for="lname">Email</label>
                                    <input value={user.email} disabled={true} type="text" id="lname" class="form-control" placeholder="Last Name" required="" />
                                    <div class="invalid-feedback">Please enter last name.</div>
                                </div>
                                {/* <!-- Phone --> */}
                                <div class="mb-3 col-12 col-md-6">
                                    <label class="form-label" for="phone">Your titles</label>
                                </div>
                                {role === 'tutor' && (
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
                                <div class="col-12">
                                    {/* <!-- Button --> */}
                                    <button style={{ marginRight: '20px' }} onClick={handleButtonsOnClick} value='submit' class="btn btn-primary">Update Profile</button>
                                    <button onClick={handleButtonsOnClick} value='return' class="btn btn-primary">Return</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}