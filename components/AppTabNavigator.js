import React, { Component } from 'react';
import { StyleSheet, View, FlatList,Text } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BuyScreen from '../screens/BuyScreen';
import SellScreen from '../screens/SellScreen';

export const AppTabNavigator=createBottomTabNavigator({
      BuyScreen:{
          screen:BuyScreen,
          NavigationOption:{
            tabBarLabel : "Buy"   
        }
      },
      SellScreen:{
        screen:SellScreen,
        NavigationOption:{
          tabBarLabel : "Sell"   
      }
    }
            })