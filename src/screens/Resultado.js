import React, {useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {client} from '../networking/client';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

export function Resultado({navigation}) {
  const [resultados, setResultados] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      console.log('useFocusEffect::Resultado');
      client
        .get('/api/v1/encuestado/resultadoByMusic')
        .then(res => {
          console.log(res.data);
          setResultados(res.data);
        })
        .catch(err => {
          console.log(err, err.message);
        });
      return () => {};
    }, []),
  );

  const Item = ({musica, count}) => (
    <View style={styles.item}>
      <Text style={styles.title}>
        {musica}: {count}
      </Text>
    </View>
  );

  const renderItem = ({item}) => (
    <Item musica={item.tipoMusica} count={item.count} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={resultados}
        renderItem={renderItem}
        keyExtractor={item => item.tipoMusica}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#dedede',
    padding: 4,
    marginVertical: 4,
    fontSize: 16,
  },
  title: {
    fontSize: 16,
  },
});
