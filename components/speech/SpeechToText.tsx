import { useAppStore } from "@/store/app-store";
import { sizeBlock } from "@/styles/universalStyle";
import Feather from "@expo/vector-icons/Feather";
import {
  ExpoSpeechRecognitionModule,
  useSpeechRecognitionEvent,
} from "expo-speech-recognition";
import React, { useEffect, useRef, useState } from "react";
import { Animated, TouchableOpacity } from "react-native";

type Props = {
  micIconColor?: string;
  micIconSize?: number;
};

const SpeechToText = ({
  micIconColor = "#B3B3B3",
  micIconSize = 20,
}: Props) => {
  const [recognizing, setRecognizing] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const updateTranscript = useAppStore((state) => state.setTranscribedText);

  const runAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.3,
          duration: 600,
          useNativeDriver: false,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 600,
          useNativeDriver: false,
        }),
      ])
    ).start();
  };

  useSpeechRecognitionEvent("start", () => setRecognizing(true));
  useSpeechRecognitionEvent("end", () => setRecognizing(false));
  useSpeechRecognitionEvent("result", (event) => {
    console.log("====================================");
    console.log(event.results[0]?.transcript);
    console.log("====================================");
    updateTranscript(event.results[0]?.transcript);
  });
  useSpeechRecognitionEvent("error", (event) => {
    console.log("error code:", event.error, "error message:", event.message);
  });

  const handleSpeechToText = async () => {
    const result = await ExpoSpeechRecognitionModule.requestPermissionsAsync();
    if (!result.granted) {
      console.warn("Permissions not granted", result);
      return;
    }

    if (recognizing) {
      ExpoSpeechRecognitionModule.stop();
      return;
    }
    // Start speech recognition
    ExpoSpeechRecognitionModule.start({
      lang: "en-US",
      interimResults: true,
      continuous: false,
    });
  };

  useEffect(() => {
    if (recognizing) {
      runAnimation();
    } else {
      scaleAnim.setValue(1);
    }
  }, [recognizing, scaleAnim]);

  return (
    <>
      {/* Mic Icon */}
      <TouchableOpacity
        onPress={handleSpeechToText}
        style={{
          marginLeft: sizeBlock.getWidthSize(3),
          padding: sizeBlock.getWidthSize(2),
        }}
      >
        <Animated.View
          style={{
            transform: [{ scale: scaleAnim }],
          }}
        >
          {recognizing ? (
            <Feather name="mic-off" size={micIconSize} color={"green"} />
          ) : (
            <Feather name="mic" size={micIconSize} color={micIconColor} />
          )}
        </Animated.View>
      </TouchableOpacity>
    </>
  );
};

export default SpeechToText;
