import React,{Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import {styles} from '../commons/Styles';
import MyAccount from '../commons/account/MyAccount';

class About extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<ScrollView styles={styles.container} showsVerticalScrollIndicator={false}>
				<MyAccount navigation={this.props.navigation}/>
				
			</ScrollView>	
		)
	}
}



export default About;