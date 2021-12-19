import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
     button: {
      backgroundColor: '#0782F9',
      width: '60%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 40,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    title: {
      marginTop: 20,
      marginBottom: 30,
      fontSize: 28,
      fontWeight: '500'
    },
    row: {
      paddingRight: 10,
      paddingLeft: 5,
      paddingVertical: 5,
      flexDirection: 'row',
      alignItems: 'center'
    },
    content: {
      flexShrink: 1
    },
    header: {
      flexDirection: 'row'
    },
    nameText: {
      fontWeight: '600',
      fontSize: 18,
      color: '#000'
    },
    dateText: {},
    contentText: {
      color: '#949494',
      fontSize: 16,
      marginTop: 2
    },
  })

export default styles;