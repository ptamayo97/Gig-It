import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

/**Call action creator that returns the inner function */
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	await dispatch(fetchPosts());

	// This method is correct in everyway just not the most concise
	// 'uniq' from lodash returns an array with userId's
	// const userIds = _.uniq(_.map(getState().posts, 'userId'));
	// userIds.forEach((id) => dispatch(fetchUser(id)));

	// This is the most concise way to Map over all the posts, Find all the unique ids, then run dispatch for each item in the created array
	/** Special function in lodash that allows us to chain on essentially a bunch of additional functions that are going to manipulate some collection of data ||Must end chain with a value() function to tell it to go ahead and execute all these steps|| Map over all the posts, Find all the unique ids, then run dispatch for each item in the created array
	 */
	_.chain(getState().posts).map('userId').uniq().forEach((id) => dispatch(fetchUser(id))).value();

	// console.log(userIds);

	// getState is a array contatin our state information
	// console.log(getState().posts);
};

//Correct syntax for a request
export const fetchPosts = () => async (dispatch) => {
	const response = await jsonPlaceholder.get('./posts');

	dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
	const response = await jsonPlaceholder.get(`./users/${id}`);

	dispatch({ type: 'FETCH_USER', payload: response.data });
};

// Additional notes

// // Second action creator for singular user
// export const fetchUser = (id) => async (dispatch) => {
// 	const response = await jsonPlaceholder.get(`./users/${id}`);

// 	dispatch({ type: 'FETCH_USER', payload: response.data });
// };

// Assignes a memoized version of the function to the fetch user and export it from this file , this will only allow the unique argument to take place one time , instead of many, after that one time we will go ahead and return what ever that previous value was

// 1st Solution

/**Correct easier to understand */
// export const fetchUser = (id) => (dispatch) => {
// 	_fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
// 	const response = await jsonPlaceholder.get(`./users/${id}`);

// 	dispatch({ type: 'FETCH_USER', payload: response.data });
// });

/**Concise 
 * function that returns a function */

// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
// 	const response = await jsonPlaceholder.get(`./users/${id}`);

// 	dispatch({ type: 'FETCH_USER', payload: response.data });
// });

/**Concise 
 * function that returns a function */
