import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    borderBottomWidth: 10,
    borderBottomColor: '#f0f0f0',
  },
  
  headlineInfoContainer: {
    flexDirection: 'row',
  },

  headlineImage: {
    width: 75,
    height: 75,
    borderRadius: 5,
    marginRight: 20,
  },

  headlineTextContainer: {
    flex: 1,
    flexDirection: 'column',
  },

  countsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  
  count: {
    textAlign: 'center',
    flex: 1,
  }, 
  
  languageContainer: {
    marginTop: 4,
    alignItems: 'flex-start',
  },
  
  language: {
    backgroundColor: '#007acc',
    color: 'white',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 6,
  },
});

const formatCount = (count) => {
  if (count >= 1000 ) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toString();
}

const RepositoryItem = ({item}) => 
    <View style={styles.container}>
      <View style={styles.headlineInfoContainer}>
        <Image 
          style={styles.headlineImage}
          source={{ uri: item.ownerAvatarUrl }} />  
        <View style={styles.headlineText}>
          <Text fontWeight='bold' fontSize='subheading'>{item.fullName}</Text>
          <Text color='textSecondary'>{item.description}</Text>
          <View style={styles.languageContainer}>
            <Text style={styles.language}>{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.countsContainer}>
        <View style={styles.count}>
          <Text style={{ textAlign: 'center' }} fontWeight='bold'>{formatCount(item.stargazersCount)}</Text>
          <Text style={{ textAlign: 'center' }}>Stars</Text>  
        </View>
        <View style={styles.count}>
          <Text style={{ textAlign: 'center' }} fontWeight='bold'>{formatCount(item.forksCount)}</Text>
          <Text style={{ textAlign: 'center' }}>Forks</Text>  
        </View>
        <View style={styles.count}>
          <Text style={{ textAlign: 'center' }} fontWeight='bold'>{formatCount(item.reviewCount)}</Text>
          <Text style={{ textAlign: 'center' }}>Reviews</Text>  
        </View>
        <View style={styles.count}>
          <Text style={{ textAlign: 'center' }} fontWeight='bold'>{formatCount(item.ratingAverage)}</Text>
          <Text style={{ textAlign: 'center' }}>Rating</Text>  
        </View>
      </View>
    </View>

export default RepositoryItem;