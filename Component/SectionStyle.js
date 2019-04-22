import { StyleSheet } from 'react-native'
import Constant from './Constant'

export const styles = StyleSheet.create({
  fullScreenWidth: {
    margin: 0,
    width: Constant.CONTAINER_WIDTH,
  },
  scrollContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: Constant.CONTAINER_WIDTH,
  },
  secondaryContainer: {
    marginBottom: 0,
    marginRight: 0,
    padding: 0,
  },
})

