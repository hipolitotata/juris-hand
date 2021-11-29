import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

export default StyleSheet.create({
  modalStyle: {
    margin: 0,
  },
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  buttonSubscribe: {
    width: 250,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.button.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    backgroundColor: colors.commom.white,
    marginTop: 25,
  },
  buttonSubscribeText: {
    color: colors.button.primary,
    fontWeight: 'bold',
  },
  textSubscribe: {
    fontWeight: 'bold',
  },
  mainSection: {
    position: 'relative',
    backgroundColor: colors.background.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    top: 50,
    marginHorizontal: 27,
    paddingHorizontal: 30,
    paddingVertical: 45,
    borderRadius: 5,
    shadowColor: colors.commom.black,
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
    elevation: 22,
  },
  titleText: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.background.primary,
  },
  labelSubscribeText: {
    color: colors.background.primary,
    fontSize: 20,
    textAlign: 'center',
  },
  imageContainer: {
    marginVertical: "5%",
  },
  closeImage: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  backImage: {
    top: 25,
    left: 35,
  },
  textSignatureWarn: {
    top: "12%",
    fontSize: 15,
    width: 280,
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.background.primaryDark,
    alignSelf: "center"
  },
});
