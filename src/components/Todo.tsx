import { Task } from "../interfaces";
import '../App.css'

interface Props {
    task: Task;
    completeTask(taskNameToDelete: string): void;
}

export function Todo({ task, completeTask }: Props) {
    return (
        <tr>
            <th>{task.taskName}</th>
            <th>{task.deadline}</th>
            <th> <button
                onClick={() => {
                    completeTask(task.taskName);
                }}
            >
                X
            </button>
            </th>

        </tr>
    );
};

