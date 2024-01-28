import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard,
  FlatList,
} from "react-native";
import ResultIMC from "../ResultIMC";
import style from "./style";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageIMC, setMessageIMC] = useState("Fill both weight and height");
  const [imc, setIMC] = useState(null);
  const [textButton, setTextButton] = useState("Calculate");
  const [errorMessage, setErrorMessage] = useState(null);
  const [imcList, setIMCList] = useState([]);

  function imcCalculator() {
    let h = height.replace(",", ".");
    let w = height.replace(",", ".");
    let totalIMC = (weight / (height * height)).toFixed(2);
    setIMCList((arr) => [...arr, { id: new Date().getTime(), imc: totalIMC }]);
    setIMC(totalIMC);
  }

  function verificationIMC() {
    if (imc == null) {
      Vibration.vibrate();
      setErrorMessage("*Field necessary");
    }
  }

  function validationIMC() {
    if (weight != null && height != null && height != 0) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageIMC(`Your IMC is: `);
      setTextButton("Calculate again: ");
      setErrorMessage(null);
    } else {
      verificationIMC();
      setIMC(null);
      setTextButton("Calculate");
      setMessageIMC("Fill both wight and height");
    }
  }

  return (
    <View style={style.formContext}>
      {imc == null ? (
        <Pressable onPress={Keyboard.dismiss} style={style.form}>
          <Text style={style.formLabel}>Height</Text>
          <Text style={style.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={style.input}
            placeholder="Ex.: 1.78"
            keyboardType="numeric"
            onChangeText={setHeight}
            value={height}
          />
          <Text style={style.formLabel}>Weight</Text>
          <Text style={style.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={style.input}
            placeholder="Ex.: 75.00"
            keyboardType="numeric"
            onChangeText={setWeight}
            value={weight}
          />
          <TouchableOpacity
            style={style.buttonCalculator}
            onPress={() => validationIMC()}
          >
            <Text style={style.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </Pressable>
      ) : (
        <View style={style.exhibitionResult}>
          <ResultIMC messageResultIMC={messageIMC} resultIMC={imc} />
          <TouchableOpacity
            style={style.buttonCalculator}
            onPress={() => validationIMC()}
          >
            <Text style={style.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </View>
      )}

      <FlatList
        showsVerticalScrollIndicator={false}
        style={style.listIMCs}
        data={imcList.reverse()}
        renderItem={({ item }) => {
          return (
            <Text style={style.resultIMCItem}>
              <Text style={style.textResultItem}>IMC result: </Text>
              {item.imc}
            </Text>
          );
        }}
        keyExtractor={(item) => {
          item.id;
        }}
      ></FlatList>
    </View>
  );
}
