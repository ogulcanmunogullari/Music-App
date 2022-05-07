import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    marginVertical: 2,
    backgroundColor: 'white',
  },
  ortaContainer: {
    justifyContent: 'space-around',
    marginLeft: 20,
    flex: 1,
  },
  ortaIcContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tukendi: {
    marginLeft: 'auto',
    borderColor: 'red',
    borderWidth: 1,
    padding: 5,
    color: 'red',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  artist: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  year: {
    fontSize: 12,
    marginLeft: 20,
    marginTop: 10,
  },
});

export default style;
