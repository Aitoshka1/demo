import Button from "./components/ui/Button";
import StudentList from'./components/StudentList';


function App() {
  const studentList = [
  {id: '1', name: 'Bermet'}
  ]

  return (
    <div>
      <StudentList student={studentList} />
      <Button>Delete todo</Button>
    </div>
  );
}











export default App;
