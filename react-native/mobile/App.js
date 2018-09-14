/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Platform, TouchableOpacity, } from 'react-native';
import Repo from './components/Repo';
import NewRepoModal from './components/NewRepoModal';


export default class App extends Component {

  state = {
    repos: [
      {
      id: 1,
      thumbnail: 'https://avatars0.githubusercontent.com/u/30573043?s=460&v=4',
      title: 'Github Felipe',
      author: 'FelipePM',
      },
      {
        id: 2,
        thumbnail: 'https://avatars3.githubusercontent.com/u/4096456?s=460&v=4',
        title: 'Github Marco Bruno',
        author: 'MarcoBrunoBR',
        },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Minicurso Gonative</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.headerButton}>+</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.repoList}>  
          { this.state.repos.map(repo => <Repo key={repo.id} data={repo} />) }
        </ScrollView> 

        <NewRepoModal />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },

  header: {
    height: (Platform.OS === 'ios') ? 70 : 50,
    paddingTop: (Platform.OS === 'ios') ? 30 : 0,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  headerButton: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  repoList: {
    padding: 20,
  },

});
