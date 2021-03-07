import { combineReducers } from 'redux';
import * as employees from './../components/employees';




const rootReducer = combineReducers(
	{[employees.constants.name]: employees.reducer}
);

export default rootReducer