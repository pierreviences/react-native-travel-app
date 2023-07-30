import React, {Component} from 'react'
import {ScrollView, StyleSheet, View,BackHandler ,SafeAreaView,YellowBox, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import {styles} from '../commons/Styles';
import {CommonActions } from '@react-navigation/native';
import Banner from '../commons/home/Banner';
import Profile from '../commons/home/Profile';
import PackageRecomen from '../commons/home/PackageRecomen';
import SeeAll from '../commons/home/SeeAll';
import BannerPackage from '../commons/home/BannerPackage';
import Line from '../commons/home/Line';
import Icon from 'react-native-vector-icons/Ionicons';
import AlertPro from "react-native-alert-pro";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AsyncStorage from '@react-native-community/async-storage';
import {app_color,data_industri, BannerPromo, PackageRecomend, ListPackage} from '../services/main/MainService';
import Spinner from 'react-native-loading-spinner-overlay';
import Autocomplete from 'react-native-autocomplete-input';
YellowBox.ignoreWarnings(['VirtualizedLists should never be nested', ])
YellowBox.ignoreWarnings(['componentWillReceiveProps']);
const API = 'https://private-1a02b7-hotdealsigoid.apiary-mock.com/v1/properties';
class Home extends Component{
  constructor(props) {
    super(props)
    this.state = {
       color: null,
       spinnerLoader: false,
       BannerItem: null,
       RecomendItem: null,
       datapackage: [],
       logo: null,
       banner: null,
       name: 'user',
       query: '',
    }
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.fetchPromo = this.fetchPromo.bind(this);
    this.fetchRecomend = this.fetchRecomend.bind(this);
    this.fetchSearch = this.fetchSearch.bind(this);
    this.fetchColor = this.fetchColor.bind(this);
    this.fetchIndustri = this.fetchIndustri.bind(this);
  }
  componentDidMount() {
    this._reload = this.props.navigation.addListener('focus', () => {
    this.setState({
      query: ''
    })
  });
    this.fetchPromo(true);
    this.fetchRecomend(true);
    this.fetchSearch(true);
    this.fetchColor(true);
    this.fetchIndustri(true);
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  componentWillUnmount() {
    this._reload();
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  handleBackButtonClick= () => {
    if (this.props.navigation.isFocused()) {
        Alert.alert(
            'Are u sure?',
            'Exiting the application?', [{
                text: 'Cancel',
                style: 'cancel'
            }, {
                text: 'OK',
                onPress: () => BackHandler.exitApp()
            }, ], {
                cancelable: false
            }
        )
        return true;
    }
   };

   fetchSearch(){
    const that = this
    ListPackage().then((response) => {
      if(response.status == 200){
        return that.setState({datapackage: response.data.properties, spinnerLoader: false})
      } else if(response.status == 401){
         return that.props.navigation.navigate('Login',  {action: 'unauthorized'})
      }
    })
   }

   findPackage(query) {
    if (query === '') {
      return [];
    }
    const { datapackage } = this.state;
    const regex = new RegExp(`${query.trim()}`, 'i');
    return datapackage.filter(data => data.name.search(regex) >= 0);
  }
  fetchColor(loader){
    if(loader){
      this.setState({
        spinnerLoader:false
      })
    }
    app_color().then((response) => {
      if(response.secondary_color == null) {
        return this.setState({color: '#F89D43'})
        }else {
      return this.setState({color: response.secondary_color})
      }
    })
 
  }
  fetchIndustri(loader){
    if(loader){
      this.setState({
        spinnerLoader:false
      })
    }
    const that = this
    data_industri().then((response) => {
      return that.setState(
        {logo: response.appearances.logo,
        banner: response.appearances.banner,
        name: response.user.name})
    })
 
  }

  fetchRecomend(loader){
    if(loader){
      this.setState({
        spinnerLoader: true
      })
    }
    this.setState({RecomendItem: null})
    const that = this
    PackageRecomend().then((response) => {
       if(response.status == 200){
        return that.setState({RecomendItem: response.data.properties, spinnerLoader: false})
       }else if (response.status == 401){
        return that.props.navigation.navigate('Login',  {action: 'unauthorized'})
       }
      })
  }
  fetchPromo(loader){
    if(loader){
      this.setState({
        spinnerLoader: true
      })
    }
    this.setState({BannerItem: null})
    const that = this
    BannerPromo().then((response) => {
      if(response.status == 200){
         return that.setState({BannerItem: response.data, spinnerLoader:false})
      } else if(response.status == 401){
         return that.props.navigation.navigate('Login',  {action: 'unauthorized'})
      }
    })
  }
  render(){
    let Image_Http_URL ={ uri: this.state.logo};
    let Banner_Http_URL ={ uri: this.state.banner};
    const { query } = this.state;
    const datapackage = this.findPackage(query);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
    return( 
      <ScrollView styles={styles.container} showsVerticalScrollIndicator={false}>
       <Spinner
          visible={this.state.spinnerLoader}
          textStyle={{color: '#fff'}}
       />
        <View style={styles.center}>
          <Banner img={Banner_Http_URL}/>
          <Profile img={Image_Http_URL}/>
        </View>

        <View style={{marginHorizontal:17,marginTop:50}}>

          <View style={[styles.body,{height:140,borderRadius:25,padding: 20,shadowColor: "#000",elevation: 5,}]}>
            
            <Text style={{color: '#5F5F5F', fontSize: 15, marginBottom: 12}}>Hey, {this.state.name} !</Text>     
            
            <View style={{flexDirection:'row'}}>
             <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={{flex:1, width:'90%'}}
          inputContainerStyle={{borderRadius:3,borderWidth:2,borderColor:this.state.color}}
          listStyle={{borderWidth:1,elevation:3, height:'auto',borderBottomLeftRadius:10,borderBottomRightRadius:10}}
          data={datapackage.length === 1 && comp(query, datapackage[0].name.replace(/60\'/gi,'')) ? [] : datapackage}
          defaultValue={query}
          onChangeText={text => this.setState({ query: text })}
          placeholder="Search Packages ...."
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.setState({ query: item.name.replace(/60\'/gi,'') })}>
              <View style={{paddingTop: 5,paddingBottom: 5,paddingHorizontal: 4,flexDirection:'row'}}>
              <Icon  name="ios-home" style={{fontSize:20,color: this.state.color,}} />
              <Text style={{ fontSize: 15,marginLeft:4}}>
                {item.name} 
              </Text>
              </View>
            </TouchableOpacity>
          )}
        />
        
        <TouchableOpacity  onPress={() =>
          this.props.navigation.dispatch(
            CommonActions.navigate({
              name: 'Packages',
              params: {
                packageSearch: query,
              },
            })
          )
        }>
        <Icon  name="ios-search" style={{fontSize:35,color: this.state.color, marginLeft:6, marginTop:5}} />
        </TouchableOpacity>
        </View>
         </View>
         </View> 

         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  style={{flex:1}}>
         <View style={{ marginLeft:17, width:'100%'}}>    
           {this.state.BannerItem ? (
          <BannerPackage BannerItem={this.state.BannerItem}/>
          ) : null}
           </View>
         </ScrollView>

          <Line />

          <View style={{marginTop:16}}>
           <View style={{marginHorizontal:17}}>
             
            <View style={styles.SeeAllContain}>
             <Text style={[styles.textSeeAll, {color: '#1c1c1c'}]}>Package Recomendation</Text>
             <TouchableOpacity onPress={() =>{ this.props.navigation.navigate('Packages')}}>
             <Text style={[styles.textSeeAll, {color: this.state.color}]}>See All</Text>
             </TouchableOpacity>
         </View>
           </View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flexDirection: 'row', paddingLeft:17}}>
                     {this.state.RecomendItem ? (
                     <PackageRecomen navigation={this.props.navigation} RecomendItem={this.state.RecomendItem}/>
                     ) : null}
              </ScrollView>
          </View>
        
      </ScrollView>
    )
  }
}


export default Home;
