import React, { Component } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import movies from '../data/movies.json'; // Make sure you have the correct path to your data

export default class MoviesList extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={movies}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('MoviesDetails',{movies:item})}>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.title} // Corrected keyExtractor syntax
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});



