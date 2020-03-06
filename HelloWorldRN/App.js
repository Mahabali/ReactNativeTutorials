import React, { Component } from 'react';
import {
  StatusBar,
  SafeAreaView,
  View,
  Text, 
  StyleSheet
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    // initial method
  };
  render() {
    return (
      <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}> 
        <Text style={styles.textStyle}>Hello World!</Text>
      </SafeAreaView>
    </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle:{
    fontWeight:"bold",
    fontSize:18,
  }
});

export default App;