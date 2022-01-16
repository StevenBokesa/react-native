
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AuthProvider } from './src/navigation/AuthProvider';
import Routes from './src/navigation/Routes';



export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});