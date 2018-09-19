import React, { Component } from 'react';
import { node } from 'prop-types';
import styles from './layout.scss';
import TasksContainer from '../containers/Tasks/TasksContainer';

class App extends Component {
	render () {
		return (
			<div>
				<div className={styles.header}>
					<div className={styles.brandBox}>
						<img src="/static/logo.svg" alt="DU Logo"/>

						<div className={styles.brandBoxTitle}>
							<a href="mailto:jobs@du-agentur.at">
								Join us @ DU Digital Solutions
							</a>
						</div>
					</div>
				</div>
				<div className={styles.contentContainer}>
					<main className="content-area">
						<TasksContainer />
					</main>
				</div>
			</div>
		);
	}
}

export default App;
