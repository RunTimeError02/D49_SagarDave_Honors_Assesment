import React from 'react';
import { View, Text } from 'react-native';

const GadgetDetailScreen = ({ route }) => {
  const { name, brand, price } = route.params.gadget;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Name: {name}</Text>
      <Text>Brand: {brand}</Text>
      <Text>Price: ${price}</Text>
    </View>
  );
};

export default GadgetDetailScreen;
