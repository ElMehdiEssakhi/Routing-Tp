import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen({ route }) { 
  return ( 
    <View style={styles.container}> 
      <Text style={styles.title}>📄 Écran de détails</Text> 
      {route.params && <Text style={styles.idText}>ID reçu : {route.params.id}</Text>} 
    </View> 
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  idText: {
    fontSize: 18,
    color: '#555',
  },
});