import { StyleSheet } from 'react-native';

export const cssFooter = StyleSheet.create({

    vwFooter: {
        width: "100%",
        height: 80,
        backgroundColor: "#37474F",

    },
    vwFooterRowAddLimpar: {
        height: 45,
        borderWidth: 0,
        display:"flex",
        flexDirection:"row",
        justifyContent: "center"
    },
 

    lblBtnLimpar: {
        fontSize: 14,
        color: "#F5F5F5",
        textAlign: "center",
        height: 40,
        width: 120,
        backgroundColor: "#B71C1C",
        padding: 10,
        
        
    },
    btnLimpar: {
        width: 120,
        marginLeft: 10
    },

    lblBtnPersist: {
        fontSize: 18,
        color: "#ECEFF1",
        textAlign: "center",
        height: 48,
        width: 200,
        backgroundColor: "#33691E",
        padding: 10
    },
    btnPersist: {
        width: 220
    }
});