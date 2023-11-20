import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
import { AddCourseStep1 } from "../components/addCourseStep1"
import { AddCourseStep2 } from "../components/addCourseStep2"
import { AddCourseStep3 } from "../components/addCourseStep3"
import { AddCourseStep4 } from "../components/addCourseStep4"
import { addCourse } from "../api/tutorAPI"
import { GetUserSession } from "../api/generalAPI"

export const AddCourse = (ev) => {
    const navigate = useNavigate()
    const [courseName, setCourseName] = useState('')
    const [Category, setCategory] = useState('Web programming')
    const [level, setLevel] = useState('starter')
    const [description, setDescription] = useState('')
    const [step, setStep] = useState(1)
    const [file, setFile] = useState('https://th.bing.com/th/id/OIP.AC9frN1qFnn-I2JCycN8fwHaEK?w=307&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7')
    const [contentList,setContentList] = useState([])

    const handleSubmit =(ev)=>{
        addCourse(file,courseName,Category,level,description,contentList)
            .then(response=>{
                if(response.message!=="Course added"){
                    alert(response.message)
                }
                else{
                    alert(response.message)
                }
            })
    }
    const stepOnChange = (ev) => {
        if(courseName!=='') setStep(step + Number(ev.target.value))
        else alert("Please fill the course name")
    }
    useEffect(()=>{
        GetUserSession()
            .then(response=>{
                if(response.message==='Session not found'){
                    navigate('/')
                }
            })
    },[])
    
    return (
        <div>
            {/* Nav bar later */}
            {step === 1
                ? <AddCourseStep1 des={description} coursename={courseName} defaultlevel={level} defaultcat={Category} setcoursename={setCourseName} setdescription={setDescription} setcategory={setCategory} setlevel={setLevel}></AddCourseStep1>
                : step === 2 
                    ? <AddCourseStep2 file={file} setfile={setFile} />
                    : step === 3 
                        ? <AddCourseStep3 content={contentList} setcontent={setContentList}/>
                        : <AddCourseStep4 submit={handleSubmit} coursename={courseName} description={description} cat={Category} level={level} file={file}/>}
            <div style={{ paddingLeft: '22%', paddingRight: '25%' }} class="d-flex justify-content-between">
                <button disabled={step === 1} value={-1} class="btn btn-secondary" onClick={stepOnChange}>Previous</button>
                <button disabled={step === 4} value={1} class="btn btn-primary" onClick={stepOnChange}>Next</button>
            </div>

            
        </div>
    )
}