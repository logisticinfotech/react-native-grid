import React, { PureComponent } from "react";
import { View } from "react-native";
import { styles } from "./SectionStyle";
import Constant from "./Constant";

export default class Square extends PureComponent {
    render() {
        const { xSquares, ySquares, fullScreenWidth, allowHeightExcess } = this.props;
        let dimensions = Constant.getSectionSize(xSquares, ySquares, fullScreenWidth);
        const maxHeight = allowHeightExcess ? null : dimensions.height;
        return (
            <View
                style={[
                    styles.secondaryContainer,
                    {
                        backgroundColor: "pink",
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
Square.prototypes = {
    height: PropTypes.number,
    width: PropTypes.number,
};
