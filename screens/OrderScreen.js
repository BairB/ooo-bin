import React from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from '../styles';
import OrderPreview from '../components/OrderPreview'
import { ScrollView } from 'react-native-gesture-handler';




class OrderScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			orders: [
			{id:1, date:'31.05', time:'23:10', address:'Pushkina 2F', price:42, description:'Краткое описание краткое описание'},
			{id:2, date:'31.05', time:'23:10', address:'Pushkina 2F', price:42, description:'Краткое описание краткое опи'},
			{id:3, date:'31.05', time:'23:10', address:'Pushkina 2F', price:42, description:'Краткое описание краткое опи'},
			{id:4, date:'31.05', time:'23:10', address:'Pushkina 2F', price:42, description:'Краткое описание краткое опи'},
			{id:5, date:'31.05', time:'23:10', address:'Pushkina 2F', price:42, description:'Краткое описание краткое опи'},
			{id:6, date:'31.05', time:'23:10', address:'Pushkina 2F', price:42, description:'Краткое описание краткое опи'},
			{id:7, date:'31.05', time:'23:10', address:'Pushkina 2F', price:42, description:'Краткое описание краткое опи'},
			{id:8, date:'31.05', time:'23:10', address:'Pushkina 2F', price:42, description:'Краткое описание краткое опи'},
			{id:9, date:'31.05', time:'23:10', address:'Pushkina 2F', price:42, description:'Краткое описание краткое опи'},
			{id:10, date:'31.05', time:'23:10', address:'Pushkina 2F', price:42, description:'Краткое описание краткое опи'},
			{id:11, date:'31.05', time:'23:10', address:'Pushkina 2F', price:42, description:'Краткое описание краткое опи'},
			]
		}
	}
	static navigationOptions = {
        title: 'Заявки'
    };

	render() {
		const { orders } = this.state;
		return (
			<View style={ styles.orderScreen }>
				<View style={ styles.orderScreenText }><Text>{ orders.length } заявок</Text></View>
					<ScrollView>
								{ orders.map( (order) => (<OrderPreview 
															key={ order.id } 
															date={ order.date }
															time={ order.time }
															address={ order.address }
															price={ order.price }
															description={ order.description }
															/>) )}
					</ScrollView>
			</View>
		);
	}
}

export default OrderScreen;
