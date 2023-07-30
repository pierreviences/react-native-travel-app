import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';
import {styles} from '../Styles';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
class PackageRecomen extends Component{
  constructor(props){
    super(props)
    this.state = {
      packageItem: null,
      isLoading: false
    }
  }
  componentDidMount() {
    this.setState({
      packageItem: this.props.RecomendItem
    })
  }
  renderPackage = ({item}) => {
    return(
  <TouchableOpacity onPress={() => {this.props.navigation.navigate('WebviewPackage', {
      web: item.uri
    })
  }}>
   <View style={{marginRight: 18, marginBottom: 10}}>
      <View style={{width: wp('43%'), height: 130}}>
         <Image source={{uri: item.images[0]}} style={{borderRadius: 15,width: undefined, height: undefined, resizeMode: 'cover', flex: 1}}/>
      </View> 
        <Text numberOfLines={2} style={styles.textPackageRecomen}>{item.name}</Text>    
        <Text numberOfLines={2} style={styles.descriptionPackage}>{item.description.replace(/<[^>]+>/g, '')}</Text>
    </View>
    </TouchableOpacity>
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
    let packageItem = null
    return (  
      <FlatList
        data={this.state.packageItem}
        renderItem={this.renderPackage}
        numColumns = {10}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={this.renderFooter.bind(this)}
      />
    ) 
  }
  
}

export default PackageRecomen;