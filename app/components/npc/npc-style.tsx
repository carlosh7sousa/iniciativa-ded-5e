import { StyleSheet } from 'react-native';

export const cssNpc = StyleSheet.create({
  npcViewCtrl: {
    flexDirection: "row",
    backgroundColor: "#E57373",
    paddingBottom: 0,
    paddingTop: 20,
    width: "100%"
  },
  playerViewCtrl: {
    flexDirection: "row",
    backgroundColor: "#81C784",
    paddingBottom: 0,
    paddingTop: 20,
    width: "100%"
  },

  npcViewLabelCtrl: {
    flexDirection: "row",
    backgroundColor: "#E57373",
    paddingBottom: 0,
    paddingTop: 0,
    margin:0,
    borderBottomWidth: 12,
    borderBottomColor: "white",
    width: "100%"
  }, 
  playerViewLabelCtrl: {
    flexDirection: "row",
    backgroundColor: "#81C784",
    paddingBottom: 0,
    paddingTop: 0,
    margin:0,
    borderBottomWidth: 12,
    borderBottomColor: "white",
    width: "100%"
  },

  npcControlViewLabelCtrl: {
    flexDirection: "row",
    backgroundColor: "#E57373",
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft:12,
    margin:0,
    width: 50
  }, 
  playerControlViewLabelCtrl: {
    flexDirection: "row",
    backgroundColor: "#81C784",
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft:12,
    margin:0,
    width: 50
  },

  initTxtCtrl: {
    width: 50,
    backgroundColor: "#546E7A",
    color: "white",
    fontWeight: "bold",
    borderBottomColor: "white",
    borderBottomWidth: 3,
    padding:10,
    fontSize:20,
    textAlign:"center"
  },
  nameTxtCtrl: {
    backgroundColor:"#FBE9E7",
    width: "60%",
    borderBottomWidth: 3,
    borderBottomColor: "white",
    paddingLeft: 10,
  },
  hpTxtCtrl: {
    backgroundColor: "#B71C1C",
    color: "white",
    textAlign:"center",
    width: 40,
    borderColor: "white",
    paddingBottom:6,
    paddingTop: 6
    
  },
  btnCtrl: {
    textAlign: "center",
    borderRadius: 4,
    backgroundColor: "#37474F",
    width: 50,
    height: 50,
  },
  btnLabelCtrl:{
    textAlign: "center",
    fontSize: 14,
    color: "white",
    width: 50,
    height: 50,
    paddingRight: 8,
    paddingLeft: 8,
    paddingTop: 14,
    paddingBottom: 14

  },
  iniLblCtrl:{
    width: 50,
    textAlign: "center",
  },
  nameLblTokenCtrl:{
    width: "60%",
    color: "black"
  },
  hpLblCtrl: {
    width: "10%",
    textAlign: "center"
  },
  lblInicioTurno:{
    backgroundColor: "#B2FF59",
    color: "#263238",
    textAlign:"center",
    fontSize: 18,
    fontWeight: "bold"
  }

});
