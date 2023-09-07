import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useAuth0} from 'react-native-auth0';

export function Profile() {
  const {user} = useAuth0();

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Auth0Sample - Profile </Text>
      <Text>Hello {user?.name} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
