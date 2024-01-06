import { StyleSheet } from 'react-native';

export const cssHeader = StyleSheet.create({
    headerView1: {
        width: "100%",
        height: 46,
        flexDirection:'row',
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "#424242",
        justifyContent:'space-around',  
        margin: 0,
        padding:0,       
    },
    headerView2: {
        width: "100%",
        flexDirection:"row",
        justifyContent:'space-between',      
        margin: 0,
        borderWidth: 0        
    },
    headerView3: {
        width: "100%",
        flexDirection:"row",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "#424242",
        margin: 0,
        borderWidth: 0,
    },
    lblHeaderTitle: {
        fontWeight: "bold",
        fontSize: 16,
        borderBottomWidth: 4,
        width: "100%",
        textAlign: "center"
    },

    btnNextTurnLabelCtrl: {
        color: "white",
        fontSize: 28, 
        backgroundColor: "#546E7A",
        textAlign: "center",
        height: 46, 
    },
    btnClearAllNpcBtnCtrl:{
        width: 70
    },
    btnNextTurnBtnCtrl: {
        width: 70  
    },

    btnPreviousTurnLabelCtrl: {
        color: "white",
        fontSize: 28, 
        backgroundColor: "#546E7A",
        textAlign: "center",
        height: 46,
    },
    btnPreviousTurnBtnCtrl: {
        width: 70,
        marginLeft:10
    },

    btnSortTurnLabelCtrl: {
        color: "white",
        fontSize: 26, 
        padding:0,
        backgroundColor: "#90A4AE",
        borderColor: "#90A4AE",
        textAlign: "center",
        height: 46,
    },
    btnSortTurnBtnCtrl: {        
        width: 60
    },

    btnDelNpcLabelCtrl: {
        fontSize: 18, 
        color: "#D50000",
        textAlign: "center",
        height: 46,
        width: 80,
        backgroundColor: "#FFCDD2",
        padding: 10
    },
    btnDelNpcBtnCtrl: {
        width: 60
    },

    txtAddNpc:{
        color: "black",
        width: "56%",        
    },
    btnAddNpcLabelCtrl: {
        color: "white",
        fontSize: 30, 
        padding:0,
        backgroundColor: "#90CAF9",
        textAlign: "center",
        width: 60
    },
    btnAddNpcBtnCtrl: {
        width: 60,       
        marginRight: 2      
    },

    lblTurnoLabelCtrl :{
        color: "white",
        fontSize: 18,
        textAlign:"center",
        width: "30%",
        height: 46,
        paddingTop:10,
    },
    lblListaLabel: {
       borderTopWidth: 0,
        fontSize: 14,
        borderBottomWidth: 3,
        width: "100%",
        textAlign: "center",
        color:"white"
    }

});