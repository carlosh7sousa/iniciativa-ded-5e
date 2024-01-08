import { Dimensions, StyleSheet, StatusBar } from 'react-native';

let h: number = Dimensions.get("screen").height;


let header: number = 115;
let footer: number = 80;

h = h - header;
h = h - footer;
h = h - StatusBar.currentHeight - 18;


let modalHeight: number = h * 0.55;
let modalVerHeight: number = h * 0.9;

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
  },





  modalVerView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.86)',
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    height: modalVerHeight,
    width: "100%",
  },

  modalVerArea: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    height: modalVerHeight,
    width: "100%",
    borderRadius: 8,
    borderWidth: 3,
    borderColor: "#E0E0E0"
  },




  modalVerRow1: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  },


  modalVerRowEmpty:{
    width: "100%",
    height: 30
  },

  modalVerRowPericia:{
    flexDirection: "row",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'flex-start',
  },

  modalVerRowAtaque: {
    flexDirection: "row",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'flex-start',
  },

  modalVerRow2: {
    flexDirection: "row",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    margin: 0,
    alignItems: 'flex-start',
  },

  modalVerRowBotoes:{
    flexDirection: "row",
    width: "100%",
    padding: 0,
    margin: 0,
    alignItems:"center",
    verticalAlign:"center",
    justifyContent:"center",
    height: 80
  },

  modalVerRowTitulo: {
    flexDirection: "row",
    width: "100%",
    padding: 0,
    margin: 0,
    alignItems:"center",
    justifyContent: "center"    
  },

  modalVerLblTitulo: {
    fontSize: 22,
    textAlign: "center",
    paddingTop: 10
  },

  modalVerLblNpcNome: {
    fontSize: 22,
    textAlign: "center",
    paddingTop: 10,
    fontWeight: "bold"
  },


  modalVerLblBtnCancelar: {
    fontSize: 22,
    color: "white",
    textAlign: "center"
  },

  modalVerBtnCancelar: {
    width: "33%",
    padding: 10,
    textAlign: "center",
    backgroundColor: "#34495E",
    marginLeft: 6
  },
 

  modalVerLblBtnAtualizar: {
    fontSize: 22,
    color: "white",
    textAlign: "center"
  },

  modalVerBtnAtualizar: {
    width: "33%",
    padding: 10,
    textAlign: "center",
    backgroundColor: "#2E86C1",
    marginLeft: 6
  },


  modalVerLblEJogador: {
    fontSize: 18,
    width: "33%",
    marginLeft: 10
  },

  modalVerLblDeslocamento: {
    fontSize: 18,
    width: "40%"
  },


  modalVerTxtDeslocamento: {
    fontSize: 18,
    width: 50,
    textAlign: "center",
    borderBottomColor: "#CFD8DC",
    borderBottomWidth: 1,
  },


  modalVerLblCa: {
    fontSize: 20,
    textAlign: "right",
    width: "40%"
  },

  modalVerTxtCa: {
    textAlign: "center",
    fontSize: 18,
    width: 50,
    borderBottomColor: "#CFD8DC",
    borderBottomWidth: 1,
  },


  modalVerLblAtaqueTitulo: {
    fontSize: 18,
    width: "46%",
    textAlign: "center"
  },

  modalVerLblModTitulo: {
    fontSize: 18,
    width: "13%",
    textAlign: "center"
  },

  modalVerLblDanoTitulo: {
    fontSize: 18,
    width: "40%",
    textAlign: "center"
  },


  modalVerTxtAtaque: {
    fontSize: 14,
    width: "46%",
    backgroundColor: "#CFD8DC",
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: "white",
    paddingLeft: 4
  },


  modalVerTxtMod: {
    fontSize: 14,
    width: "13%",
    backgroundColor: "#CFD8DC",
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: "white",
    textAlign: "center",

  },

  modalVerTxtDano: {
    fontSize: 14,
    width: "40%",
    backgroundColor: "#CFD8DC",
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: "white",
    textAlign: "center"
  },

  modalVerLblPericiaTitulo: {
    fontSize: 18,
    width: "46%",
    textAlign: "center"
  },

  modalVerLblModPericiaTitulo: {
    fontSize: 18,
    width: "13%",
    textAlign: "center"
  },

  modalVerTxtPericia: {
    width: "46%",
    backgroundColor: "#CFD8DC",
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: "white",
    
  },

  modalVerTxtModPericia: {
    fontSize: 14,
    width: "13%",
    backgroundColor: "#CFD8DC",
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: "white",
    textAlign: "center"
  },


  modalVerLblDescricaoModTempTitulo: {
    fontSize: 20,
    width: "33%",
  },

  modalVerLblModTempTitulo: {
    fontSize: 20,
    width: "33%",
  },

  modalVerLblDuracaoTitulo: {
    fontSize: 20,
    width: "33%",
  },


  modalVerTxtDescricaoModTemp: {
    fontSize: 20,
    width: "33%",
  },

  modalVerTxtModTemp: {
    fontSize: 20,
    width: "33%",
  },

  modalVerTxtDuracao: {
    fontSize: 20,
    width: "33%",
  },

  modalVerLblAnotacoes: {
    fontSize: 18,
    width: "40%",
    textAlign: 'center',
  },

  modalVertxtAnotacoes: {
    left: "62%",
    position:"absolute",
    fontSize: 14,
    width: "40%",
    backgroundColor: "#CFD8DC",
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: "white",
    height: 252,
    marginTop: 0,
    textAlignVertical:"top",
    textAlign: 'left'
   },

   modalVerLblPVs :{
    fontSize: 18,
    width: "40%",
    textAlign: 'center',
   },

   modalVerOptEJogador:{
      transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }],
   }

});