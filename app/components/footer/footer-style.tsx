import { StyleSheet } from 'react-native';

export const cssFooter = StyleSheet.create({

    vwFooter:{
        width: "100%",
        height: 80,
        backgroundColor: "white",   
    },
    vwFooterRowAddLimpar: {
        width: "100%",
        height: 45,
        flexDirection:"row",
        justifyContent:'space-between',    
        margin: 0,
        borderWidth: 0        
    },


    vwFooterAddCtrl:{
        justifyContent:'space-between',          
        flexDirection:'row',
        width:"70%"          
    },

    lblBtnAddNpc: {
        color: "white",
        fontSize: 30, 
        padding:0,
        backgroundColor: "#90CAF9",
        textAlign: "center",
        width: 60
    },
    btnAddNpc: {
        width: 60,       
    },    
    txtAddNpc:{
        color: "black",
        flex: 1,
        padding:10    
    },
     
    lblBtnLimpar: {
        fontSize: 18, 
        color: "#D50000",
        textAlign: "center",
        height: 46,
        maxWidth:100,
        backgroundColor: "#FFCDD2",
        padding: 10
    },
    btnLimpar:{
        maxWidth:100,
    } 
});