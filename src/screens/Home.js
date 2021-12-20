import React, {useEffect, useState} from 'react';
import {client} from '../networking/client';
import {
  Button,
  Picker,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from 'react-native';

const mensajeAlert = (titulo, mensaje) =>
  Alert.alert(titulo, mensaje, [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);

export function Home({navigation}) {
  const [selectedValue, setSelectedValue] = useState('Rock');
  const [email, onChangeEmail] = React.useState(null);
  const [isOffline, setOfflineStatus] = useState(false);

  const enviar = () => {
    console.log('Funcion enviar');
    const data = {
      email: email,
      tipoMusica: selectedValue,
    };
    console.log(data, selectedValue);
    client
      .post('/api/v1/encuestado', data)
      .then(res => {
        console.log('enviado', res.data);
        mensajeAlert('Encuesta enviada', '¡Gracias por participar!');
      })
      .catch(err => {
        console.log('error', err);
        mensajeAlert('Advertencia', 'Usuario ya envió la encuesta');
      });
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.titleText}> Estilo musical </Text>
      <View style={styles.picker}>
        <Picker
          selectedValue={selectedValue}
          mode={'dropdown'}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="Rock" value="Rock" />
          <Picker.Item label="Pop" value="Pop" />
          <Picker.Item label="Clásica" value="Clasica" />
          <Picker.Item label="Blues" value="Blues" />
          <Picker.Item label="Salsa" value="Salsa" />
        </Picker>
      </View>
      <Text style={styles.titleText}>Correo electrónico</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Ingresar correo"
        keyboardType={'email-address'}
      />
      <Button
        style={styles.formatButton}
        onPress={enviar}
        title="Enviar encuesta"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingTop: 16,
  },
  input: {
    height: 50,
    margin: 4,
    borderWidth: 1,
    padding: 10,
    width: '50%',
    marginBottom: 24,
    backgroundColor: 'white',
  },
  picker: {
    height: 50,
    width: '50%',
    margin: 4,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    paddingTop: 16,
    marginHorizontal: 16,
  },
  header: {
    fontSize: 24,
    backgroundColor: '#b9dbf5',
  },
  title: {
    fontSize: 16,
  },
});
