import { StyleSheet, Dimensions } from 'react-native';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const styles = StyleSheet.create({

    otstup: {
     padding: 20
    },

    order: {
        backgroundColor: '#A9F5A9',
        flexDirection: 'row',
        alignItems: 'center',
        height: 70,
        width: WIDTH-40,
        justifyContent: 'flex-start',
        marginBottom: 5,
       },

    orderDate: {
        marginRight: 6,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        backgroundColor: '#F2F2F2',
        borderRadius: 3,
       },

    orderDateSize: {
        fontSize:18
       },

    orderTimeSize: {
        fontSize:12
       },
    
    orderDescription: {
        height: 55,
        flexDirection: 'column',
        justifyContent: 'flex-start',
       },

    orderDescriptionHeader: {
        fontSize:16,
        color: '#A4A4A4'
       },

    orderDescriptionPrice: {
        fontSize:12
       },

    orderDescriptionAddress: {
        fontSize:10,
       },

    orderPriceAddress: {
        paddingTop:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
       },

    indentRight : {
        marginRight: 5
    },
    orderScreen: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#58D3F7'
        },
    orderScreenText: {
        color: '#A4A4A4',
        height: 20,
        textAlign: 'right',
        },
});
export default styles;
