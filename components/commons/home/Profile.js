import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from '../Styles';
const Profile = (props) => {
  return (  
  	<View style={styles.iconProfile}>
	 <Image source={props.img} style={styles.PictureProfile}/>
	</View>
    )
}

export default Profile;