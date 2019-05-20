import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';

class Counter extends Component {

    shouldComponentUpdate(newProps, newState) {
        console.log('Counter update')
        console.log(newProps)
        console.log(this.props)
        console.log(newState)
        console.log(this.state)
        return true;
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.counter}>{this.props.counter.count}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    counter: {
        fontSize: 30,
        marginTop: 50
    },
    start: {
        fontSize: 30,
        marginTop: 50
    }
})

const mapStateToProps = state => ({counter: state.counter})

export default connect(mapStateToProps)(Counter);