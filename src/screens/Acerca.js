import {Button, Text, View} from 'react-native';
import React from 'react';
import {useNetInfo} from '@react-native-community/netinfo';

export function AcercaDe({navigation}) {
  const netInfo = useNetInfo();
  console.log('hola', netInfo);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //width: '90%',
        //backgroundColor: 'red',
      }}>
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          //backgroundColor: 'green',
          padding: 16,
        }}>
        Aplicación desarrollada por Tyare Vilches para 3IT
      </Text>
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          //backgroundColor: 'green',
          padding: 16,
        }}>
        Este dispositivo está conectado a red {netInfo.type}.
      </Text>
      <Button onPress={() => navigation.goBack()} title="Volver" />
    </View>
  );
}
