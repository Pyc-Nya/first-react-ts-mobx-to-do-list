import { ActiveStore } from "../../stores/ActiveStore";
import { TaskStore } from "../../stores/TaskStore";
import { EditorStore } from "../../stores/EditorStore";
import { observer } from "mobx-react";

function Editor() {

  return (
    <div className="editor">
      <div className="editor__nav-bar">
        <div className="editor__back-button" onClick={ActiveStore.tasks}>&lt;</div>
        <input value={EditorStore.data.title} type="text" className="editor__title" onChange={EditorStore.updateTitle} />
        <div className="editor__date">Date: {EditorStore.data.date}</div>
      </div>
      <textarea value={EditorStore.data.description} className="editor__description" onChange={EditorStore.updateDescription} />
      <div className="editor__save-button" onClick={() => TaskStore.addTask(EditorStore.data)}>
        Save Changes
      </div>
    </div>
  )
}

export default observer(Editor);