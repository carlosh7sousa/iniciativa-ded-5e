import { Dimensions, StyleSheet } from 'react-native';


let h: number = Dimensions.get("screen").height;

export const cssInitiative = StyleSheet.create({
  
  
  bodyContainer: {
    backgroundColor: '#fff',
    margin:0,
    padding: 0,
    flexDirection: "column",
    height: h
  },
 
});