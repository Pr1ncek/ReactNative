import React, { Component } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

export default class AlbumDetail extends Component {
  render() {
    const { thumbnail_image, title, artist, image } = this.props.album;
    const {
      thumbnailStyle,
      headerContentStyle,
      thumbnailContainerStyle,
      headerTextStyle,
      albumCoverStyle
    } = styles;
    return (
      <Card>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
          </View>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image source={{ uri: image }} style={albumCoverStyle} />
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  headerContentStyle: {
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    width: 50,
    height: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  albumCoverStyle: {
    height: 300,
    flex: 1,
    width: null
  }
});
