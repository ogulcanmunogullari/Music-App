import React from 'react';
import {View, Text, Image} from 'react-native';
import style from './Style_Cards';

export default function Cards(props) {
  return (
    <View style={style.container}>
      <Image style={style.image} source={{uri: props.image}} />
      <View style={style.ortaContainer}>
        <Text style={style.title}>{props.title}</Text>
        <View style={style.ortaIcContainer}>
          <Text style={style.artist}>{props.artist}</Text>
          <Text style={style.year}>{props.year}</Text>
          {props.isSold && <Text style={style.tukendi}>Tükendi</Text>}
        </View>
      </View>
    </View>
  );
}
