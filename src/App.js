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
  const [checked, setChecked] = useState([]);
  console.log(checked);
  const handleCheck = (id) => {
    //call API
    setChecked(priv => {
      const isChecked = checked.includes(id)
      if (isChecked) {
        // check
        return checked.filter(item => item !== id)
      } else {
        return [...priv, id]
      }
    })

  }
  const handleSubmit = () => {
    console.log({ id: checked });
  }
  return (
    <div className="App" style={{ padding: 20 }}>
      {courses.map(course => (
        <div key={course.id}>
          <input type="checkbox"
            //so sánh
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Lấy thưởng</button>
    </div>
  );
}

export default App;
