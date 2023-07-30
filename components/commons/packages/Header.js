import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../Styles';
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
  	 const {title} = this.props
	return (
    
				<View style={[styles.HeaderForm, {backgroundColor: this.state.color}]}>
					<Text style={styles.TitleHeaderForm}>{title}</Text>
        </View>
	
    	)
	}
}

export default Header;

