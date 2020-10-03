import React from "react";
import {
  View,
  TouchableOpacity,
  GestureResponderEvent,
  Text,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
} from "react-native";

interface Props {
  content: string;
  handlePress: ((event: GestureResponderEvent) => void) | undefined;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean | null | undefined;
}

// type -> React.FC (Functional component)
const MyButton: React.FC<Props> = ({
  content,
  handlePress,
  containerStyle,
  textStyle,
  disabled,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={handlePress}
      style={[styles.button, containerStyle]}
    >
      <Text style={textStyle}>{content}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});

export default MyButton;
