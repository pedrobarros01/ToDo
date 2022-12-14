import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    backgroundToDo:{
        flex: 1,
        padding: 24,
        alignItems: 'center',
        width: '100%'
    },
    form:{
        flexDirection: "row",
        alignItems: 'center',
        width: '100%'
    },
    button: {
        height: 56,
        width: 56,
        backgroundColor: '#4EA8DE',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'

    },
    textButton: {
        color: '#FFF'
    },
    input: {
        flex: 1,
        backgroundColor: '#262626',
        borderRadius: 12,
        height: 56,
        marginRight: 12,
        paddingLeft: 12,
        color: '#F2F2F2'
    },
    contagemBox:{
        flexDirection: 'row',
        width: '100%',
        height: 100,
        justifyContent: 'space-between',
        paddingRight: 18
    },
    list: {
        borderTopWidth: 1,
        borderTopColor: '#333333',
        width: '100%',
        flex: 1,
        paddingTop: 12
    }
    
});