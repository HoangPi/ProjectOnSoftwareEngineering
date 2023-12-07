export const sendPost = async (event,content)=>{
    event.preventDefault();
    try {
        const response = await fetch('/new', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ content })
        });
        const data = await response.json();
        return data.posts
      }
      catch (error) {
        // console.error('Error:', error);
      }
}
export const getUserCourses = async()=>{
  try {
    const response = await fetch('/getusercourse', {
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

export const RegisterCourse = async (userid,courseid)=>{
  try {
      const response = await fetch('/registercourse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userid,courseid})
      });
      const data = await response.json();
      return data
    }
    catch (error) {
      return { message: 'Fail' };
    }
}


export const GetLessons = async (lessonId)=>{
  try {
      const response = await fetch('/getlesson', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ lessonId})
      });
      const data = await response.json();
      return data
    }
    catch (error) {
      return { message: 'Fail' };
    }
}