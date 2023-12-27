import { Text, SafeAreaView, StatusBar, FlatList } from 'react-native';
import { labels } from "../../models/labels";
import { cssInitiative as css } from "./initiative-style";
import React, { Component } from 'react';
import Ctx from '../../models/context';
import NpcPage from "../npc/npc-page";


export default class InitiativePage extends  Component {


    render() {
        let ctx: Ctx = new Ctx();

        return <SafeAreaView style={css.bodyContainer} >
            <StatusBar />
            <Text style={css.lblTitle}>{labels.initiative.title}</Text>
            
            <FlatList style={css.listaNpcsView}
                ListHeaderComponent = { <Text style={css.npcLblHeaderTitle}>{labels.npc.lblListTitle}</Text>}
                data={ctx.npcs}
                renderItem={({ item }) => <NpcPage npc={item} />}
                keyExtractor={(item, index) => index.toString()}
            />
        
        </SafeAreaView>
    }
}