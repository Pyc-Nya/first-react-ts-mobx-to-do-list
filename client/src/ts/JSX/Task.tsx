import { EditorStore } from "../stores/EditorStore";
import { ITaskData, TaskStore } from "../stores/TaskStore";

interface ITaskProps {
  data: ITaskData
}

function Task({data}: ITaskProps) {

  return (
    <div className="task">
      <div className="task__title" onClick={() => {
        EditorStore.taskById(data);
      }}>{data.title}</div>
      <div className="task__delete-button" onClick={() => {
        console.log('i want to delete task with id:', data.id)
        TaskStore.removeTask(data.id);
      }}>x</div>
    </div>
  )
}

export default Task;
