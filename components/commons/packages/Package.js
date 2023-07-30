import React,{Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from '../Styles';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {app_color} from '../../services/main/MainService'
class PackageAll extends Component{
  constructor(props){
  	super(props);
  	this.state = {
  		color: null
  	}
  }
  componentDidMount(){
  	app_color().then((response) => {
      if(response.secondary_color == null) {
        return this.setState({color: '#F89D43'})
        }else {
      return this.setState({color: response.secondary_color})
      }
    })
  }
  render(){
  const {data} = this.props
	return (
		<TouchableOpacity onPress={() => {this.props.navigation.navigate('WebviewPackage', {
			web: data.uri
		})
	}}>
			<View style={[styles.bodyPackage, {flexDirection: 'row', marginVertical:10}]}>
					<View style={styles.containImagePackage}>	
						 <View style={styles.sizePackage}>
							<Image  source={{uri:data.images[0]}} style={styles.imagePackage}/>
						</View>
					</View>
					
					<View style={{padding:10,flex:1}}>
						<Text numberOfLines={2}>{data.name}</Text>
							<View style={{flexDirection: 'row',  marginTop:3}}>
								<FontAwesome   name="map-marker" color="grey" size={17} />
									<Text style={{marginLeft: 5, fontSize: 12, color: '#CDCDCD'}}>{data.location}</Text>
							</View>
							<View style={{ flex:1, justifyContent: 'flex-end'}}>
							  <View style={{flexDirection: 'row'}}>	
								<Text style={{color: this.state.color}}>{data.price}</Text>
							   </View>
							</View>
					</View>
			</View>
</TouchableOpacity>
	)
 }
}

export default PackageAll;