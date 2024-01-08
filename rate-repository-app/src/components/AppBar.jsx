import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';
import useMe from '../hooks/useMe';
import useSignOut from '../hooks/useSignOut';


const topPadding = Constants.statusBarHeight;
const bottomPadding = topPadding / 3

const styles = StyleSheet.create({
  appBarStyle: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: bottomPadding,
    backgroundColor: theme.colors.appBarBackground,
    flexDirection: 'row',
  },
  text: {
    color: theme.colors.textTertiary,
    fontWeight: theme.fontWeights.bold,
    marginHorizontal: 20
  }

});

const AppBar = () => {
  const { currentUser } = useMe();
  console.log('current User', currentUser);
  const [signOut] = useSignOut();

  const handleSignOut = async () => {
    signOut();
  }

  return (
    <View style={styles.appBarStyle}>
      <ScrollView horizontal>
        <Link to="/">
          <Text style={styles.text}>Repositories</Text>
        </Link>
        {currentUser ? (
          <Text style={styles.text} onPress={handleSignOut}>Sign Out</Text>
        ) : (
          <Link to="/SignIn">
            <Text style={styles.text}>Sign In</Text>
          </Link>
        )}
      </ScrollView>
    </View>
      
  );
};

export default AppBar;

{/* <View style={styles.appBarStyle}>
<ScrollView horizontal>
  <Link to="/">
    <Text style={styles.text}>Repositories</Text>
  </Link>
  <Link to="/SignIn">
    <Text style={styles.text}>Sign In</Text>
  </Link>
</ScrollView>
</View> */}