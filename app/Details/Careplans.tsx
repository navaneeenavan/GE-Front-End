import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import fs from "fs";
import Markdown from "@ronradtke/react-native-markdown-display";

const Careplans = () => {
  const navigation = useNavigation();
  const textforMarkdown =
    "## Care Plan for Patient ID: 12345\n\n*Diagnosis Brief:\n\nBased on the provided lab results, this 30-year-old male patient presents with several abnormalities:\n\n *Elevated Liver Enzymes (GGTP):*  GGTP level of 150 U/L is significantly higher than the reference range, suggesting potential liver dysfunction. This could be due to various factors including fatty liver disease, alcohol abuse, or medication side effects.\n* *Elevated A:G Ratio:*  A:G ratio of 3.0 is above the reference range, indicating a higher risk of cardiovascular disease. This could be associated with inflammation or liver dysfunction.\n* *Borderline High Cholesterol:* While total cholesterol is within the borderline range, LDL cholesterol is significantly elevated, suggesting an increased risk of heart disease.\n* *Elevated Triglycerides:*  Triglycerides are above the reference range, also indicating a potential risk for heart disease.\n* *Hypothyroidism:*  Low T4 levels and normal T3 levels suggest potential hypothyroidism. Further investigation is needed to confirm this.\n* *Resting Hypertension:* The patient's resting blood pressure of 140.0 mmHg is above the normal range, indicating hypertension.\n\n*Goals:\n\n *Reduce liver enzyme levels:*  To bring GGTP levels down to within the reference range.\n* *Improve lipid profile:*  Reduce LDL cholesterol and triglycerides to within the desired ranges.\n* *Manage hypertension:*  To achieve and maintain blood pressure within the normal range.\n* *Investigate and manage potential hypothyroidism:*  Determine the underlying cause of low T4 levels and initiate appropriate treatment if necessary.\n* *Promote overall cardiovascular health:*  Reduce the patient's risk for heart disease.\n\n*Interventions:\n\n *Lifestyle Modifications:\n    * **Diet:* Advise the patient to adopt a heart-healthy diet low in saturated and trans fats, cholesterol, and added sugars. Encourage intake of fruits, vegetables, whole grains, and lean protein sources.\n    * *Exercise:*  Recommend at least 30 minutes of moderate-intensity exercise most days of the week.\n    * *Weight Management:*  If the patient is overweight or obese, recommend strategies for weight loss.\n    * *Alcohol Consumption:*  Advise the patient to limit or abstain from alcohol consumption if necessary.\n    * *Smoking Cessation:* If the patient is a smoker, provide support and resources for smoking cessation.\n* *Medications:\n    * **Statins:* Prescribe statins to lower LDL cholesterol and potentially reduce triglyceride levels.\n    * *Antihypertensive medications:* Prescribe appropriate antihypertensive medication based on the patient's specific blood pressure readings and other medical conditions.\n    * *Thyroid Hormone Replacement Therapy:*  If hypothyroidism is confirmed, initiate thyroid hormone replacement therapy.\n* *Lab Tests:\n    * **Liver Function Tests:* Repeat liver function tests (including GGTP) to monitor progress.\n    * *Lipid Profile:*  Repeat lipid profile to monitor cholesterol and triglyceride levels.\n    * *Thyroid Function Tests:*  Further thyroid function tests (TSH, Free T4, etc.) may be needed to confirm hypothyroidism.\n\n*Evaluation:\n\n *Regular follow-up appointments:*  Schedule regular follow-up appointments to monitor the patient's progress and make adjustments to the care plan as needed.\n* *Lab tests:*  Monitor changes in lab values (liver enzymes, lipid profile, thyroid function, etc.) to assess the effectiveness of interventions.\n* *Blood Pressure monitoring:*  Regularly monitor blood pressure to ensure it is within the desired range.\n* *Patient symptoms and well-being:*  Assess patient symptoms and overall well-being to evaluate the effectiveness of the care plan.\n\n*Patient Education:\n\n *Explain the importance of lifestyle modifications:* Emphasize the benefits of diet, exercise, weight management, and alcohol/smoking cessation in improving health outcomes.\n* *Discuss medications:* Explain the purpose and potential side effects of prescribed medications.\n* *Encourage active participation in care:*  Emphasize the importance of the patient actively participating in their care plan by adhering to lifestyle recommendations, taking medication as prescribed, and attending follow-up appointments.\n* *Address concerns and questions:* Provide clear and understandable answers to the patient's questions and concerns about their condition and treatment plan.\n\n*Follow-Up:\n\n *Schedule follow-up appointments:*  Schedule follow-up appointments every 3-6 months to monitor the patient's progress and adjust the care plan as needed.\n* *Re-evaluate lab results:*  Repeat relevant lab tests at follow-up appointments to monitor changes in liver function, lipid profile, and thyroid status.\n* *Assess patient compliance:*  Evaluate the patient's adherence to lifestyle recommendations and medications.\n* *Adjust care plan:*  If necessary, adjust the care plan based on the patient's progress, risk factors, and individual needs.\n\n*Note:* This care plan is a general guideline and should be tailored to the individual patient's needs and circumstances.  A comprehensive evaluation by a qualified healthcare professional is crucial for accurate diagnosis and personalized treatment.";
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Careplans" />
      </Appbar.Header>
      <ScrollView showsVerticalScrollIndicator={false} alwaysBounceVertical>
        <View
          style={{
            flex: 1,
            padding: 20,
          }}
        >
          <Markdown>{textforMarkdown}</Markdown>
        </View>
      </ScrollView>
    </>
  );
};

export default Careplans;

const styles = StyleSheet.create({});