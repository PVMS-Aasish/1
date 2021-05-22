import React, { Component } from 'react';
import {Image } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BuyScreen from '../screens/BuyScreen';
import SellScreen from '../screens/SellScreen';

export const AppTabNavigator=createBottomTabNavigator({
      BuyScreen:{
          screen:BuyScreen,
          navigationOptions:{
            tabBarIcon : <Image source={require("../assets/buy.png")} style={{width:20 ,height:20 }}/>,
            tabBarLabel : "Buy"   
        }
      },
      SellScreen:{ 
        screen:SellScreen,
        navigationOptions:{
          tabBarIcon : <Image source={require("../assets/sell.png")} style={{width:20 ,height:20 }}/>,
          tabBarLabel : "Sell"   
      }
    }
            })