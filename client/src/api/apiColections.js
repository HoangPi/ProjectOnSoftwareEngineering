export const getAllPost=()=>{
    fetch('/getall', {
        method: 'POST'
      }).then(
        response => response.json()
      ).then(
        data => {
          return data.posts;
        }
      )
}
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
export const deletePost = async (event, id) =>{
    event.preventDefault();
    try {
        console.log("DELETE"+id)
        const response = await fetch('/delete', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({id})
        });
        const data = await response.json();
        return data.posts
      }
      catch (error) {
  
      }
}
export const addComment = async (event, id, comment) =>{
  event.preventDefault();
  try {
      console.log("COMENT"+id)
      const response = await fetch('/addcomment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id,comment})
      });
      const data = await response.json();
      return data.posts
    }
    catch (error) {

    }
}
export const SignupForUser = async(event,username, password, role, recoveremail, name) =>{
  event.preventDefault();
  try{
    // console.log("COMENT"+id)
    const response = await fetch('/newuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password, role, recoveremail, name})
    });
    const data = await response.json();
    alert(data.message)
  }
  catch(err){
    alert(err)
  }
}
export const SignupForLecturer = async(event,username, password, role, recoveremail, name, certifications) => {
  event.preventDefault();
  try{
    // console.log("COMENT"+id)
    const response = await fetch('/newlecturer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password, role, recoveremail, name, certifications})
    });
    const data = await response.json();
    alert(data.message)
  }
  catch(err){
    alert(err)
  }
}