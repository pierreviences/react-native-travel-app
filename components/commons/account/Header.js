import React,{Component} from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from '../Styles';
import LinearGradient from 'react-native-linear-gradient';
import {app_color} from '../../services/main/MainService'
class Header extends Component{
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
  	 const {title,img} = this.props
	return (  
				<View style={[styles.headerProfile, {flexDirection:'row',justifyContent:'space-between', backgroundColor: this.state.color}]}>
					<Text style={styles.headerTitleProfile}>{title}</Text>
				</View>

    	)
	}
}
export default Header;

