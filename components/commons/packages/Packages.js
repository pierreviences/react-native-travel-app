import React, {Component} from 'react'
import {ScrollView, StyleSheet, View,FlatList,ActivityIndicator, Text, TouchableOpacity, Image } from 'react-native'
import {styles} from '../Styles';
import PackageAll from './Package';
import FontAwesome from "react-native-vector-icons/FontAwesome";
export default class PackagesAll extends Component{
  constructor(props){
  	super(props)
  	this.state = {
  		packagesItem: null,
  		isLoading: false
  	}
  }  
  componentDidMount() {
  	this.setState({
  		packagesItem: this.props.packageItem
  	})
  }
  renderFooter = () => {
    return(
      this.state.isLoading ? 
      <View style={styles.loader}>
        <ActivityIndicator size="large"/>
      </View> : null
    )
  }
	render(){	
		
		return(
		<>	


				<View style={styles.containPackage}>
  
					<FlatList
					data={this.state.packagesItem}
					renderItem={({item}) => (
						<PackageAll data={item} navigation={this.props.navigation}/>
					)}
					keyExtractor={(item, index) => index.toString()}
					ListFooterComponent={this.renderFooter.bind(this)}
					/>
				</View>
			</>
		)
	}
}
