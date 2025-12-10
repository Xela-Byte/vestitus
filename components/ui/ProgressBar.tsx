import { borderRadius } from "@/styles/universalStyle";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  progress: number; // 0-100
  color?: string;
  backgroundColor?: string;
  height?: number;
  showLabel?: boolean;
};

const ProgressBar = ({
  progress,
  color = "#1a1a1a",
  backgroundColor = "#e6e6e6",
  height = 8,
  showLabel = false,
}: Props) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      overflow: "hidden",
      borderRadius: borderRadius.full,
      backgroundColor,
      height,
    },
    fill: {
      height: "100%",
      backgroundColor: color,
      width: `${clampedProgress}%`,
      borderRadius: borderRadius.full,
    },
    labelContainer: {
      marginTop: 8,
      alignItems: "center",
    },
  });

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.fill} />
      </View>
      {showLabel && (
        <View style={styles.labelContainer}>
          <Text>{clampedProgress}%</Text>
        </View>
      )}
    </View>
  );
};

export default ProgressBar;
