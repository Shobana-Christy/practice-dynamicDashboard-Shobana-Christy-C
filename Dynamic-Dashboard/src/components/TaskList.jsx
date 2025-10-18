import React from "react";

const TaskList = ({ taskList }) => {

    return (
        <div>
            <ul>
                {taskList.map((task, index) => (
                    <li
                        key={index}
                        style={{ color: task.completed ? 'green' : 'black' }}>
                        {task.completed ? "\u2705" : "\u274C"} {task.taskName}
                    </li>

                ))}

                <p>
                    Completed: {taskList.filter(task => task.completed).length} |
                    Incompleted: {taskList.length - taskList.filter(task => task.completed).length}
                </p>

            </ul>
        </div>
    );
};

export default TaskList;