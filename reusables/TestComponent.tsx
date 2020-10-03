import React from "react";
import { View, Text } from "react-native";

interface Props {
  name: string;
  color: string;
}

const TestComponent: React.FC<Props> = (props) => {
  return <View></View>;
};

export default TestComponent;
