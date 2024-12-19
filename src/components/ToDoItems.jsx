import { useState } from "react";
import ActionButton from "./ActionButton";

function ToDOItems({ task, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [newCompleted, setNewCompleted] = useState(task.completed);

  const handleSave = () => {
    if (newTitle.trim()) {
      dispatch({
        type: "edit-task",
        payload: { id: task.id, newTitle, newCompleted },
      });
      setIsEditing(false);
    } else {
      alert("Title cannot be empty.");
    }
  };

  return (
    <div>
      <div style={{ width: "100%", textAlign: "center", marginTop: "10px" }}>
        {isEditing ? (
          <ActionButton
            type="edit-input"
            payload={{ value: newTitle }}
            dispatch={(payload) => setNewTitle(payload.value)}
          >
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </ActionButton>
        ) : (
          <b>Task: {task.title}</b>
        )}
      </div>
      <div style={{ width: "100%", textAlign: "center", marginBottom: "20px" }}>
        {isEditing ? (
          <label>
            <ActionButton
              type="toggle-completed"
              payload={{ checked: !newCompleted }}
              dispatch={(payload) => setNewCompleted(payload.checked)}
            >
              <input
                type="checkbox"
                checked={newCompleted}
                onChange={(e) => setNewCompleted(e.target.checked)}
              />
            </ActionButton>
            Completed
          </label>
        ) : (
          <b>Completed: {task.completed ? "Yes" : "No"}</b>
        )}
      </div>
      <div>
        {isEditing ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <ActionButton
            type={"edit-task"}
            payload={{ title: task.title }}
            dispatch={() => setIsEditing(true)} // Enter editing mode
          >
            Edit
          </ActionButton>
        )}
        <ActionButton
          type="remove-task"
          payload={{ title: task.title }}
          dispatch={dispatch}
          disabled={!task.completed}
        >
          Delete
        </ActionButton>
      </div>
    </div>
  );
}

export default ToDOItems;
