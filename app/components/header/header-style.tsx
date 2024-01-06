import { StyleSheet } from 'react-native';

export const cssHeader = StyleSheet.create({

    vwHeader: {
        width: "100%",
        height: 65,
        backgroundColor: "white",
    },

    lblHeaderTitle: {
        height: 20,
        fontWeight: "bold",
        fontSize: 14,
        color: "#FF6D00",
        textAlign: "center",
    },

    vwHeaderRowTurno: {
        width: "100%",
        height: 45,
        flexDirection: 'row',
        backgroundColor: "#424242",
        justifyContent: 'space-between',
        margin: 0,
        paddingBotton: 10
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
        height: 46,
    },
    btnPreviousTurno: {
        width: 70
    },



    lblTurno: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
        height: 46,
        padding: 10
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
        padding: 0,
        backgroundColor: "#90A4AE",
        borderColor: "#90A4AE",
        textAlign: "center",
        height: 46,
    },
    btnSortNpcs: {
        width: 60
    },




});