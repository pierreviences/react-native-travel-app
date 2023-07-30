import React, {Component} from 'react'
import {ScrollView, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import {styles} from '../commons/Styles';
import Header from '../commons/packages/Header';
import PackagesAll from '../commons/packages/Packages'
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-community/async-storage';
import {CommonActions } from '@react-navigation/native';
import {ListPackage,searchPackage} from '../services/main/MainService'
class Packages extends Component{
  constructor(props){
    super(props)
    this.state = {
      packageItem: null,
      spinnerLoader: false,
      color: null
    }
    this.fetchPackage = this.fetchPackage.bind(this);
    this.fetchSearch = this.fetchSearch.bind(this);
  }

  componentDidMount(){
  this._reloads = this.props.navigation.addListener('blur', () => {
          this.props.navigation.dispatch({
            ...CommonActions.setParams({ packageSearch: '' })
          }) 
  });
  this._reload = this.props.navigation.addListener('focus', () => {
   
     if(this.props.route.params){
      this.fetchSearch(true);
   }else{
    this.fetchPackage(true);
   }  
  });
   this.fetchPackage(true); 
 

  }
  componentWillUnmount() {
    this._reload();
  }

  fetchSearch(loader){
    if(loader){
      this.setState({
        spinnerLoader: true
      })
    }
    this.setState({packageItem: null})
    const that = this
    if(this.props.route.params){
    let params = this.props.route.params.packageSearch
    searchPackage(params).then((response) => {
      if(response.status == 200){
        return that.setState({packageItem: response.data.properties, spinnerLoader: false})
      } else if(response.status == 401){
         return that.props.navigation.navigate('Login',  {action: 'unauthorized'})
      }
    })
   }
  }

  fetchPackage(loader){
    if(loader){
      this.setState({
        spinnerLoader: true
      })
    }
    this.setState({packageItem: null})
    const that = this
    ListPackage().then((response) => {
        if(response.status == 200){
        return that.setState({packageItem: response.data.properties, spinnerLoader: false})
      } else if(response.status == 401){
         return that.props.navigation.navigate('Login',  {action: 'unauthorized'})
      }
    })
  }
  render(){
    return(
      <ScrollView styles={styles.container} showsVerticalScrollIndicator={false}>
     <Spinner
          visible={this.state.spinnerLoader}
          textStyle={{color: '#fff'}}
       />   
        <Header title="Packages Near You"/>
        {this.state.packageItem ? (
        <PackagesAll navigation={this.props.navigation} packageItem={this.state.packageItem}/>
        ) : null}

        
                    
    
      </ScrollView>

    )
  }
}



export default Packages;