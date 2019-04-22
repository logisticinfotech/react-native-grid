import { Dimensions } from 'react-native'

// constants
const DEVICE_WIDTH = Dimensions.get('window').width
const DEVICE_HEIGHT = Dimensions.get('window').height

const SQUARE_WIDTH_PERCENT = 8.1333 / 100
const GUTTER_WIDTH_PERCENT = 2.6667 / 100
const CONTAINER_WIDTH_PERCENTAGE = 100 / 100

const SQUARE_WIDTH = DEVICE_WIDTH * SQUARE_WIDTH_PERCENT
const GUTTER_WIDTH = DEVICE_WIDTH * GUTTER_WIDTH_PERCENT

const CONTAINER_WIDTH = DEVICE_WIDTH * CONTAINER_WIDTH_PERCENTAGE

const CONTAINER_HEIGHT = DEVICE_HEIGHT

// functions
export function getSectionSize(xSquares = 1, ySquares = 1, fullScreenWidth = false) {
  let width
  if (fullScreenWidth === true) {
    width = DEVICE_WIDTH
  } else {
    width = xSquares < 0 ? 0 : xSquares * SQUARE_WIDTH + (xSquares - 1) * GUTTER_WIDTH
  }
  let height = null || ySquares < 0 ? 0 : ySquares * SQUARE_WIDTH + (ySquares - 1) * GUTTER_WIDTH

  return {
    width: width,
    height: height,
    margin: GUTTER_WIDTH,
  }
}

export default {
  DEVICE_WIDTH,
  DEVICE_HEIGHT,
  SQUARE_WIDTH_PERCENT,
  GUTTER_WIDTH_PERCENT,
  CONTAINER_WIDTH_PERCENTAGE,
  SQUARE_WIDTH,
  GUTTER_WIDTH,
  CONTAINER_WIDTH,
  CONTAINER_HEIGHT,
  getSectionSize,
}
