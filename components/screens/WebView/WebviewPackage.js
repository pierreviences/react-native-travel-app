import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../../commons/Styles';
import { WebView } from 'react-native-webview';
class WebviewPackage extends Component{
		constructor(props){
		super(props);
	}
render(){
	const {web} = this.props.route.params;
	return (		
		<WebView
        source={{ uri: web }}     
      />
		)
	}
}
export default WebviewPackage;

