import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';

const topPadding = Constants.statusBarHeight;
const bottomPadding = topPadding / 3

const styles = StyleSheet.create({
  appBarStyle: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: bottomPadding,
    backgroundColor: theme.colors.appBarBackground,
  },
  text: {
    marginHorizontal: 20
  }

});

const AppBar = () => {
  const handlePress = () => {
    console.log('Repositories Pressed')
  }
  
  return (
    <Pressable onPress={handlePress}>
      <View style={styles.appBarStyle}>
        <Text color="textTertiary" fontWeight='bold' style={styles.text}>
          Repositories
        </Text>
      </View>
    </Pressable>
  );
};

export default AppBar;