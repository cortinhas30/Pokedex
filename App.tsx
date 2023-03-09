/* eslint-disable prettier/prettier */
import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  Text,
  useColorScheme,
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import PokemonList from './src/components/PokemonList';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <SafeAreaView>
        <PokemonList />
      </SafeAreaView>
    </Provider>
  );
};


export default App;
