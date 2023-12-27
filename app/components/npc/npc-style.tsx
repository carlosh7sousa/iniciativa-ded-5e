import { StyleSheet } from 'react-native';

export const cssNpc = StyleSheet.create({
  npcViewCtrl: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "red",
    paddingBottom: 20,
    paddingTop: 20
  },
  playerViewCtrl: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "green",
    paddingBottom: 20,
    paddingTop: 20
  },
  initTxtCtrl: {
    width: 40,
    borderBottomColor: "white",
    borderBottomWidth: 3,
    paddingLeft: 10,
  },
  nameTxtCtrl: {
    width: "60%",
    borderBottomWidth: 3,
    borderBottomColor: "white",
    paddingLeft: 10,
  },
  hpTxtCtrl: {
    width: "10%",
    borderColor: "white",
    borderBottomWidth: 3,
    paddingLeft: 10
  },
  btnCtrl: {
    textAlign: "center",
    borderRadius: 4,
    backgroundColor: "blue",
    width: 30

  }


});
