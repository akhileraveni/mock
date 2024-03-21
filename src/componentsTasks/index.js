import './index.css'

const Tasks = props => {
  const {taskDetails} = props
  const {taskName, taskCategory} = taskDetails

  return (
    <li className="list">
      <p className="tag">{taskName}</p>
      <p className="cat">{taskCategory}</p>
    </li>
  )
}

export default Tasks
