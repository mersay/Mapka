
import React, { Component } from 'react';
import {
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

let{ height, width } = Dimensions.get('window');
import MapCard from './components/MapCard';
import AppData from '../AppData';
export default class MainFeed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trips: AppData.trips
        };

    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}
                        centerContent={false}
                        directionalLockEnabled={true}>
                {this.state.trips.map((trip,i) => <MapCard key={i} style={styles.card} points={trip}>erere</MapCard>)}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        alignItems: 'flex-start',
        backgroundColor: 'white',
        marginHorizontal:10,
    },
    card: {
        paddingVertical: 20,
    }
});
