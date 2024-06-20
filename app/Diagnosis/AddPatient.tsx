import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Button,
  StyleSheet,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useGlobalSearchParams } from "expo-router";
const AddPatient = () => {
  const { patient } = useGlobalSearchParams();
  const Navigation = useNavigation();
  const [formFields, setFormFields] = useState<any>({});
  const [formValues, setFormValues] = useState({});

  const GetPatientMissingFields = async () => {
    try {
      const response = await axios.get(
        `https://medisynth-backend.onrender.com/patients/${patient}/missing_columns`
      );
      setFormFields(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Navigation.setOptions({
      headerShown: false,
    });
    GetPatientMissingFields();
  }, []);

  const handleInputChange = (field: any, value: any) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `https://medisynth-backend.onrender.com/patients/${patient}/manual_input`,
        formValues
      );
      console.log("Form submitted successfully:", response.data);
      axios
        .post(
          `https://medisynth-backend.onrender.com/patients/${patient}/predict_all`,
          {}
        )
        .then(async () => {
          console.log("Predicted all");
          const cs = await axios.get(
            `https://medisynth-backend.onrender.com/patients/${patient}/csllm`
          );
          console.log("CSLLM", cs.data);
          Navigation.goBack();
        })
        .catch((error) => {
          console.error("Error predicting all:", error);
        });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical
    >
      {Object.keys(formFields).map((field) => {
        const fieldData = formFields[field];
        return (
          <View key={field} style={styles.inputContainer}>
            <Text style={styles.label}>{field}</Text>
            {Array.isArray(fieldData) ? (
              <RNPickerSelect
                onValueChange={(value) => handleInputChange(field, value)}
                items={fieldData.map((item) => ({ label: item, value: item }))}
                style={pickerSelectStyles}
              />
            ) : (
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                onChangeText={(value) => handleInputChange(field, value)}
              />
            )}
          </View>
        );
      })}
      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

export default AddPatient;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontWeight: "bold",
  },
  textInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  inputAndroid: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
});
