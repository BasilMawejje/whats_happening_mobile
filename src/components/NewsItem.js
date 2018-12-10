import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

class NewsItem extends React.Component {
  static propTypes = {
    newSingle: PropTypes.object.isRequired,
  };
  render() {
    const { newSingle } = this.props;
    return (
      <TouchableOpacity style={styles.news}>
        <Image source={{ uri: newSingle.urlToImage }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.title}>{newSingle.title}</Text>
          <View style={styles.footer}>
            <Text style={styles.cause}>{newSingle.author}</Text>
            <Text style={styles.price}>{newSingle.source.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  news: {
    marginHorizontal: 12,
    marginTop: 12,
  },
  image: {
    width: '100%',
    height: 250,
    backgroundColor: '#ccc',
  },
  info: {
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#bbb',
    borderWidth: 1,
    borderTopWidth: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  footer: {
    flexDirection: 'row',
  },
  cause: {
    flex: 2,
  },
  price: {
    flex: 1,
    textAlign: 'right',
  },
});

export default NewsItem;
