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


export const GetLessons = async (chapterId)=>{
  try {
      const response = await fetch('/getcontent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ chapterId})
      });
      const data = await response.json();
      return data
    }
    catch (error) {
      return { message: 'Fail' };
    }
}

export const GetComments = async (chapterid)=>{
  try {
      const response = await fetch('/getcomment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ chapterid})
      });
      const data = await response.json();
      return data
    }
    catch (error) {
      return { message: 'Fail' };
    }
}

export const AddComment = async (content,userid,chapterid)=>{
  try {
      const response = await fetch('/getcomment/addcomment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content,userid,chapterid})
      });
      const data = await response.json();
      return data
    }
    catch (error) {
      return { message: 'Fail' };
    }
}
export const GetReply = async (commentid)=>{
  try {
      const response = await fetch('/getcomment/getreply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ commentid})
      });
      const data = await response.json();
      return data
    }
    catch (error) {
      return { message: 'Fail' };
    }
}
export const AddReply = async (content,userid,commentid)=>{
  try {
      const response = await fetch('/getcomment/addreply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content,userid,commentid})
      });
      const data = await response.json();
      return data
    }
    catch (error) {
      return { message: 'Fail' };
    }
}
export const EditReply = async (replyId,content)=>{
  try {
      const response = await fetch('/getcomment/editreply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ replyId,content})
      });
      const data = await response.json();
      return data
    }
    catch (error) {
      return { message: 'Fail' };
    }
}
export const DeleteReply = async (replyId)=>{
  try {
      const response = await fetch('/getcomment/deletereply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ replyId})
      });
      const data = await response.json();
      return data
    }
    catch (error) {
      return { message: 'Fail' };
    }
}
export const EditComment = async (commentId,content)=>{
  try {
      const response = await fetch('/getcomment/editcomment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ commentId,content})
      });
      const data = await response.json();
      return data
    }
    catch (error) {
      return { message: 'Fail' };
    }
}
export const DeleteComment = async (commentId)=>{
  try {
      const response = await fetch('/getcomment/deletecomment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ commentId})
      });
      const data = await response.json();
      return data
    }
    catch (error) {
      return { message: 'Fail' };
    }
}



export const GetChapters = async (courseId)=>{
  try {
      const response = await fetch('/getusercourse/getchapters', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ courseId})
      });
      const data = await response.json();
      return data
    }
    catch (error) {
      return { message: 'Fail' };
    }
}