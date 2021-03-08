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
	case actionTypes.GET_TODO:
		return {...state, 'employeeToDoData': action.playload};
	case actionTypes.DELETE_TODO:
		return {...state, 'employeeToDoData': action.playload};
	case actionTypes.UPDATE_TODO:
		return {...state, 'employeeToDoData': action.playload};
	case actionTypes.GET_ALL_TODO:
		return {...state, 'employeeToDoData': action.playload};
	default:
	      return state;
	}
};