import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../config/colors';

const { width, height } = Dimensions.get('window');

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
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: colors.text,
    textAlign: 'center',
  },
  lowerHalf: {
    flex: 1.9,
    backgroundColor: colors.secondary,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  text: {
    marginTop: 10,
    color: colors.text,
  },
});
