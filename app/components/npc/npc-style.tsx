import { StyleSheet } from 'react-native';

export const cssNpc = StyleSheet.create({

  vwNpcComponent: {
    width: "100%",
    flexDirection: "column",
    height: 100,
  },

  yellow:{
    backgroundColor: "#FFF176"
   },

   red:{
    backgroundColor: "#E57373"
   },

   green:{
    backgroundColor: "#81C784"
   },

   orange:{
    backgroundColor: "#FF5722"
   },


  vwNpcRow0: {
    flexDirection: "row",
    width: "100%",
  },


  vwNpcRow1: {
    flexDirection: "row",
    justifyContent: 'space-between',
    width: "100%",
  },

  vwNpcRow2: {
    flexDirection: "row",
    justifyContent: 'space-between',
    width: "100%",
  },


  vwNpcRow3: {
    flexDirection: "row",
    width: "100%"
  },

  vwNpcGroupCtrl1: {
    flexDirection: "row",
    marginLeft: 10,
    width: "80%"
  },

  vwNpcGroupCtrl2: {
    flexDirection: "row",
    marginRight: 10,
    width: "20%"
  },


  txtIni: {
    width: 50,
    backgroundColor: "#546E7A",
    color: "white",
    fontWeight: "bold",
    borderBottomColor: "white",
    borderBottomWidth: 3,
    padding: 10,
    fontSize: 20,
    textAlign: "center"
  },
  txtNomeNpc: {
    backgroundColor: "#FBE9E7",
    width: "60%",
    borderBottomWidth: 3,
    borderBottomColor: "white",
    paddingLeft: 10,
  },



  lblBtnPv: {
    textAlign: "center",
    fontSize: 14,
    color: "white",
    width: 60,
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 4,
    paddingLeft:4
  },
  btnPv: {
    textAlign: "center",
    backgroundColor: "#B71C1C",
    width: 60,
    borderBottomWidth: 3,
    borderBottomColor: "#D50000",
  },






  lblBtnVer: {
    textAlign: "center",
    fontSize: 14,
    color: "white",
    width: 50,
    paddingRight: 8,
    paddingLeft: 8,
    paddingTop: 16,
    paddingBottom: 16
  },
  btnVer: {
    textAlign: "center",
    borderRadius: 8,
    backgroundColor: "#37474F",
    width: 50,    
  },





  lblIni: {
    width: 50,
    textAlign: "center",
  },

  lblTurnoDe: {
    color:  "#FF5722",
    width: "60%",
    fontWeight: "bold"
  },

  lblPv: {
    textAlign: "center",
    width: 60,
  },
});
