const mockTaskData = [];

mockTaskData.push({
	id: 1,
	done: false,
	title: 'Center the "brand-box" in our header',
	description: 'Please make sure the "brand-box" is perfectly centered vertically and horizontally even if we start changing the height of ".header".\nYou get free cookies if your solution doesn\'t depend on hardcoded px heights at all. ;)',
	reason: 'We do a lot of complex coding, but CSS is still the basis of every beautiful web application. ;)',
	estimatedTime: '2-3 Min',
});

mockTaskData.push({
	id: 2,
	done: false,
	title: 'Make the "delete" button work',
	description: 'At the bottom right of every task item you have a [delete] button, that does nothing right now.\nPlease go ahead and make it work by adding a redux action and manipulating the store to remove the corresponding task on click.',
	reason: 'We want to see working with Redux basics. Although we don\'t always use Redux, it\'s still one of the most important flux implementations to know.',
	estimatedTime: '5-8 Min',
});

mockTaskData.push({
	id: 3,
	done: false,
	title: 'Describe your setup',
	description: 'Now a theoretical question: We want to know how you would tackle a big project.\nImagine you have to build a SPA of a complex application like a social media platform containing multiple entities (users, profiles, posts, comments, messages, ...).\n\n* What react related packages and setup would you choose?     (store management, type checking, codestyle, testing, ...) \n*How would you improve our simple example to make it more readable/cleaner?\n\nPlease add your answers in the mockTaskData.js file under "answer1" and "answer2".',
	reason: 'This will give us an idea which packages and technologies you already worked with\nand also provide a good basis for our interview',
	estimatedTime: '3-10 Min',
	answer1: "", // TODO: put your answer to the stack question here
	answer2: "", // TODO: put answer to improvements here
});

mockTaskData.push({
	id: 4,
	done: false,
	title: 'Fix the testcases to make them all pass',
	description: 'At the moment, the unit tests will fail, because of an error we worked in there for you. Only small adjustments are needed to make all the tests in this application pass.\n\n(This task is already advanced. If you can solve it: AWESOME. If not: don\'t worry about it. We want you to grow and learn with us and that\'s a good topic to get started with. ;))',
	reason: 'Please fix our broken application and show us how awesome you are at working with tests. ;)',
	estimatedTime: '5-15 Min',
});

mockTaskData.push({
	id: 5,
	done: false,
	title: 'Send everything over',
	description: 'Please zip the project folder, containing the code you\'ve changed, and send it to jobs@du.digital',
	reason: 'Thank you for taking part in our little test. We will get back to you as soon as we looked it over',
	estimatedTime: '1 Min',
});

export default mockTaskData;
