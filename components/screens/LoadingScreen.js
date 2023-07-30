import React, {Component} from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {DataIndustri, app_color} from '../services/main/MainService';
import AsyncStorage from '@react-native-community/async-storage';
export default class LoadingScreen extends Component {
	constructor(props){
        super(props);
        this.state = {
        	color: null
        }
        this.checkLoader = this.checkLoader.bind(this);
    }
  componentDidMount(){
            this.checkLoader()    
    DataIndustri().then((response) => {
      console.log(response)
     })
    }
    checkLoader(){
    	setTimeout(() => {
                    return this.props.navigation.navigate('Home')
                }, 3000);
    }

 
	render(){
		return(
			<View style={styles.container}>
			<View style={{ alignItems: 'center',justifyContent:'flex-end', width: '100%', height: '100%'}}>
                <Animatable.Text animation="zoomInDown" style={{ fontWeight: 'bold',textTransform: 'capitalize',fontSize: 33, color: '#F89B3E'}}>
                    Welcome
                </Animatable.Text>
				<Image source={require('../../src/lods.gif')} style={{width:'25%',height:'20%'}}/>
			</View>
			 </View>
		)
	}
}
const styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor: 'white'
		
	}
})
