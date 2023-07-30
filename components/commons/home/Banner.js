import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import {styles} from '../Styles';

export default class Banner extends Component {

	render(){
		const {img} = this.props
		return(
			<View style={styles.banner}>
						<Image source={img} resizeMode="stretch"   style={styles.ImageBanner} />
			</View>
		)
	}
}