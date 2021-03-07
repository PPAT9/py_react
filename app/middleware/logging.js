export const logger = store => next => action => {
	try {
		const nextAction = next(action);
		return nextAction;
	} catch(err) {
		throw err;
	}	
}