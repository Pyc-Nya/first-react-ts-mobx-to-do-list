import { observer } from "mobx-react";
import { TaskStore } from "../../stores/TaskStore";
import { ITaskData } from "../../stores/TaskStore";
import { SearchStore } from "../../stores/SerachStore";
import Task from "./Task";
import AddTask from "./AddTask";

function TaskContainer() {

  return (
    <>
    <div className="tasks-container">
      <div className="search-bar">
        <input type="text" className="search-bar__input" placeholder="Search..." value={SearchStore.input} onChange={SearchStore.updateInput}/> 
        <div className="search-bar__clear-button" onClick={SearchStore.clearInput}>x</div>
      </div>
      <div className="tasks">
        {
          TaskStore.tasks
          .filter((e: ITaskData) => {
            if (SearchStore.input !== '') {
              return e.title.toLowerCase().includes(SearchStore.input.toLowerCase())
            } else return true
          })
          .map((e: ITaskData) => <Task key={e.id} data={e} />)
        }
      </div>
      <AddTask />
    </div>
    </>
  )
}

export default observer(TaskContainer)

