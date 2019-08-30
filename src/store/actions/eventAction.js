export const CreateEvent = (event) => {
	return (dispatch, getState) => {
		dispatch({ type: 'create_Event', event });
	};
};
