import React, { Component } from "react";
import TasksList from './TasksList';
import CreateTaskInput from './CreateTaskInput';

const baseUrl = 'https://6786b272f80b78923aa7e205.mockapi.io/api/v1/tasks';


class TodoList extends Component {

    componentDidMount() {
        this.fetchTasksList();
    }

    fetchTasksList = () => {
        fetch(baseUrl).then(res => {
            if (res.ok) {
                return res.json();
            }
        })
            .then(tasksList => {
                this.setState({
                    tasks: tasksList,
                });
            })
    }

    onCreate = text => {
        const newTask = {
            text,
            done: false,
        }
        console.log(newTask.text);
        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTask)
        }).then(response => {
            if (response.ok) {
                this.fetchTasksList();
            } else {
                throw new Error('Failed to create task');
            }
        });
    }

    handleTaskStatusChange = id => {
        const { done, text } = this.state.tasks.find(task => task.id === id);
        const updatedTask = {
            text,
            done: !done,
        }

        fetch(`${baseUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(updatedTask)
        }).then(response => {
            if (response.ok) {
                this.fetchTasksList();
            } else {
                throw new Error('Failed to create task');
            }
        })
    }


    handleTaskDelete = id => {
        fetch(`${baseUrl}/${id}`, {
            method: 'DELETE'
        }).then(response => {
            if (response.ok) {
                this.fetchTasksList();
            } else {
                throw new Error('Failed to delete task');
            }
        });
    };

    render() {
        console.log(this.state.tasks);
        return (
            <>
                <h1 className='title'>Todo list</h1>
                {/* <main className="todo-list">
                    <CreateTaskInput onCreate={this.onCreate} />
                    <TasksList
                        tasks={this.state.tasks}
                        handleTaskStatusChange={this.handleTaskStatusChange}
                        handleTaskDelete={this.handleTaskDelete}
                    />
                </main > */}
            </>
        )
    }
}


// const TodoList = () => {
//     return (
//         <>
//             <h1 className='title'>Todo list</h1>
//             <main className="todo-list">
//                 <TasksList />
//             </main >
//         </>
//     )
// }


export default TodoList;