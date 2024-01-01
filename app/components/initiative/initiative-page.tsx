import { Text, SafeAreaView, StatusBar, FlatList } from 'react-native';
import { labels } from "../../models/labels";
import { cssInitiative as css } from "./initiative-style";
import React, { Component } from 'react';
import Ctx from '../../models/context';
import NpcPage from "../npc/npc-page";
import HeaderPage from '../header/header-page';


export default class InitiativePage extends  Component {

    render() {
        let ctx: Ctx = new Ctx();

        return <SafeAreaView style={css.bodyContainer} >
            <StatusBar />
            <Text style={css.lblTitle}>{labels.initiative.title}</Text>
            <HeaderPage ctx={ctx} />
            
            <FlatList style={css.listaNpcsView}
                data={ctx.npcs}
                renderItem={({ item }) => <NpcPage npc={item} />}
                keyExtractor={(item, index) => index.toString()}
            />
        
        </SafeAreaView>
    }
}