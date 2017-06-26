import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (album) => {
  const {thumbnail_image, title, artist, url} = album;
  const {thumbnailContentStyle, headerContentStyle, thumbnailStyle, headerTextSyles} = styles;

  return (
    <Card>

      <CardSection>
      <Image
      styles={styles.thumbnailStyle}
      source={{url: props.album.thumbnail_image}} 
      />

      <View style={styles.headerContentStyle}>
        <Text>{title}</Text>
        <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
      <Image 
        style ={ ImageStyle }
        source ={{ uri: image }} 
        />
      </CardSection>

      <CardSection>
        <Button onPress= {() => Linking.openUrl(url)}>
          Buy Now
        </Button>
      </CardSection>

  </Card>
  );
};

const styles = {
   headerContentStyle: {
     flexDirection: 'column',
     justifyContent: 'space-around',
   }
   headerTextSyles: {


   }
   thumbnailStyle: {
     height: 50,
     width: 50,
   }
  thumbnailContentStyle: {
    justifyContent:'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight:10
  }
};

export default AlbumDetail;
