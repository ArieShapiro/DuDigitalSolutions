import React, { PureComponent } from 'react';
import Task from '../Task/Task';

class Tasks extends PureComponent {
	render () {
		const { tasks, toggleTask } = this.props;

		return (
			<div className="tasks">
				{
					tasks.map((task) => {
						return (
							<div className="task-item" key={`task-${task.id}`}>
								<Task
									task={task}
									toggleTask={toggleTask}
								/>
							</div>
						);
					})
				}
			</div>
		);
	}
}

export default Tasks;
