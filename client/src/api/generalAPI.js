export const SignUp = async (username,password,email,name,role,avatar, titles)=>{
    try {
        const response = await fetch('/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username,password,email,name,role,avatar,titles })
        });
        const data = response
        return data
      }
      catch (error) {
        return "Fail"
      }
}
export const GetUserSession = async ()=>{
  try {
      const response = await fetch('/getusersession', {
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
export const SignOut = async ()=>{
  try {
      const response = await fetch('/signout', {
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
export const SignIn = async (username,password)=>{
  try {
      const response = await fetch('/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username,password})
      });
      const data = await response.json()
      return data
    }
    catch (error) {
      return "Fail"
    }
}
export const UpdateProfile = async (name, titles, role, file, accountid)=>{
  try {
    const response = await fetch('/updateprofile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, titles, role, file, accountid})
    });
    const data = await response.json()
    return data
  }
  catch (error) {
    return "Fail"
  }
}