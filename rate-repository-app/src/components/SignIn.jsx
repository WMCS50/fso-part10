import Text from './Text';
import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { Formik, useField } from 'formik';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import * as yup from 'yup';

const initialValues = {
  username: '',
  password: '',
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.normal,
    paddingVertical: 20,
    margin: 20,
  },
  buttonText: {
    color: theme.colors.textTertiary,
    textAlign: 'center',
  }
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
})

const SignInForm = ({ onSubmit }) => {
  return (
  <View>
    <FormikTextInput name='username' placeholder='Username' />
    <FormikTextInput name='password' placeholder='Password' secureTextEntry={true}/>
    <Pressable onPress={onSubmit} style={styles.button}>
      <Text style={styles.buttonText}>Sign in</Text>
    </Pressable>
  </View>
  );
};

const SignIn = () => {
  const onSubmit = values => {
    const username = values.username;
    const password = values.password;
    console.log(username);
    console.log(password);
  }
  return (
    <Formik 
      initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignIn;