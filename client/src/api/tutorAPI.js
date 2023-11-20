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