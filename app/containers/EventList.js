import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Event from './Event';
import markers from '../components/TempDB';

class EventList extends Component {
    // state = { data: Fake_Data }

    renderEvents() {
        return markers.map(event =>
            <Event key={event.id} event={event} />);
    }

    render() {
        return (
            <ScrollView>
                {this.renderEvents()}
            </ScrollView>
        );
    }
}

export default EventList;