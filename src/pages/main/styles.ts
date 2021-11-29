import {StyleSheet} from "react-native"
import colors from "../../theme/colors";

export default StyleSheet.create({
    container: {
      paddingTop: 70,
      paddingLeft: 30,
    },
    containerTitle: {
      fontSize: 28,
      fontWeight: 'bold',
      textShadowColor: colors.grayScale.light,
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
    },
    mainSection: {
      marginTop: 40,
      flexDirection: 'row',
      alignItems: 'center',
    },
    refreshImage: {
      marginRight: 15,
    },
    upgradeText: {
      fontSize: 16,
      fontWeight: 'bold',
      textShadowColor: colors.grayScale.light,
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
    },
  });
  