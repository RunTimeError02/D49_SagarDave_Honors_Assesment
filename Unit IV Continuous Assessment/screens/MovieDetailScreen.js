// // Book detail screen in react native

// MovieDetailScreen.js

// import React, { Component } from 'react';
// import { Text, StyleSheet, View } from 'react-native';

// export default class MovieDetailScreen extends Component {
//   render() {
//     const { movie } = this.props.route.params;
//     return (
//       <View>
//         <Text>{movie.title} - {movie.director}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({});

// MovieDetailScreen.js

// import React, { Component } from 'react';
// import { Text, StyleSheet, View } from 'react-native';

// export default class MovieDetailScreen extends Component {
//   render() {
//     console.log(this.props.route.params.movies.actors); 
//     return (
//       <View>
        
//           <Text>Actors : {this.props.route.params.movies.actors} </Text>
//           <Text>Trailer Link : {this.props.route.params.movies.trailer}</Text>
        
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({});
import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class MovieDetailScreen extends Component {
  render() {
    const { actors, awards} = this.props.route.params.movies;
    return (
      <View>
        <Text>Actors: {actors.join(', ')}</Text>
        <Text>Awards: {awards}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});


// import React, { Component } from 'react'
// import { Text, StyleSheet, View } from 'react-native'

// export default class MovieDetailScreen extends Component {
//   render() {
//     const {movie} = this.props.route.params;
//     return (
//       <View>
//         <Text>{movie.title} - {movie.director} </Text>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({})

// import React, { Component } from 'react';
// import { Text, View } from 'react-native';

// export default class MovieDetailScreen extends Component {
//   render() {
//     const { movie } = this.props.route.params;
//     return (
//       <View>
//         <Text>{movie.title} - {movie.director}</Text>
//       </View>
//     );
//   }
// }