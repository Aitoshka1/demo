const StudentList = (props) => {
    const stident1 = props.students[0].name
    
    return (
        <ul>
            <li>{stident1}</li>
        </ul>
    )
}




export default StudentList