import { StyleSheet } from 'react-native';
import colors from '../../../config/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  upperHalf: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerHalf: {
    flex: 2,
    backgroundColor: colors.secondary,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingVertical: 30,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  heading:{
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.text,
    paddingTop:0,
    paddingBottom:10,
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.text,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: colors.text,
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: colors.inputBackground,
    color: colors.text,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: colors.button,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    color:colors.button_text
  },
  buttonText: {
    color: colors.buttonText,
    fontSize: 16,
    fontWeight: '600',
  },
});
