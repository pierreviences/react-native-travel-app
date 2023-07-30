import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../../commons/Styles';
import { WebView } from 'react-native-webview';
class WebviewAbout extends Component{
		constructor(props){
		super(props);
	}
render(){
	const {web} = this.props.route.params;
	return (
	<View style={{flex:1}}>	
		<WebView
        source={{ uri: web }}     
  		/>  
      </View>
		)
	}
}
export default WebviewAbout;

	