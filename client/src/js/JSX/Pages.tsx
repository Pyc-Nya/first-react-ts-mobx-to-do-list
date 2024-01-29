import { observer } from "mobx-react"
import { ActiveStore } from "../../stores/ActiveStore"
import TaskContainer from "./TaskContainer"
import Editor from "./Editor";


function Pages() {

  return (
    <div className="container">
      {ActiveStore.active === 'tasks' && <TaskContainer />}
      {ActiveStore.active === 'editor' && <Editor />}
    </div>
  )
}

export default observer(Pages);