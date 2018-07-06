import React, { Component } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

export default class AlbumDetail extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <View>
            <Image
              source={{ uri: this.props.album.image }}
              style={{ width: 50, height: 50 }}
            />
          </View>
          <View style={styles.albumTitle}>
            <Text>{this.props.album.title}</Text>
            <Text>{this.props.album.artist}</Text>
          </View>
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  albumTitle: {
    justifyContent: 'space-around',
    paddingLeft: 10
  },
});
