import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default function MainScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text>交易</Text>
    </ScrollView>
  );
}

MainScreen.navigationOptions = {
  title: '交易',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
