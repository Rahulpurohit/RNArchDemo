import React, { Component } from 'react';
import { FlatList, SafeAreaView, StatusBar, View } from 'react-native';
import colors from '../../color';
import Header from '../../component/Header/Header';
import { SmartTextInput } from '../../component/SmartTextInput/SmartTextInput';
import Row from './Row/Row';
import { Spinner, Toast } from 'native-base';

export class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { page: 1, data: [] };
		this.onEndReachedCalledDuringMomentum = true;
	}
	shouldComponentUpdate(nextProps, nextState, nextContext) {
		if (nextState.page != this.state.page) {
			this.props.getList({ page: this.state.page });
			return true;
		}
		return true;
	}

	componentDidMount() {
		this.props.getList({ page: this.state.page });
	}

	_keyExtractor = (item, index) => item.id;

	render() {
		const { isFetching } = this.props.list;
		return (
			<SafeAreaView style={{ flex: 1, backgroundColor: colors.black }}>
				{this.props.list.data && (
					<FlatList
						onMomentumScrollBegin={() => {
							this.onEndReachedCalledDuringMomentum = false;
						}}
						data={this.props.list.data.data ? this.props.list.data.data : []}
						renderItem={({ item, index }) => <Row {...item} index={index} />}
						onEndReached={({ distanceFromEnd }) => {
							if (distanceFromEnd >= 0) {
								const total_pages = this.props.list ? this.props.list.data.total_pages : 1;
								if (this.state.page < total_pages) this.setState({ page: this.state.page + 1 });
							}
						}}
						onEndReachedThreshold={0.8}
					/>
				)}
				{isFetching && <Spinner />}
			</SafeAreaView>
		);
	}
}
