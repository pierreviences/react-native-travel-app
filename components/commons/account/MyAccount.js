import React,{Component} from 'react';
import { StyleSheet, View,Image, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {styles} from '../Styles';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Header from './Header';
import Body from './Body';
import {data_industri} from '../../services/main/MainService'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default class MyAccount extends Component{
   constructor(props) {
  	super(props);
  	this.state = {
  		deskripsi : null,
  		logo : null,
  		uriAbout: null,
  		uriContact: null,
  		uriCarrer: null,
  		uriGallerry: null,
  		uriFacebook: null,
  		uriInstagram: null
  	}
  	this.fetchIndustri = this.fetchIndustri.bind(this);
  }

  componentDidMount(){
  	this.fetchIndustri(true);
  }

    fetchIndustri(loader){
    if(loader){
      this.setState({
        spinnerLoader:false
      })
    }
    const that = this
    data_industri().then((response) => {
      return that.setState({
      	deskripsi: response.appearances.about.replace(/<[^>]+>/g, ''), 
      	logo: response.appearances.logo,
      	uriAbout: response.appearances.links.about_us,
        uriContact: response.appearances.links.contact_us,
    	uriCarrer: response.appearances.links.careers,
    	uriGallerry: response.appearances.links.gallery,
    	uriFacebook: response.appearances.social_media.facebook,
   		uriInstagram: response.appearances.social_media.instagram})
    })
 
  }
  render(){
  	let Image_Http_URL ={ uri: this.state.logo};
  	return ( 
  		<>
  		    
  			<Header title="About"/>
			
			<View style={{	marginTop:-120, flex:1,padding:17,
		width:'100%'}}>
				<View style={[styles.body,{borderRadius:20, height: 'auto',backgroundColor: '#FBFFFF',shadowColor: "#000",elevation: 10}]}>
					<View>
					<Image source={Image_Http_URL} style={{width:85,height:85,position:'absolute',left:'79%',top:-35, resizeMode: 'stretch', }}/>
					</View>
					<View style={{paddingHorizontal:25, paddingTop:10,paddingBottom:15}}>
						<Text style={{color:'#575563',fontSize:20,fontWeight:'bold'}}>About this company</Text>
						<Text style={{paddingTop:20,textAlign:'justify',lineHeight:21,color:'#878789', fontSize:16}}>{this.state.deskripsi}</Text>
					</View>
				</View>
			</View>

		<View style={{marginTop:20,
		paddingHorizontal:17,
		paddingBottom:25}}>
		<View style={[styles.body,{height:'auto', borderRadius:10,shadowColor: "#000",elevation: 5,borderWidth:1, borderColor: '#C9C9C9'}]}>
			<Body title="About Us"  name="question" onPress={() => {this.props.navigation.navigate('WebviewAbout', {web: this.state.uriAbout})}}/>
			<Body title="Contact Us" name="phone" onPress={() => {this.props.navigation.navigate('WebviewAbout', {web: this.state.uriContact})}}/>
			<Body title="Carrers" name="street-view" onPress={() => {this.props.navigation.navigate('WebviewAbout', {web: this.state.uriCarrer})}}/>
			<Body title="Gallery" name="image" onPress={() => {this.props.navigation.navigate('WebviewAbout', {web: this.state.uriGallerry})}}/>
			<Body title="Facebook" name="facebook" onPress={() => {this.props.navigation.navigate('WebviewAbout', {web: this.state.uriFacebook})}}/>
			<Body title="Instagram" name="instagram" onPress={() => {this.props.navigation.navigate('WebviewAbout', {web: this.state.uriInstagram})}}/>
		</View>
		</View>
  		</>

  		)
	}
	 
}
