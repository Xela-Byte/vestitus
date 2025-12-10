import { sizeBlock } from "@/styles/universalStyle";
import Feather from "@expo/vector-icons/Feather";
import {
  ExpoSpeechRecognitionModule,
  useSpeechRecognitionEvent,
} from "expo-speech-recognition";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

type Props = {
  micIconColor?: string;
  micIconSize?: number;
};

const SpeechToText = ({
  micIconColor = "#B3B3B3",
  micIconSize = 20,
}: Props) => {
  const [transcript, setTranscript] = useState("");

  useSpeechRecognitionEvent("result", (event) => {
    setTranscript(event.results[0]?.transcript);
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
    // Start speech recognition
    ExpoSpeechRecognitionModule.start({
      lang: "en-US",
      interimResults: true,
      continuous: false,
    });
  };

  console.log("====================================");
  console.log(transcript);
  console.log("====================================");

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
        <Feather name="mic" size={micIconSize} color={micIconColor} />
      </TouchableOpacity>
    </>
  );
};

export default SpeechToText;
