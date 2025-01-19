import React, { Component } from "react";
import { connect } from 'react-redux';
import TasksList from './TasksList';
import CreateTaskInput from './CreateTaskInput';
import {
    // getTasksList, 
    updateTask,
    deleteTask,
    createTask
} from '../tasksGateway';
import * as tasksAction from "../tasks/tasks.actions";
// import {getTaskList} from "../tasks/tasks.actions";
import PropTypes from 'prop-types';
import { tasksListSelector } from '../tasks/tasks.selectors';


const baseUrl = 'https://6786b272f80b78923aa7e205.mockapi.io/api/v1/tasks';


class TodoList extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         tasks: [],
    //     }
    // }

    // state = {
    //     tasks: []
    // }

    componentDidMount() {
        this.props.getTaskList();
        // this.fetchTasksList();
    }

    handleTaskCreate = text => {
        const newTask = {
            text,
            done: false,
            createDate: new Date().toISOString(),
        }
        // console.log(newTask.text);

        createTask(newTask)
            .then(this.fetchTasksList);
    }

    handleTaskStatusChange = id => {
        const { tasks } = this.state;
        const { done, text, createDate } = this.state.tasks.find(task => task.id === id);
        const updatedTask = {
            text,
            createDate,
            done: !done,
        }
        updateTask(id, updatedTask).then(this.fetchTasksList);
    }


    handleTaskDelete = id => {
        deleteTask(id).then(this.fetchTasksList)
            .then(response => {
                if (response.ok) {
                    this.fetchTasksList();
                } else {
                    throw new Error('Failed to delete task');
                }
            });
    };

    render() {
        // console.log(this.state.tasks);
        return (
            <>
                <h1 className='title'>Todo list</h1>
                <main className="todo-list">
                    <CreateTaskInput onCreate={this.handleTaskCreate} />
                    <TasksList
                        tasks={this.props.tasks}
                        // tasks={[]}
                        handleTaskStatusChange={this.handleTaskStatusChange}
                        handleTaskDelete={this.handleTaskDelete}
                    />
                </main >
            </>
        )
    }
}

TodoList.propTypes = {
    getTaskList: PropTypes.func.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.shape()),
}

const mapDispatch = {
    getTaskList: tasksAction.getTaskList,
}

const mapState = state => {
    return {
        tasks: tasksListSelector(state),
    }
}

export default connect(mapState, mapDispatch)(TodoList);