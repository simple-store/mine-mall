import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import MineScreen from '../screens/Mine/Main-Screen';
import MallScreen from '../screens/Mall/Main-Screen';
import TasksScreen from '../screens/Task/Main-Screen';
import TranscationScreen from '../screens/Transaction/Main-Screen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const MallStack = createStackNavigator(
  {
    Mall: MallScreen,
  },
  config
);

MallStack.navigationOptions = {
  tabBarLabel: '商城',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

MallStack.path = '';

const TasksStack = createStackNavigator(
  {
    Tasks: TasksScreen,
  },
  config
);

TasksStack.navigationOptions = {
  tabBarLabel: '任务',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

TasksStack.path = '';

const TranscationStack = createStackNavigator(
  {
    transactions: TranscationScreen,
  },
  config
);

TranscationStack.navigationOptions = {
  tabBarLabel: '交易',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

TranscationStack.path = '';

const MineStack = createStackNavigator(
  {
    Mine: MineScreen,
  },
  config
);

MineStack.navigationOptions = {
  tabBarLabel: '我的',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

MineStack.path = '';

const tabNavigator = createBottomTabNavigator({
  MallStack,
  TasksStack,
  TranscationStack,
  MineStack,
});

tabNavigator.path = '';

export default tabNavigator;
