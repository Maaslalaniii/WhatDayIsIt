import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

// Colours
const primaryColour = '#34495e';
const secondaryColour = '#2C3E50';

// Dimensions
const { height, width } = Dimensions.get('window');


const styles = StyleSheet.create({
  // App styles
  container: {
    flex: 1
  },

  // Home page
  home: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  header: {
    height: 60,
    width: width,
    backgroundColor: primaryColour,
    justifyContent: 'center',
    paddingLeft: 20
  },
  headerTitle: {
    fontSize: 18,
    color: '#FFFFFF'
  },

  // Events page
  heading: {
    fontSize: 20,
    padding: 20,
    fontWeight: 'bold'
  },
  event: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE'
  },
  eventDate: {
    fontSize: 16
  },
  eventEvent: {

  },

  // Days page
  days: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EEE'
  },
  date: {

  },
  day: {
    fontSize: 18,
    margin: 5
  },
  loading: {
    textAlign: 'center',
    marginTop: 30
  },

  // Schedule page

});

module.exports = styles;