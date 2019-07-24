import React from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles';

class Menu1 extends React.Component {

	render() {
		return (
			<TouchableOpacity >
			<View style={ styles.order }>
                <View style={ styles.orderDate }>
                    <Text style={ styles.orderDateSize }>23-05-2019</Text>
                    <Text style={ styles.orderTimeSize }>24-63</Text>
                </View>
                <View style={ styles.orderDescription }>
                    <Text style={ styles.orderDescriptionHeader }>форворвофывофвр</Text>
                        <View style={ styles.orderPriceAddress }>
                            <View style={ styles.indentRight }>
                                <Text style={ styles.orderDescriptionPrice }>6359</Text>
                            </View>
                            <View>
                                <Text style={ styles.orderDescriptionAddress }>гагарина 22 3</Text>
                            </View>
                        </View>
                </View>                    
            </View>
            </TouchableOpacity>
		);
	}
}

export default Menu1;
