import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  inputContainer: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 12,
  },

  textInput: {
    flex: 1,
    fontSize: 16,
  },

  clearButton: {
    padding: 8,
    margin: -8,
  },

  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  listItem: {
    height: 48,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
})
