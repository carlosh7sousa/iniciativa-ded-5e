import { StyleSheet } from 'react-native';

export const cssFooter = StyleSheet.create({

    vwFooter: {
        width: "100%",
        height: 80,
        backgroundColor: "#37474F",

    },
    vwFooterRowAddLimpar: {
        width: "100%",
        height: 45,
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"center",
        margin: 0,
        borderWidth: 0
    },
 

    lblBtnLimpar: {
        fontSize: 18,
        color: "#D50000",
        textAlign: "center",
        height: 48,
        width: 220,
        backgroundColor: "#FFCDD2",
        padding: 10
    },
    btnLimpar: {
        width: 220
    }
});