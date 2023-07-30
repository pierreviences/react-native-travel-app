import {fetchAPI,fetchAPIHotdeal, BACKEND_INDUSTRI, BACKEND_HOTDEAL} from '../../commons/Utils';
import AsyncStorage from '@react-native-community/async-storage';	

export const app_code = () => {
	const code_industri = 'T/01620'
	return code_industri
}


export const DataIndustri = () => {
	const url = BACKEND_INDUSTRI+'data'
	const body = null
	return fetchAPI(url, body, 'GET',false, app_code())
		.then((response) => {
			AsyncStorage.setItem('DATA', JSON.stringify(response));
			AsyncStorage.setItem('INDUSTRI', JSON.stringify(response));
			return response
		});
}

export const BannerPromo = () => {
	const url = BACKEND_INDUSTRI+'promos'
	const body = null
	return fetchAPI(url, body, 'GET',false, app_code())
		.then((response) => {
			return response
		});
}

export const PackageRecomend = () => {
	const url = BACKEND_HOTDEAL+'properties/featured'
	const body = null
	return fetchAPI(url, body, 'GET',false, app_code())
		.then((response) => {
			return response
		});	
}

export const ListPackage = () => {
	let url = BACKEND_HOTDEAL+'properties'
	const body = null
	return fetchAPI(url, body, 'GET',false, app_code())
		.then((response) => {
			return response
		});	
}

export const searchPackage = (name) => {
	let url = BACKEND_HOTDEAL+'properties?q='+name
	const body = null
	return fetchAPI(url, body, 'GET',false, app_code())
		.then((response) => {
			return response
		});	

}








const storage = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    return JSON.parse(value)
  } catch (e) {
    alert('Failed to load data.')
  }
}



export const app_color = async () => {
    const datas = await storage('DATA')
    if(datas.status == 200) {
   		 const primary = datas.data.appearances
   		 return primary
   	} else {
   		alert('Failed.')
   	}
} 

export const data_industri = async () => {
    const datas = await storage('INDUSTRI')
    if(datas.status == 200) {
   		 const data = datas.data
   		 return data
   	} else {
   		alert('Failed.')
   	}
} 

