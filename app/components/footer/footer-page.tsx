import { Pressable, SafeAreaView, Text, TextInput } from 'react-native';
import { labels } from "../../models/labels";
import React, { Component } from 'react';
import { cssFooter as css } from "./footer-style";



export default class FooterPage extends Component<{ sortList(), nextTurn(), previousTurn(), getTurn(), addNpc(), clearAllNpc(), addTextChange(text: string), clearAllList() }> {


    render() {

        return (
            <SafeAreaView style={css.vwFooter} >

                <SafeAreaView style={css.vwFooterRowAddLimpar}>
 
                    <Pressable style={css.btnLimpar} onPress={this.props.clearAllNpc} >
                        <Text style={css.lblBtnLimpar}>{labels.header.btnDelNpcLabel}</Text>
                    </Pressable>
                    
                    <Pressable style={css.btnLimpar} onPress={this.props.clearAllList} >
                        <Text style={css.lblBtnLimpar}>{labels.header.btnDelAllLabel}</Text>
                    </Pressable>
                </SafeAreaView>

            </SafeAreaView>
        )
    }
}
