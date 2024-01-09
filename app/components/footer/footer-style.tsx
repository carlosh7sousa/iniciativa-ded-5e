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
        color: "#F5F5F5",
        textAlign: "center",
        height: 48,
        width: 220,
        backgroundColor: "#B71C1C",
        padding: 10
    },
    btnLimpar: {
        width: 220
    },

    lblBtnPersist: {
        fontSize: 18,
        color: "#ECEFF1",
        textAlign: "center",
        height: 48,
        width: 220,
        backgroundColor: "#33691E",
        padding: 10
    },
    btnPersist: {
        width: 220
    }
});