import React from "react"

interface TaskItemInterface {
    id: number
    description: string
    completed: boolean
    deleteItem: (id: number) => void
    completeItem: (id: number) => void
    editItem: (id: number) => void
}

export function TaskItem({id, description, completed, deleteItem, completeItem, editItem}: TaskItemInterface) {

    const handleDelete = async (id) => {
        deleteItem(id);
    }
    const handleComplete = async (id) => {
        completeItem(id);
    }
    const handleEdit = async (id) => {
        editItem(id);
    }
    return (
    <div className="task-item">
            <p>
                <span className={completed ? "line-through" : ""}>{description}</span>
            </p>
            <div className="task-actions">
                <button onClick={() => handleComplete(id)} className="button">
                    Complete
                </button>
                <button onClick={() => handleDelete(id)} className="button">
                    Remove
                </button>
                <button onClick={() => handleEdit(id)} className="button">
                    Edit
                </button>

            </div>
    </div>
    )
}
