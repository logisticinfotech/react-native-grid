import React, { PureComponent } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { styles } from './SectionStyle'
import Constant from './Constant'
import PropTypes from 'prop-types'

class Container extends PureComponent {
  render() {
    const { isNested, backgroundColor } = this.props
    const zero = 0
    let height = isNested ? '100%' : this.props.height
    const color = '#fff'
    return (
      <SafeAreaView
        style={{
          height: height,
          ...this.props.style,
          backgroundColor: color,
        }}
      >
        {isNested ? (
          <View
            style={[
              styles.scrollContent,
              {
                backgroundColor: backgroundColor,
                ...this.props.style,
                marginHorizontal: isNested ? zero : Constant.GUTTER_WIDTH,
              },
            ]}
          >
            {this.props.children}
          </View>
        ) : (
          <ScrollView
            ref={(scrollView) => {
              this.scrollView = scrollView
            }}
            contentContainerStyle={[styles.scrollContent, { ...this.props.style }]}
            removeClippedSubviews={false}
            alwaysBounceVertical={false} // for iOS
          >
            {this.props.children}
          </ScrollView>
        )}
      </SafeAreaView>
    )
  }
}

export default Container

Container.propTypes = {
  height: PropTypes.number,
  isNested: PropTypes.bool,
  backgroundColor: PropTypes.string,
  style: PropTypes.oneOf(PropTypes.object, PropTypes.array, PropTypes.number),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

Container.defaultProps = {
  height: Constant.CONTAINER_HEIGHT,
  isNested: false,
  backgroundColor: 'white',
  style:null,
  children:null
}
