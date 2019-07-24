import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles';

class OrderPreview extends React.Component {

	render() {
        const { date, time, description, address, price } = this.props;
		return (
            <TouchableOpacity >
			<View style={ styles.order }>
                <View style={ styles.orderDate }>
                    <Text style={ styles.orderDateSize }>{ date }</Text>
                    <Text style={ styles.orderTimeSize }>{ time }</Text>
                </View>
                <View style={ styles.orderDescription }>
                    <Text style={ styles.orderDescriptionHeader }>{ description }</Text>
                        <View style={ styles.orderPriceAddress }>
                            <View style={ styles.indentRight }>
                                <Text style={ styles.orderDescriptionPrice }>{ price }</Text>
                            </View>
                            <View>
                                <Text style={ styles.orderDescriptionAddress }>{ address }</Text>
                            </View>
                        </View>
                </View>                    
            </View>
            </TouchableOpacity>
		);
	}
}

export default OrderPreview;
