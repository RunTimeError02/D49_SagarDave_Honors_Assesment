// import React, { Component } from 'react';
// import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'; // Updated import
// import  MoviesList from '../component/MoviesList';

// export default class MovieScreen extends Component {
//   render() {
//     return (
//       <View>
//         <MoviesList navigation={this.props.navigation}/>
//         <TouchableOpacity style={{backgroundColor:'black', width:'10px'}}onPress={() => this.props.navigation.navigate('MoviesDetails',{movie:item})}></TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({

// });


// MovieScreen.js

// import React, { Component } from 'react';
// import { View, StyleSheet, TouchableOpacity } from 'react-native';
// import MoviesList from '../component/MoviesList';

// export default class MovieScreen extends Component {
//   render() {
//     return (
//       <View>
//         <MoviesList navigation={this.props.navigation} />
//         {/* Assuming `item` is passed as a prop to `MovieScreen` */}
//         <TouchableOpacity 
//           style={{ backgroundColor: 'black', width: '10px' }}
//           onPress={() => this.props.navigation.navigate('MoviesDetails', { movie: this.props.item })}
//         ></TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({});

// MovieScreen.js

import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import MoviesList from '../component/MoviesList';

export default class MovieScreen extends Component {
  render() {
    return (
      <View>
        <MoviesList navigation={this.props.navigation} />
        {/* Assuming `item` is passed as a prop to `MovieScreen` */}
        <TouchableOpacity 
          style={{ backgroundColor: 'black', width: '10px' }}
          onPress={() => this.props.navigation.navigate('MovieDetailScreen', { movie: this.props.item })}
        ></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

