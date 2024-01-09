import { Platform } from "react-native";
import * as FileSystem from 'expo-file-system'
import { shareAsync } from "expo-sharing";

export default class FileJsonBd {

    constructor() {
    }

    getMimeTypeJson() {
        return "application/json";
    }

    async fileExists(fileUri: string): Promise<FileSystem.FileInfo> {
        return await FileSystem.getInfoAsync(fileUri);
    }

    async writeFileAsync(uri: string, contentJson: string): Promise<void> {
        if (Platform.OS === "android") {
            const permissions = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();

            if (permissions.granted) {
                const contentJson = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.UTF8 });

                await FileSystem.writeAsStringAsync(uri, contentJson, { encoding: FileSystem.EncodingType.UTF8 });

            } else {
                shareAsync(uri);
            }
        } else {
            shareAsync(uri);
        }
    }

    async createFileAsync(uri: string, filenameWithoutExtension: string, contentJson: any): Promise<void> {
        let content: string = JSON.stringify(contentJson);

        if (Platform.OS === "android") {
            const permissions = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();

            if (permissions.granted) {

                await FileSystem.StorageAccessFramework.createFileAsync(permissions.directoryUri, filenameWithoutExtension, this.getMimeTypeJson())
                    .then(async (uri) => {
                        await FileSystem.writeAsStringAsync(uri, content, { encoding: FileSystem.EncodingType.UTF8 });
                    })
                    .catch(e => console.log(e));
            } else {
                shareAsync(uri);
            }
        } else {
            shareAsync(uri);
        }
    }

    async readFileAsync(fileUri: string): Promise<string> {
        return await FileSystem.readAsStringAsync(fileUri, { encoding: FileSystem.EncodingType.UTF8 });
    }
}