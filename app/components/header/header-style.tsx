import { StyleSheet } from 'react-native';

export const cssHeader = StyleSheet.create({
    headerView: {
        width: "100%",
        flexDirection:"row",
        alignItems: "center",
        alignContent: "center",
        height: 46,
        backgroundColor: "#424242",
        margin: 0,
        
    },
    lblHeaderTitle: {
        fontWeight: "bold",
        fontSize: 16
    },

    btnNextTurnLabelCtrl: {
        color: "white",
        fontSize: 28, 
        borderWidth: 4,
        backgroundColor: "#546E7A",
        borderColor: "#546E7A",
        textAlign: "center"  
    },
    btnNextTurnBtnCtrl: {
        width: 70   
    },

    btnPreviousTurnLabelCtrl: {
        color: "white",
        fontSize: 28, 
        borderWidth: 4,
        backgroundColor: "#546E7A",
        borderColor: "#546E7A",
        textAlign: "center",
    },
    btnPreviousTurnBtnCtrl: {
        width: 70,
        marginLeft:10
    },

    btnSortTurnLabelCtrl: {
        color: "white",
        fontSize: 26, 
        padding:0,
        borderWidth: 4,
        backgroundColor: "#90A4AE",
        borderColor: "#90A4AE",
        textAlign: "center"
    },
    btnSortTurnBtnCtrl: {
        
        width: 60,
        marginRight: 2 
    },

    btnAddNpcLabelCtrl: {
        color: "white",
        fontSize: 30, 
        padding:0,
        borderWidth: 4,
        backgroundColor: "#90CAF9",
        borderColor: "#90CAF9",
        textAlign: "center"
    },
    btnAddNpcBtnCtrl: {
        width: 60,
        marginLeft:10,
        marginRight: 2,        
    },

    lblTurnoLabelCtrl :{
        color: "white",
        fontSize: 18,
        textAlign:"center",
        paddingTop:8,
        width: 102,
    }

});