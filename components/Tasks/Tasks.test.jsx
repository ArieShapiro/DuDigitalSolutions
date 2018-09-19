import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';

import Tasks from './Tasks';
import mockTaskData from './mockTaskData';

describe('task listing actions', () => {

	it('renders correctly', () => {
		const renderer = new ShallowRenderer();
		renderer.render(<Tasks tasks={mockTaskData}/>);

		const tree = renderer.getRenderOutput();
		expect(tree).toMatchSnapshot();
	});

	it('has the correct amount of task items', () => {
		const renderer = shallow(<Tasks tasks={mockTaskData}/>);
		expect(renderer.find('.task-item').length).toEqual(mockTaskData.length);
	});

});