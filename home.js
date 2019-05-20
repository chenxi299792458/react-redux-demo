import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { increase, decrease, reset } from './actions';
import Counter from './counter';

class Home extends Component {
  _onPressReset() {
    this.props.dispatch(reset());
  }

  _onPressInc() {
    this.props.dispatch(increase());
  }

  _onPressDec() {
    this.props.dispatch(decrease());
  }

  shouldComponentUpdate(newProps, newState) {
    console.log('home update')
    console.log(newProps)
    console.log(this.props)
    console.log(newState)
    console.log(this.state)
    return false;
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.counter}>{this.props.counter.count}</Text>
        <Counter />
        <TouchableOpacity style={styles.start} onPress={()=>this._onPressReset()}>
          <Text>归零</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.start} onPress={()=>this._onPressInc()}>
          <Text>加1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.start} onPress={()=>this._onPressDec()}>
          <Text>减1</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    }, 
    counter: {
        fontSize: 30,
        marginTop: 50,
    },
    start: {
        fontSize: 30,
        marginTop: 50,
    }
})

const mapStateToProps = state => ({
    counter: state.counter
})

export default connect(mapStateToProps)(Home);