const API = 'https://api.themoviedb.org/3'
//uso de api con el fetch y las keys
export function get(path) {
	return fetch(API + path, {
		headers: {
			Authorization: process.env.REACT_APP_API_KEY,
			'Content-Type': 'application/json;charset=utf-8',
		},
	}).then((result) => result.json())
}
