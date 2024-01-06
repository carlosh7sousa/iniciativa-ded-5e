import { StyleSheet } from 'react-native';

export const cssHeader = StyleSheet.create({

    vwHeader:{
        width: "100%",
        height: 110,
        backgroundColor: "white"        
    },

    lblHeaderTitle:{
        height: 20,
        fontWeight:"bold",
        fontSize:14,
        color: "#FF6D00",
        textAlign: "center",
      },

    vwHeaderRowTurno: {
        flex:1,
        height: 45,
        flexDirection:'row',
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "#424242",
        justifyContent:'space-between',    
        margin: 0,
        paddingBotton: 10    
    },
    vwHeaderRowAddLimpar: {
        width: "100%",
        height: 45,
        flexDirection:"row",
        justifyContent:'space-between',    
        margin: 0,
        borderWidth: 0        
    },

    

    vwHeaderTurnoCtrl:{
        flex: 1,
        justifyContent:'space-between',          
        flexDirection:'row',   
    },

    vwHeaderAddCtrl:{
        justifyContent:'space-between',          
        flexDirection:'row',
        width:"70%"          
    },
 

    lblBtnPreviousTurno: {
        color: "white",
        fontSize: 28, 
        backgroundColor: "#546E7A",
        textAlign: "center",
        height: 46, 
    },
    btnPreviousTurno: {
        width: 70  
    },



    lblTurno :{
        color: "white",
        fontSize: 18,
        textAlign:"center",
        flex:1,
        height: 46,
        paddingTop:10,
    },


    lblBtnNextTurno: {
        color: "white",
        fontSize: 28, 
        backgroundColor: "#546E7A",
        textAlign: "center",
        height: 46, 
    },
    btnNextTurno: {
        width: 70  
    },




    lblBtnSortNpcs: {
        color: "white",
        fontSize: 26, 
        padding:0,
        backgroundColor: "#90A4AE",
        borderColor: "#90A4AE",
        textAlign: "center",
        height: 46,
    },
    btnSortNpcs: {        
        width: 60
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