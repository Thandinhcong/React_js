import { useState } from "react"


//respon from api

const courses = [
  {
    id: 1,
    name: "HTML, CSS"
  },
  {
    id: 2,
    name: "JAVÁCRIPT"
  },
  {
    id: 3,
    name: "REACTJS"
  },
]

function App() {
  const [checked, setChecked] = useState(2);
  console.log(checked);
  const handleSubmit = () => {
    //call API
    console.log({ id: checked });

  }
  return (
    <div className="App" style={{ padding: 20 }}>
      {courses.map(course => (
        <div key={course.id}>
          <input type="radio"
            //so sánh
            checked={checked === course.id}
            onChange={() => setChecked(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Lấy thưởng</button>
    </div>
  );
}

export default App;
