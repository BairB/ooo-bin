import React from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from '../styles'


class Spisok extends React.Component {

	render() {
		return (
			<View>
                <Text onPress={this.menu1} style={ styles.otstup }>Menu1</Text>
                <Text onPress={this.menu2} style={ styles.otstup }>Menu2</Text>
				<Text onPress={this.menu3} style={ styles.otstup }>Заказы</Text>
            </View>
		);
	}

	menu1 = () => {		
		this.props.navigation.navigate('Menu1');
	};
	menu2 = () => {
		this.props.navigation.navigate('Menu2');
	};
	menu3 = () => {
		this.props.navigation.navigate('Or');
	};
}

export default Spisok;
