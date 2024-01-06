import { Pressable, SafeAreaView, Text, TextInput } from 'react-native';
import { labels } from "../../models/labels";
import React, { Component } from 'react';
import { cssFooter as css } from "./footer-style";



export default class FooterPage extends Component<{ sortList(), nextTurn(), previousTurn(), getTurn(), addNpc(), clearAllNpc(), addTextChange(text: string), clearAllList() }> {


    render() {

        return (
            <SafeAreaView style={css.vwFooter} >

                <SafeAreaView style={css.vwFooterRowAddLimpar}>

                    <SafeAreaView style={css.vwFooterAddCtrl} >
                        <Pressable style={css.btnAddNpc} onPress={this.props.addNpc}  >
                            <Text style={css.lblBtnAddNpc}>{labels.header.btnAddNpcLabel}</Text>
                        </Pressable>

                        <TextInput style={css.txtAddNpc} keyboardType="default" onChangeText={this.props.addTextChange}></TextInput>
                    </SafeAreaView>
                    
                    <Pressable style={css.btnLimpar} onPress={this.props.clearAllNpc} onLongPress={this.props.clearAllList} >
                        <Text style={css.lblBtnLimpar}>{labels.header.btnDelNpcLabel}</Text>
                    </Pressable>
                    
                </SafeAreaView>

            </SafeAreaView>
        )
    }
}
