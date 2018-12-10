import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import ajax from '../ajax';
import NewsList from './NewsList';

class App extends React.Component {
  state = {
    news: [],
  };
  async componentDidMount() {
    const news = await ajax.fetchInitialNews();
    this.setState({ news });
  }
  render() {
    return(
      <View style={styles.container}>
        {this.state.news.length > 0 ?
        (<NewsList news={this.state.news}/>) :
        (<Text style={styles.header}>What's Happening</Text>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    marginTop: 30,
  },
  header: {
    fontSize: 40,
  },
});

export default App;
