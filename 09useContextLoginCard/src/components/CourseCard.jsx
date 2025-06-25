import { useContext } from "react";
import courseContext from "../context/courseContext";
import { useNavigate } from "react-router-dom";

function CourseCard(){
    const {course} = useContext(courseContext);
    console.log('Course : '+JSON.stringify(course));
    const navigate = useNavigate();    
    return (
    <>
        <p>Course : {JSON.stringify(course)}</p>
        <button onClick={()=>{
            navigate("/create")
        }}>Go to CreateCourse.jsx</button>
        {course ? 
            (<>
                <textarea value={course.courseName??"No course name provided"}></textarea>
                <textarea value={course.coursePrice??"No course price provided"}></textarea>
            </>):
            (
                <p>Course not created yet</p>
            )
        }
    </>)
}


export default CourseCard;