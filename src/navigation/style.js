// styles.js
import { StyleSheet } from 'react-native';
import colors from '../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor:colors.cardBg,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    padding:50,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#C4C4C4',
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color:colors.cardText
  },
  profileButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: '#6A5ACD',
    borderRadius: 5,
   
  },
  profileButtonText: {
    color:colors.cardText,
    fontSize: 14,
  },
  menuSection: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  menuText: {
    fontSize: 20,
    marginLeft: 15,
  },
  logoutItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  logoutText: {
    fontSize: 20,
    marginLeft: 15,
    color: colors.textDanger
  },
});

export default styles;
