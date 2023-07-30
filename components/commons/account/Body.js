import React,{Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from '../Styles';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {app_color} from '../../services/main/MainService'
class Body extends Component{
	 constructor(props){
  	super(props)
    this.state = {
      color: null
    }
    app_color().then((response) => {
      if(response.secondary_color == null) {
        return this.setState({color: '#F89D43'})
        }else {
      return this.setState({color: response.secondary_color})
      }
    })
  }
render(){
	const {title, onPress,name, size} = this.props
	return(
		<TouchableOpacity onPress={onPress}>
			<View style={styles.bodyAccount}>
			<View style={{flexDirection:'row',}}>	
			<FontAwesome name={name} color={this.state.color} style={{width:26,textAlign:'center'}} size={23} />	
			<Text style={{fontSize:18, paddingLeft:16}}>{title}</Text>
			</View>
			<FontAwesome name="arrow-right" color="grey" size={23} />
			</View>		
		</TouchableOpacity>
	)
	}
}




export default Body;