import * as actionTypes from './constants';

const initialState = {};

export default (state={}, action) => {
	switch (action.type)
	{
	case actionTypes.GET_DATA:
		return {...state, 'employeeData': action.playload};
	case actionTypes.UPDATE_EMP:
		return {...state, 'employeeData': action.playload};
	case actionTypes.DELETE_EMP:
			return {...state, 'employeeData': action.playload};
	default:
	      return state;
	}
};