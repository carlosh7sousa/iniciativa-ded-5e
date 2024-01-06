import { StyleSheet } from 'react-native';

export const cssNpcList = StyleSheet.create({
  listaNpcsView: {
    width: "100%",
    margin: 0,
    borderWidth: 2,
    borderColor: "#333333"
  },
  modalView: {
    alignItems:"center",
    textAlign: "center",

  },
  modalPvLblCtrl: {
    fontSize: 20,
    fontWeight: "bold"
  },
  modalPvTxtCtrl: {
    fontSize: 60,
    color: "#FF1744",
    borderBottomColor: "#263238",
    borderBottomWidth: 4,
    width: 200,
    textAlign: "center"
  },
  modalViewControls: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center"
   },

  modalLblSetBtnCtrl: {
    fontSize: 22,
    color: "#37474F",
    textAlign: "center"
  },
  modalLblAddBtnCtrl: {
    fontSize: 22,
    color: "#F5F5F5",
    textAlign: "center"
  },
  modalLblSubtractBtnCtrl: {
    fontSize: 22,
    color: "#F5F5F5",
    textAlign: "center"
  },
  modalSetBtnCtrl: {
    width: "33%",
    padding: 10,
    textAlign: "center",
    backgroundColor: "#ECEFF1",
  },
  modalAddBtnCtrl: {
    width: "33%",
    padding: 10,
    textAlign: "center",
    backgroundColor: "#FFA000",
    marginLeft: 6
  },
  modalSubtractBtnCtrl: {
    width: "33%",
    padding: 10,
    textAlign: "center",
    backgroundColor: "#FFA000",
    marginLeft: 6
  }


});