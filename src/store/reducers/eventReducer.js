const initState = {};

const eventReducer = (state = initState, action) => {
	switch (action.type) {
		case 'Create_Gig':
			console.log('created Event', action.event);
	}
	return state;
};

export default eventReducer;
