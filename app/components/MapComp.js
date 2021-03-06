import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import markers from './TempDB';
export default class MapComp extends Component {

    state = {}

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                const { latitude, longitude } = coords

                this.setState({
                    position: {
                        latitude,
                        longitude,
                    },
                    region: {
                        latitude,
                        longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }
                })
            },
            (error) => alert(JSON.stringify(error)),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        )
    }
    render() {

        const { region, position } = this.state

        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={region}
                >
                    {markers.map(marker => (
                        <MapView.Marker
                            key={marker.id}
                            coordinate={marker.coordinate}
                            title={marker.title}
                            description={marker.details}
                        />
                    ))}

                    {position && (
                        <MapView.Circle
                            center={position}
                            radius={300}
                            strokeColor={'transparent'}
                            fillColor={'rgba(112,185,213,0.30)'}
                        />
                    )}
                    {position && (
                        <MapView.Circle
                            center={position}
                            radius={100}
                            strokeColor={'transparent'}
                            fillColor={'#3594BC'}
                        />
                    )}
                </MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEE',
    },
    map: {
        flex: 1,
        zIndex: -1,
    }
})

