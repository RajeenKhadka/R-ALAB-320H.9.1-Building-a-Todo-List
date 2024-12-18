import ActionButton from "./ActionButton";

function ToDOItems({ task, dispatch }) {
  return (
    <>
      <div style={{ width: "100%", textAlign: "center", marginTop: "10px" }}>
        <b>Task: {task.title}</b>
      </div>
      <div style={{ width: "100%", textAlign: "center", marginBottom: "20px" }}>
        <b>Completed: {task.completed ? "Yes" : "No"}</b>
      </div>
      <div>
        <ActionButton
          type={"edit-task"}
          payload={{ title: task.title }}
          dispatch={dispatch}
        >
          Edit
        </ActionButton>

        <ActionButton
          type="remove-task"
          payload={{ title: task.title }}
          dispatch={dispatch}
        >
          Delete
        </ActionButton>
      </div>
    </>
  );
}

export default ToDOItems;
