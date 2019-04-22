import React, { PureComponent } from "react";
import { View } from "react-native";
import { styles } from "./SectionStyle";
import Constant from "./Constant";
import PropTypes from "prop-types";

export default class Square extends PureComponent {
    render() {
        const { xSquares, ySquares, fullScreenWidth, allowHeightExcess, backgroundColor } = this.props;
        let dimensions = Constant.getSectionSize(xSquares, ySquares, fullScreenWidth);
        const maxHeight = allowHeightExcess ? null : dimensions.height;

        return (
            <View
                style={[
                    styles.secondaryContainer,
                    {
                        backgroundColor: backgroundColor,
                        margin: dimensions.margin,
                        minHeight: dimensions.height,
                        maxHeight: maxHeight,
                        width: dimensions.width,
                    },
                    fullScreenWidth ? styles.fullScreenWidth : null,
                    { ...this.props.style },
                ]}
            >
                {this.props.children}
            </View>
        );
    }
}
Square.propTypes = {
    xSquares: PropTypes.number,
    ySquares: PropTypes.number,
    backgroundColor: PropTypes.string,
    allowHeightExcess: PropTypes.bool,
    fullScreenWidth: PropTypes.bool,
    style: PropTypes.oneOf(PropTypes.object, PropTypes.array, PropTypes.number),
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
Square.defaultProps = {
    xSquares: 1,
    ySquares: 1,
    backgroundColor: "#D3D3D3",
    allowHeightExcess: false,
    fullScreenWidth: false,
    style: null,
};
