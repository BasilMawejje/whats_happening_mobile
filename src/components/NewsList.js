import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, StyleSheet } from 'react-native';
import NewsItem from './NewsItem';

class NewsList extends React.Component {
  static propTypes = {
    news: PropTypes.array.isRequired,
  };
  render() {
    return (
      <View style={styles.list}>
        <FlatList
          data={this.props.news}
          renderItem={({ item }) => (
            <NewsItem newSingle={item} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#eee',
    width: '100%',
  },
});

export default NewsList;
