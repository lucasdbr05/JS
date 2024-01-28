import React from "react";
import { View, Text, Share, TouchableOpacity } from "react-native";
import style from "./style";

export default function ResultIMC(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: `My IMC today is: ${props.resultIMC}`,
    });
  };
  return (
    <View style={style.resultIMC}>
      <View style={style.boxShared}>
        <Text style={style.information}>{props.messageResultIMC}</Text>
        <Text style={style.numberIMC}>{props.resultIMC}</Text>
        <TouchableOpacity onPress={onShare} style={style.shared}>
          <Text style={style.sharedText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
