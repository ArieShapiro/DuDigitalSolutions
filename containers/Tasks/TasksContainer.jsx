import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tasks from '../../components/Tasks/Tasks';
import { toggleTask } from '../../store';

class TasksContainer extends Component {
	render () {
		const { tasks, toggleTask } = this.props;

		return (
			<Tasks
				tasks={tasks}
				toggleTask={toggleTask}
			/>
		);
	}
}

function mapStateToProps (state) {
	const { tasks } = state;
	return { tasks };
}

function mapDispatchToProps (dispatch) {
	return {
		toggleTask: (taskId) => {
			dispatch(toggleTask(taskId));
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer);
