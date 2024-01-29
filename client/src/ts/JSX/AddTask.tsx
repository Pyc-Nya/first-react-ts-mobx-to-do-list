import { ActiveStore } from "../../stores/ActiveStore";
import { observer } from "mobx-react";
import { EditorStore } from "../../stores/EditorStore";

function AddTask() {

  return (
    <div className="new-task" onClick={() => {
      ActiveStore.editor()
      EditorStore.newTask();
    }} >
      <div className="new-task__button">+</div>
    </div>
  )
}

export default observer(AddTask);
