import { StyleSheet } from 'react-native';

export const cssHeader = StyleSheet.create({
    headerView: {
        width: "100%",
        flexDirection:"row",
        height: 40,
        backgroundColor: "#424242",
        margin: 0
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
        textAlign: "center"
    },
    btnPreviousTurnBtnCtrl: {
        width: 70,
        marginLeft: 10
    },

    btnSortTurnLabelCtrl: {
        color: "white",
        fontSize: 22, 
        padding:4,
        borderWidth: 4,
        backgroundColor: "#90A4AE",
        borderColor: "#90A4AE",
        textAlign: "center"
    },
    btnSortTurnBtnCtrl: {
        marginLeft: 10
    },

    lblTurnoLabelCtrl :{
        color: "white",
        fontSize: 22,
        padding:4 
       
    }

});