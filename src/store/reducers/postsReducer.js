export default (state = [], action) => {
	//Way one :(If statement)

	// if (action.type === 'FETCH_POSTS') {
	// 	return action.payload;
	// }

	// return state;

	// Way Two: (Switch Statement)

	switch (action.type) {
		case 'FETCH_POSTS':
			return action.payload;

		default:
			return state;
	}
};
