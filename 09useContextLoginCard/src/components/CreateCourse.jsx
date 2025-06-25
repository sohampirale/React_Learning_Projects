import { useContext, useState } from "react";
import courseContext from "../context/courseContext.js"
import {  useNavigate } from "react-router-dom";

function CreateCourse(){
    const [courseName,setCoursename]=useState("")
    const [coursePrice,setCoursePrice] = useState("")
    const {course,setCourse} = useContext(courseContext)
    const navigate = useNavigate()
    function handleSave(){
        if(setCourse){
            const newCourse={
                courseName,
                coursePrice
            }
            setCourse(newCourse)
            console.log('Course created'+JSON.stringify(course));
        }
    }

    return (
    <>
        <input type="text" 
        placeholder="Enter course name" 
        value={courseName} 
        onChange={(e)=>setCoursename(e.target.value)}/>

        <input type="text" placeholder="Enter course price"
        value={coursePrice}
        onChange={(e)=>setCoursePrice(e.target.value)}/>

        <button onClick={handleSave}>Save course</button>
        <p>Course : {JSON.stringify(course)}</p>
        <button onClick={()=>{
            navigate("/view")
        }}>Go to CourseCard.jsx</button>
    </>)
}

export default CreateCourse;