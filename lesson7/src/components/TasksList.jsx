import React, { Component } from "react";
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';

// { text: 'Buy milk', done: false, id: 1 },
// { text: 'Pick up Tom from airport', done: false, id: 2 },
// { text: 'Visit party', done: false, id: 3 },
// { text: 'Visit doctor', done: true, id: 4 },
// { text: 'Buy meat', done: true, id: 5 },


// const baseUrl = 'https://6786b272f80b78923aa7e205.mockapi.io/api/v1/tasks';

const TasksList = ({ tasks, handleTaskStatusChange, handleTaskDelete }) => {
    const sortedList = tasks
        .slice()
        .sort((a, b) => a.done - b.done);
    return (
        <ul className="list">
            {sortedList.map(task => (
                <Task
                    key={task.id}
                    {...task}
                    onChange={handleTaskStatusChange}
                    onDelete={handleTaskDelete}
                />
            ))}
        </ul>
    )
}


// class TasksList extends Component {
//     state = {
//         tasks: []
//     }

//     componentDidMount() {
//         this.fetchTasksList();
//     }

//     fetchTasksList = () => {
//         fetch(baseUrl).then(res => {
//             if (res.ok) {
//                 return res.json();
//             }
//         })
//             .then(tasksList => {
//                 this.setState({
//                     tasks: tasksList,
//                 });
//             })
//     }

//     onCreate = text => {
//         const newTask = {
//             text,
//             done: false,
//         }
//         console.log(newTask.text);
//         fetch(baseUrl, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(newTask)
//         }).then(response => {
//             if (response.ok) {
//                 this.fetchTasksList();
//             } else {
//                 throw new Error('Failed to create task');
//             }
//         });
//     }

//     handleTaskStatusChange = id => {
//         const { done, text } = this.state.tasks.find(task => task.id === id);
//         const updatedTask = {
//             text,
//             done: !done,
//         }

//         fetch(`${baseUrl}/${id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json; charset=utf-8'
//             },
//             body: JSON.stringify(updatedTask)
//         }).then(response => {
//             if (response.ok) {
//                 this.fetchTasksList();
//             } else {
//                 throw new Error('Failed to create task');
//             }
//         })
//     }


//     handleTaskDelete = id => {
//         fetch(`${baseUrl}/${id}`, {
//             method: 'DELETE'
//         }).then(response => {
//             if (response.ok) {
//                 this.fetchTasksList();
//             } else {
//                 throw new Error('Failed to delete task');
//             }
//         });
//     };

//     render() {
//         const sortedList = this.state.tasks
//             .slice()
//             .sort((a, b) => a.done - b.done);
//         return (
//             <main className="todo-list">
//                 <CreateTaskInput onCreate={this.onCreate} />
//                 <ul className="list">
//                     {sortedList.map(task => (
//                         <Task
//                             key={task.id}
//                             {...task}
//                             onChange={this.handleTaskStatusChange}
//                             onDelete={this.handleTaskDelete}
//                         />
//                     ))}
//                 </ul>
//             </main>
//         )
//     }
// }

export default TasksList;