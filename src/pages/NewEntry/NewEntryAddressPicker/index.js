import React from 'react';
import {Alert, View, TouchableOpacity, StyleSheet} from 'react-native';

import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../styles/Colors';

const NewEntryAddressPicker = () => {
  const onButtonPress = () => {
    Geolocation.getCurrentPosition(
      pos => {
        const latitude = pos.coords.latitude;
        const longitude = pos.coords.longitude;

        const position = `Lat. ${latitude} - Lon. ${longitude}`;

        Alert.alert('Posição', position);
      },
      error => {
        console.error(
          'NewEntryAddressPicker :: erro ao recuperar a posição',
          error,
        );
      },
    );
  };

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onButtonPress}>
        <Icon name="person-pin" size={30} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150,
    backgroundColor: Colors.asphalt,
    width: 59,
    height: 59,
    marginHorizontal: 3,
  },
});

export default NewEntryAddressPicker;
