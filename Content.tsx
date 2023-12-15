import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

export const Content = () => {
  return (
    <ScrollView indicatorStyle="white" showsVerticalScrollIndicator={true}>
      <View style={styles.wrapper}>
        <View style={styles.card}></View>
        <View style={styles.card}></View>
        <View style={styles.card}></View>
        <View style={styles.card}></View>
        <View style={styles.card}></View>
        <View style={styles.card}></View>
        <View style={styles.card}></View>
        <View style={styles.card}></View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: 'gray',
    height: 280,
    width: '48%',
    marginBottom: 14,
    borderRadius: 5,
  },
});
