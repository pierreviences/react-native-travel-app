import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from '../Styles';
import {app_color} from '../../services/main/MainService' 
class SeeAll extends Component{
  constructor(props){
  	super(props)
  	   this.state = {
    	color: null
    }
    	app_color().then((response) => {
	  		if(response.secondary_color == null) {
	  		return this.setState({color: 'grey'})
	  		}else {
	 		return this.setState({color: response.secondary_color})
	 		}
	 	})
  }

  render(){ 
  	const {title, onPress, titles} = this.props
  	return(
  		 <View style={styles.SeeAllContain}>
             <Text style={[styles.textSeeAll, {color: '#1c1c1c'}]}>{title}</Text>
             <TouchableOpacity onPress={onPress}>
             <Text style={[styles.textSeeAll, {color: this.state.color}]}>{titles}</Text>
             </TouchableOpacity>
         </View>
    	)
	}
}

export default SeeAll;