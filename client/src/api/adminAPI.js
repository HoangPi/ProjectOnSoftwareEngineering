export const GetAccounts = async ()=>{
    try {
        const response = await fetch('/admin/getaccount', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ })
        });
        const data = await response.json();
        return data
      }
      catch (error) {
        return { message: 'Fail' };
      }
  }
  