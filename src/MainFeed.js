
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import MapView from 'react-native-maps';

export default class MainFeed extends Component {


    constructor(props) {
        super(props);
        this.state = {
            markers: [
                {latlng: {latitude: -34.397, longitude: 150.644}},

         ]
        };

    }

    render() {
        return (
            <View style={styles.container}>
                <MapView style={styles.map} provider={MapView.PROVIDER_GOOGLE}
                         initialRegion={{
                             latitude: -34.33825,
                             longitude: 150.66624,
                             latitudeDelta: 0.0922,
                             longitudeDelta: 0.0421,
                         }}>

                    {this.state.markers.map(marker => (
                        <MapView.Marker
                            coordinate={marker.latlng}

                        />
                    ))}

                    </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    map: {
        position: 'absolute',
        top: 0,
        bottom:0,
        left: 0,
        right:0,
    }
});
