import React, { PureComponent } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { styles } from "./SectionStyle";
import Constant from "./Constant";
import PropTypes from "prop-types";

export default class Container extends PureComponent {
    render() {
        const isNested = this.props.isNested;
        const isFullHeight = this.props.isFullHeight;
        const zero = 0;
        let height;
        if (isFullHeight) {
            height = "100%";
        } else {
            height = isNested ? "100%" : this.props.height;
        }
        return (
            <SafeAreaView
                style={{
                    height: height,
                    ...this.props.style,
                    backgroundColor: "#fff",
                }}
            >
                {isNested || isFullHeight ? (
                    <View
                        style={[
                            styles.scrollContent,
                            { ...this.props.style, marginHorizontal: isNested ? zero : Constant.GUTTER_WIDTH },
                        ]}
                    >
                        {this.props.children}
                    </View>
                ) : (
                    <ScrollView
                        ref={scrollView => {
                            this.scrollView = scrollView;
                        }}
                        contentContainerStyle={[styles.scrollContent, { ...this.props.style }]}
                        removeClippedSubviews={false}
                        alwaysBounceVertical={false} // for iOS
                    >
                        {this.props.children}
                    </ScrollView>
                )}
            </SafeAreaView>
        );
    }
}

Container.prototypes = {
    height: PropTypes.number,
    width: PropTypes.number,
};
Container.defaultProps = {
    height: Constant.CONTAINER_HEIGHT,
    width: Constant.CONTAINER_WIDTH,
};
