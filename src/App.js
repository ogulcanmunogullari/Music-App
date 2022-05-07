import React, {useState, useEffect} from 'react';
import {View, FlatList, TextInput, StyleSheet} from 'react-native';
import music from './music-data.json';
import Cards from './Cards';
export default function App() {
  const [search, setSearch] = useState('');
  const [bul, setBul] = useState(music);
  useEffect(() => {
    search !== (' ' || '')
      ? setBul(
          music.filter(item =>
            item.title.toLowerCase().includes(search.toLowerCase()),
          ),
        )
      : null;
  }, [search]);

  const renderCard = ({item}) => (
    <Cards
      title={item.title}
      image={item.imageUrl}
      isSold={item.isSoldOut}
      artist={item.artist}
      year={item.year}
    />
  );
  return (
    <View style={style.container}>
      <View style={style.inputBG}>
        <TextInput
          style={style.input}
          onChangeText={setSearch}
          placeholder="Ara..."
        />
      </View>
      <FlatList
        style={style.flat}
        data={bul}
        keyExtractor={item => item.id}
        renderItem={renderCard}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flex: 1,
  },
  inputBG: {
    backgroundColor: 'white',
  },
  flat: {
    flex: 1,
  },
  input: {
    backgroundColor: 'lightgrey',
    paddingHorizontal: 20,
    margin: 10,
    borderRadius: 20,
  },
});
