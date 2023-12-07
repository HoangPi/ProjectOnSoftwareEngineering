import React,  {useState} from 'react'

const LessonEditor = () => {
    const [lesson, setLesson] = useState({ title: '', content: '' });
  
    const handleInputChange = (e) => {
      setLesson({
        ...lesson,
        [e.target.name]: e.target.value,
      });
    };
  
    const saveLesson = () => {
      // Send lesson data to API or perform necessary actions
    };
  
    return (
      <div>
        <h2>Lesson Editor</h2>
        <label>Title: </label>
        <input type="text" name="title" value={lesson.title} onChange={handleInputChange} />
        <label>Content: </label>
        <textarea name="content" value={lesson.content} onChange={handleInputChange}></textarea>
        <button onClick={saveLesson}>Save</button>
      </div>
    );
  };
  
  export default LessonEditor;
  