import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';

import Task from './Task';
import mockTaskData from '../Tasks/mockTaskData';

describe('task actions', () => {

	it('title is rendered correctly inside a h3 tag', () => {
		const exampleItem = mockTaskData[ 0 ];

		const renderer = shallow(<Task task={exampleItem}/>);
		expect(renderer.find('h2').text()).toEqual('1.)  Center the \"brand-box\" in our header');
	});

});