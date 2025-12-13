import AppButton from "@/components/ui/AppButton";
import AppText from "@/components/ui/AppText";
import PopupModal from "@/components/ui/PopupModal";
import { sizeBlock } from "@/styles/universalStyle";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Modal,
  PanResponder,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const { height } = Dimensions.get("window");

export interface ReviewBottomSheetProps {
  visible: boolean;
  orderId: string;
  onClose: () => void;
  onSubmit: (rating: number, comment: string) => void;
}

const ReviewBottomSheet: React.FC<ReviewBottomSheetProps> = ({
  visible,
  orderId,
  onClose,
  onSubmit,
}) => {
  const panY = useRef(new Animated.Value(height)).current;
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  // Animate bottom sheet in/out
  useEffect(() => {
    if (visible) {
      Animated.spring(panY, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(panY, {
        toValue: height,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [visible, panY]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dy: panY }], {
        useNativeDriver: false,
      }) as any,
      onPanResponderRelease: (_e, { dy }) => {
        if (dy > 100) {
          handleClose();
        } else {
          Animated.spring(panY, {
            toValue: 0,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  const handleClose = () => {
    Animated.timing(panY, {
      toValue: height,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      resetForm();
      onClose();
    });
  };

  const resetForm = () => {
    setRating(0);
    setComment("");
  };

  const handleSubmit = () => {
    if (rating === 0) {
      alert("Please select a rating");
      return;
    }
    if (!comment.trim()) {
      alert("Please write a review comment");
      return;
    }
    onSubmit(rating, comment);
    setShowThankYou(true);
    handleClose();
  };

  const panYInterpolate = panY.interpolate({
    inputRange: [0, height],
    outputRange: [0, height],
  });

  return (
    <>
      <Modal
        visible={visible}
        transparent
        animationType="none"
        onRequestClose={handleClose}
      >
        <TouchableWithoutFeedback onPress={handleClose}>
          <View className="flex-1 bg-black/50" />
        </TouchableWithoutFeedback>

        <Animated.View
          style={{
            transform: [{ translateY: panYInterpolate }],
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
          }}
          {...panResponder.panHandlers}
        >
          <View className="bg-white rounded-t-3xl pb-8 pt-4 px-6">
            {/* Handle bar */}
            <View className="flex-row justify-center mb-4">
              <View
                className="w-14 h-2 rounded-full"
                style={{ backgroundColor: "#E0E0E0" }}
              />
            </View>

            {/* Header */}
            <View className="flex-row justify-between items-center mb-6">
              <AppText variant="h3" className="font-outfit-semibold">
                Leave a Review
              </AppText>
              <TouchableOpacity onPress={handleClose}>
                <Ionicons name="close" size={24} color="#1A1A1A" />
              </TouchableOpacity>
            </View>

            {/* Star Rating */}
            <View className="mb-6">
              <AppText variant="h4">How was your order?</AppText>
              <AppText className="text-secondary text-sm font-outfit-medium mb-4">
                Please give your rating and also your review.
              </AppText>
              <View className="flex-row justify-center gap-2">
                {Array.from({ length: 5 }, (_, i) => i + 1).map((star) => (
                  <TouchableOpacity
                    key={star}
                    onPress={() => setRating(star)}
                    style={{ padding: 8 }}
                  >
                    <MaterialCommunityIcons
                      name={"star"}
                      size={30}
                      color={star <= rating ? "#FFA928" : "#E0E0E0"}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Comment Input */}
            <View className="mb-6">
              <TextInput
                value={comment}
                onChangeText={setComment}
                placeholder="Write your review..."
                placeholderTextColor="#808080"
                multiline
                numberOfLines={10}
                className="border h-32 rounded-lg px-4 py-3 font-outfit-regular text-primary text-base bg-white"
                style={{
                  textAlignVertical: "top",
                  borderColor: "#E0E0E0",
                  borderWidth: 1,
                }}
              />
            </View>

            {/* Submit Button */}
            <AppButton
              label="Submit Review"
              className="w-full"
              onPress={handleSubmit}
              disabled={rating === 0 || !comment.trim()}
            />

            <View style={{ height: sizeBlock.getHeightSize(10) }} />
          </View>
        </Animated.View>
      </Modal>

      {/* Thank You Popup */}
      <PopupModal
        visible={showThankYou}
        onClose={() => {
          setShowThankYou(false);
          resetForm();
        }}
        title="Thank You!"
        description="Thank you for taking the time to leave a review. Your feedback helps us improve!"
        primaryAction={{
          label: "Done",
          onPress: () => {
            setShowThankYou(false);
            resetForm();
          },
        }}
      />
    </>
  );
};

export default ReviewBottomSheet;
