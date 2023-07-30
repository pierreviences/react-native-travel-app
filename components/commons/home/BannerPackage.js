import React, {Component} from 'react';
import {View, Text, Image, FlatList, ScrollView, ActivityIndicator} from 'react-native';
import {styles} from '../Styles';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
class BannerPackage extends Component{
  constructor(props){
    super(props)
    this.state = {
      dataItem: null,
      isLoading: false
    }
  }
  componentDidMount() {
    this.setState({
      dataItem: this.props.BannerItem
    })
  }
  renderBanner = ({item}) => {
    return(
      
 <View style={{marginTop:23,paddingRight:20}}>
      <View style={{width: wp('91%'), height: 150 }}>
      <Image source={{uri: item.image}}  resizeMode="stretch"   style={{width:undefined, height: 150, borderRadius: 5}} />
      </View>
      </View>
  
    )
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
    let dataItem = null
  return (  
 
      <FlatList
        data={this.state.dataItem}
        renderItem={this.renderBanner}
        numColumns = {2}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={this.renderFooter.bind(this)}
      />
     
    )
   }
}

export default BannerPackage;