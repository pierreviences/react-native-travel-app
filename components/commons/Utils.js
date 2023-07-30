import AsyncStorage from '@react-native-community/async-storage';

export const BACKEND_INDUSTRI = 'https://api-industry.hotdeals.co.id/';
export const BACKEND_HOTDEAL = 'https://apis.hotdeals.co.id/v1/';

export const fetchAPI = (url, bodyValue, method, jwt, app_code) => {
	const Authorization = jwt ? 'Bearer ' + jwt : null
	const headers = {
		'Content-Type': 'application/json',
		'code': app_code,
		'currency': 'SGD',
		Authorization
	}
	const body = bodyValue ? bodyValue : null
	const params = {
		method: method,
		headers: headers,
		body
	}
	return fetch(url, params)
		.then((response) => {
			return response.json()
		})
}
