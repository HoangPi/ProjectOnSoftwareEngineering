import React, { useEffect, useState } from 'react'
import { Curriculum } from '../components/curriculum';
import { getChaptersAndContent, updateCourse } from '../api/tutorAPI';

const LessonEditor = () => {
  const [chapters, setChapters] = useState([])
  const [newChapter, setNewChapter] = useState('')
  const [alarm, setAlarm] = useState(false)

  const updateChapters = (contents, index) => {
    let i = Number(index)
    let temp = [...chapters]
    temp[i].contents = contents
    setChapters(temp)
    console.log(chapters)
  }
  const handleUpdateCourse = (ev) => {
    const params = new URLSearchParams(window.location.search)
    updateCourse(params.get('c'), chapters)
      .then((response) => {
        console.log(response)
        window.location.reload()
      })
  }
  const handleAddChapter = (ev) => {
    if (newChapter === '') {
      setAlarm(true)
    }
    else {
      setChapters([...chapters, { name: newChapter, contents: [] }])
      setNewChapter('')
      setAlarm(false)
    }

  }
  const handleChapterNameOnChange = (ev) => {
    setNewChapter(ev.target.value)
  }
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    getChaptersAndContent(params.get('c'))
      .then(response => {
        // console.log(response.chapters)
        let temp = []
        for (let c of response.chapters) {
          try {
            console.log(Object.keys(c.contents.content).length)
            temp = [...temp, {
              name: c.name,
              contents: []
            }]
          }
          catch (err) {
            let k = []
            for(let cc of c.contents){
              k = [...k,cc.content]
            }
            console.log(k)
            temp=[...temp,{
              name:c.name,
              contents:k,
            }]
          }
          setChapters(temp)
        }
      })
  }, [])

  return (
    <div>
      
      {chapters.map((value, key) => {

        return <Curriculum update={updateChapters} contents={value.contents} chapter={value} index={key}></Curriculum>
      })}
      {/* <!-- Button trigger modal --> */}
      <button onClick={() => setAlarm(false)} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add new chapter
        <span style={{ position: 'relative', top: '5px', left: '3px' }} class="material-symbols-outlined">
          add_circle
        </span>
      </button>
      <button onClick={handleUpdateCourse} type="button" class="btn btn-success">Update</button>



      {/* <!-- Modal --> */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">New chapter</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div style={{ marginBottom: '5px' }} class="shadow p-3 mb-5 bg-body-tertiary rounded">
                <div class="input-group mb-3">
                  <input value={newChapter} onChange={handleChapterNameOnChange} type="text" class="form-control" placeholder="Chapter's name" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
              </div>
              {alarm && <div class="alert alert-danger">
                <strong>Error!</strong> You must enter a name.
              </div>}
            </div>
            <div class="modal-footer">
              <button onClick={handleAddChapter} type="button" class="btn btn-primary" data-bs-dismiss={newChapter !== '' ? "modal" : ""}>Apply</button>
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonEditor;
