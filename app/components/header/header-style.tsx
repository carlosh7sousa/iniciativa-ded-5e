import { StyleSheet } from 'react-native';

export const cssHeader = StyleSheet.create({

    vwHeader: {
        width: "100%",
        height: 145,
        backgroundColor: "white",
    },

    lblHeaderTitle: {
        height: 20,
        fontWeight: "bold",
        fontSize: 14,
        color: "#FF6D00",
        textAlign: "center",
    },

    vwSair:{
        width: "100%",
        height: 30,
        backgroundColor: "#546E7A", 
        flexDirection: 'row-reverse',
    },

    btnSair:{
        width: 120,
       
        backgroundColor: "#37474F",
    },

    lblBtnSair:{
        textAlign: "center",
        width: 120,
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        marginTop: -16,
    },


    vwHeaderRowTurno: {
        width: "100%",
        height: 45,
        flexDirection: 'row',
        backgroundColor: "#424242",
        justifyContent: 'space-between',
        margin: 0,
        paddingBotton: 10,
        borderTopColor: "black",
        borderTopWidth: 3,
        borderBottomColor: "black",
        borderBottomWidth: 3,
    },




    vwHeaderTurnoCtrl: {

        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: "center",
        alignContent: "center",
    },




    lblBtnPreviousTurno: {
        color: "white",
        fontSize: 28,
        backgroundColor: "#546E7A",
        textAlign: "center",
        height: 44,
        borderTopColor: "black",
        borderTopWidth: 3,
        borderBottomColor: "black",
        borderBottomWidth: 3,
        borderRadius: 10,
        width: 70,
        marginLeft: 4
    },
    btnPreviousTurno: {
        width: 70
    },



    lblTurno: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
        height: 44,
        padding: 10,
        marginLeft: 20
    },


    lblBtnNextTurno: {
        color: "white",
        fontSize: 28,
        backgroundColor: "#546E7A",
        textAlign: "center",
        height: 44,
        borderTopColor: "black",
        borderTopWidth: 3,
        borderBottomColor: "black",
        borderBottomWidth: 3,
        borderRadius: 10,
        marginLeft: 8,
        width: 70,
    },
    btnNextTurno: {
        width: 70,
    },

    lblBtnSortNpcs: {
        color: "white",
        fontWeight:"bold",
        fontFamily: "sans-serif",
        fontSize: 28,       
        textAlign: "center",
        height: 50,
        marginTop: -4
    },
    btnSortNpcs: {
        width: 70,
        backgroundColor: "#90A4AE", 
    },




    vwHeaderAddCtrl: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: "100%",
        height: 50
    },

    lblBtnAddNpc: {
        color: "white",
        fontSize: 30,
        padding: 0,
        backgroundColor: "#90CAF9",
        textAlign: "center",
        width:60,
        height: 50
    },
    btnAddNpc: {
        width: 60,
        height: 50
    },
    txtAddNpc: {
        color: "white",
        padding: 10,
        fontSize: 16,
        fontWeight: "bold",
        backgroundColor: "#263238",
        flex: 1
    },




});