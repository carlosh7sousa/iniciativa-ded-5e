import { Component } from "react";
import { Modal, Pressable, View, Text, TextInput } from "react-native";
import Npc from "../../models/npc";



export default class HpModalPage extends Component<{ handlerSetNpc(npc: Npc, index: number): void, handlerGetNpc(index: number): Npc, index: number }, {   }> {

  constructor(props) {
    super(props);
    
  }
 

  handlePvTextChange = (strNewValue: string) => {
    let npc: Npc = this.props.handlerGetNpc(this.props.index);
    let newPv: number = parseInt(strNewValue);
    if (isNaN(newPv)) {
      newPv = 0;
    }

    npc.currentHp = newPv;
    this.props.handlerSetNpc(npc, this.props.index);
  }

  handlePvSubtrair = () => {

    let npc: Npc = this.props.handlerGetNpc(this.props.index);

    let newPv: number = parseInt(npc.currentHp.toString());
    if (isNaN(newPv)) {
      newPv = 0;
    }

    npc.currentHp = npc.currentHp - newPv;
    npc.showModal = false;
    this.props.handlerSetNpc(npc, this.props.index);
  }

  handlePvSomar = () => {

    let npc: Npc = this.props.handlerGetNpc(this.props.index);

    let newPv: number = parseInt(npc.currentHp.toString());
    if (isNaN(newPv)) {
      newPv = 0;
    }

    npc.currentHp = npc.currentHp + newPv;
    npc.showModal = false;
    this.props.handlerSetNpc(npc, this.props.index);
  }


  handlePvAtribuir = () => {

    let npc: Npc = this.props.handlerGetNpc(this.props.index);

    let newPv: number = parseInt(npc.currentHp.toString());
    if (isNaN(newPv)) {
      newPv = 0;
    }

    npc.currentHp = newPv;
    npc.showModal = false;
    this.props.handlerSetNpc(npc, this.props.index);
  }

  handleVisible(): boolean {
    return this.props.handlerGetNpc(this.props.index).showModal;
  }

  render() {
    return (<Modal visible={this.props.handlerGetNpc(this.props.index).showModal}
    >
      <View  >
        <View   >
          <TextInput selectTextOnFocus onChangeText={this.handlePvTextChange} value={this.props.handlerGetNpc(this.props.index).currentHp.toString()} keyboardType='number-pad' />
          <Pressable
            onPress={this.handlePvSubtrair}>
            <Text >Subtrair</Text>
          </Pressable>
          <Pressable
            onPress={this.handlePvSomar}>
            <Text>Somar</Text>
          </Pressable>
          <Pressable
            onPress={this.handlePvAtribuir}>
            <Text >Atribuir</Text>
          </Pressable>
        </View>
      </View>
    </Modal >
    )
  }
}