import "whatwg-fetch";

import * as actionTypes from './constants';


export function fetchEmployee(){
	return function(dispatch, getState){
		return fetch("http://127.0.0.1:5000/api/v1/emp", {method: "GET", credentials: 'include'})
		.then((response) =>{
			if (!response.ok) {throw Error(response.statusText);}
			return response.json();
		}) 
		.then((data) =>{
			console.log('fetch', data);
			dispatch({type: actionTypes.GET_DATA, playload: data});
		})
		.catch((error) => {
			console.log('Error fetching and parsing json');
		})
	}
}

export function updateEmployee(id, request_body){
	return function(dispatch, getState){
		return fetch("http://127.0.0.1:5000/api/v1/emp/" + id, {method: "POST", credentials: 'include', body: JSON.stringify(request_body)})
		.then((response) =>{
			if (!response.ok) {throw Error(response.statusText);}
			return response.json();
		}) 
		.then((data) =>{
			console.log('Update', data);
			dispatch({type: actionTypes.UPDATE_EMP, playload: data});
		})
		.catch((error) => {
			console.log('Error Updating Emp');
		})
	}
}

export function deleteEmployee(id){
	return function(dispatch, getState){
		return fetch(
				"http://127.0.0.1:5000/api/v1/emp/" + id, 
				{method: "DELETE"}
		)
		.then((response) =>{
			if (!response.ok) {throw Error(response.statusText);}
			return response.json();
		}) 
		.then((data) =>{
			console.log('Delete', data);
			dispatch({type: actionTypes.DELETE_EMP, playload: data});
		})
		.catch((error) => {
			console.log('Error Deleting Emp');
		})
	}
}