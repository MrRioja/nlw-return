import React from "react";
import { Text, View } from "react-native";
import { Copyright } from "../Copyright";

import { feedbackTypes } from "../../utils/feedbackTypes";
import { styles } from "./styles";
import { Option } from "../Option";
import { FeedbackTypes } from "../Widget";

interface Props {
  onFeedbackTypeChanged: (feedbackType: FeedbackTypes) => void;
}

export function Options({ onFeedbackTypeChanged }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe seu feedback</Text>

      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <Option
            key={key}
            title={value.title}
            image={value.image}
            onPress={() => onFeedbackTypeChanged(key as FeedbackTypes)}
          />
        ))}
      </View>

      <Copyright />
    </View>
  );
}
