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