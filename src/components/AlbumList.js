import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetails';

export default class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: [] };
  }

  componentWillMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => {
        console.log(response);
        this.setState({ albums: response.data });
      });
  }

  renderAlbums() {
    return (
      <View>
        {this.state.albums.map(album => (
          <AlbumDetail key={album.title} album={album} />
        ))}
      </View>
    );
  }

  render() {
    return this.renderAlbums();
  }
}
