import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default function Sunil(){
    return(
        <View style={{backgroundColor: '#d6ffff', justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button]}><Text>Tab 1</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}><Text>Tab 2</Text></TouchableOpacity>
            </View>
            
            <Text style={styles.textStyle}>This is Screen One</Text>
      </View>
    )
}
const styles = StyleSheet.create({
    button: {
      backgroundColor: '#ff6d6f',
      width: 100,
      alignItems: 'center',
      elevation: 5,
      borderRadius: 5,
      paddingVertical: 10,
      marginHorizontal: 5,
    },
    textStyle: {
      color: 'black',
      marginTop: 30,
    },
    buttonContainer: {
      flexDirection: 'row',
    }
  });