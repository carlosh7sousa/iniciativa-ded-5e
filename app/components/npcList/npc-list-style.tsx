import { Dimensions, StyleSheet, StatusBar } from 'react-native';

let h: number = Dimensions.get("screen").height;


let header: number = 115;
let footer: number = 80;

h = h - header;
h = h - footer;
h = h - StatusBar.currentHeight - 18;


let modalHeight: number = h * 0.5;

export const cssNpcList = StyleSheet.create({

  vwNpcListComponent: {
    height: h
  },
















  listaNpcsView: {
    width: "100%",
    margin: 0,
    borderWidth: 2,
    borderColor: "#333333",
  },
  modalView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.86)',
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    height: modalHeight,
    width: "100%",
  },

  modalArea: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    height: modalHeight,
    width: "100%",
    borderRadius: 8,
    borderWidth: 3,
    borderColor: "#E0E0E0"
  },



  modalLblTitulo: {
    fontSize: 30,
    textAlign: "center",
    width: "86%",
    color: "#D50000",
    paddingTop: 10
  },


  modalLblName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  modalTxtPv: {
    fontSize: 60,
    color: "#FF1744",
    borderBottomColor: "#263238",
    borderBottomWidth: 4,
    width: "70%",
    textAlign: "center",
  },


  modalRow1: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  },
  modalRow2: {
    flexDirection: "row",
    width: "100%",
    padding: 20,
    alignItems: "center",
    justifyContent: "center"
  },

  modalRow3: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center"
  },

  modalRow4: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center"
  },



  modalLblBtnClose: {
    fontSize: 22,
    color: "white",
    textAlign: "center"
  },

  modalLblBtnSet: {
    fontSize: 22,
    color: "#37474F",
    textAlign: "center",

  },
  modalLblBtnAdd: {
    fontSize: 22,
    color: "#F5F5F5",
    textAlign: "center"
  },
  modalLblBtnSubtract: {
    fontSize: 22,
    color: "#F5F5F5",
    textAlign: "center"
  },


  modalBtnSet: {
    width: "33%",
    padding: 10,
    textAlign: "center",
    backgroundColor: "#ECEFF1",
    marginLeft: 6
  },
  modalBtnAdd: {
    width: "33%",
    padding: 10,
    textAlign: "center",
    backgroundColor: "#FFA000",
    marginLeft: 6
  },
  modalBtnSubtract: {
    width: "33%",
    padding: 10,
    textAlign: "center",
    backgroundColor: "#FFA000",
    marginLeft: 6
  },

  modalBtnClose: {
    width: 40,
    height: 40,
    textAlign: "center",
    backgroundColor: "#C62828",
    marginLeft: 6,
    padding: 2,
    marginTop: 18,
    marginRight: 2,
    borderRadius: 4,
    
  },

  headerView3: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#424242",
    margin: 0,
    borderWidth: 0,
  },
  lblListaLabel: {
    borderTopWidth: 0,
    fontSize: 14,
    borderBottomWidth: 3,
    width: "100%",
    textAlign: "center",
    color: "white"
  }
});