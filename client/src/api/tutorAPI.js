export const addCourse = async (thumbnail,coursename,category,level,description, lessons) =>{
    try {
        const response = await fetch('/addcourse', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({thumbnail,coursename,category,level,description, lessons})
        });
        const data = await response.json()
        return data
      }
      catch (error) {
        return "Fail"
      }
}
export const getTutorCourses = async()=>{
  try {
    const response = await fetch('/gettutorcourse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    });
    const data = await response.json()
    return data
  }
  catch (error) {
    return "Fail"
  }
}
export const getChaptersAndContent = async(courseid)=>{
  try {
    const response = await fetch('/tutor/getcoursedetail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({courseid})
    });
    const data = await response.json()
    return data
  }
  catch (error) {
    return "Fail"
  }
}
export const updateCourse = async(courseid,chapters)=>{
  try {
    const response = await fetch('/tutor/updatecourse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({courseid,chapters})
    });
    const data = await response.json()
    return data
  }
  catch (error) {
    return "Fail"
  }
}