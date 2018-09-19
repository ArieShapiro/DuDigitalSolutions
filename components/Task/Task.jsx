import React, { Component } from 'react';
import taskType from './task.type';
import styles from './Task.scss';

class Task extends Component {
	static propTypes = {
		task: taskType,
	};

	render () {
		const { task } = this.props;

		return (
			<div className={`${styles.taskItem} ${( task.done ) ? styles.taskItemDone : null}`}>
				<div className={styles.taskItemInner}>
					<div
						onClick={this.toggleTask}
					>
						<div className={styles.taskEstimatedTime}>{task.estimatedTime}</div>

						<h3>
				            <span className={styles.check}>
				              {task.id}.)
				            </span>
							&nbsp;&nbsp;
							<span className={styles.title}>{task.title}</span>
						</h3>
						<div className={styles.taskDescription}>{task.description}</div>

						<div className={styles.taskReason}>{task.reason}</div>
					</div>

					<button
						type="button"
						onClick={this.deleteTask}
						className={styles.deleteButton}
					>
						remove
					</button>
				</div>
			</div>
		);
	}

	/**
	 * Deletes the task
	 */
	deleteTask = () => {
		// TODO: implement this method to remove the task from redux store
		alert('TODO: Implement me');
	};

	/**
	 * Toggles the is done state of this task
	 */
	toggleTask = () => {
		this.props.toggleTask(this.props.task.id);
	};
}

export default Task;
