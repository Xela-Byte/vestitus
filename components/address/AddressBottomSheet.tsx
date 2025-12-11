import AppButton from "@/components/ui/AppButton";
import AppText from "@/components/ui/AppText";
import { sizeBlock } from "@/styles/universalStyle";
import type { SelectedLocation } from "@/types/address";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
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

export interface AddressBottomSheetProps {
  visible: boolean;
  selectedLocation: SelectedLocation | null;
  onClose: () => void;
  onConfirm: (data: {
    nickname: string;
    address: string;
    latitude: string;
    longitude: string;
    isDefault: boolean;
  }) => void;
}

const ADDRESS_NICKNAMES = ["Home", "Work", "Gym", "School", "Other"];

const AddressBottomSheet: React.FC<AddressBottomSheetProps> = ({
  visible,
  selectedLocation,
  onClose,
  onConfirm,
}) => {
  const [selectedNickname, setSelectedNickname] = useState<string>("Home");
  const [customAddress, setCustomAddress] = useState<string>("");
  const [showNicknameDropdown, setShowNicknameDropdown] = useState(false);
  const [isDefaultAddress, setIsDefaultAddress] = useState(false);
  const panY = useRef(new Animated.Value(height)).current;

  // Auto-fill address from selected location
  useEffect(() => {
    if (selectedLocation?.address) {
      setCustomAddress(selectedLocation.address.fullAddress);
    }
  }, [selectedLocation]);

  // Animate bottom sheet in/out based on visible prop
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
    setSelectedNickname("Home");
    setCustomAddress("");
    setIsDefaultAddress(false);
    setShowNicknameDropdown(false);
  };

  const handleAdd = () => {
    if (!customAddress.trim()) {
      alert("Please enter an address");
      return;
    }

    onConfirm({
      nickname: selectedNickname,
      address: customAddress,
      latitude: selectedLocation?.latitude || "",
      longitude: selectedLocation?.longitude || "",
      isDefault: isDefaultAddress,
    });

    // Close the bottom sheet
    Animated.timing(panY, {
      toValue: height,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      resetForm();
      onClose();
    });
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
              <View className="w-10 h-1 bg-gray-300 rounded-full" />
            </View>

            {/* Header */}
            <View className="flex-row justify-between items-center mb-6">
              <AppText variant="h3" className="font-outfit-semibold">
                Confirm Address
              </AppText>
              <TouchableOpacity onPress={handleClose}>
                <Ionicons name="close" size={24} color="#1A1A1A" />
              </TouchableOpacity>
            </View>

            {/* Address Nickname Dropdown */}
            <View className="mb-6">
              <AppText className="text-secondary text-sm font-outfit-medium mb-2">
                Address Nickname
              </AppText>
              <TouchableOpacity
                onPress={() => setShowNicknameDropdown(!showNicknameDropdown)}
                className="flex-row items-center justify-between border border-gray-300 rounded-lg px-4 py-3 bg-white"
              >
                <AppText className="font-outfit-regular text-primary">
                  {selectedNickname}
                </AppText>
                <AntDesign
                  name={showNicknameDropdown ? "up" : "down"}
                  size={16}
                  color="#808080"
                />
              </TouchableOpacity>

              {/* Dropdown Menu */}
              {showNicknameDropdown && (
                <View className="absolute top-16 left-0 right-0 bg-white border border-gray-300 rounded-lg mx-0 z-50 shadow-lg">
                  {ADDRESS_NICKNAMES.map((nickname, index) => (
                    <TouchableOpacity
                      key={nickname}
                      onPress={() => {
                        setSelectedNickname(nickname);
                        setShowNicknameDropdown(false);
                      }}
                      className={`px-4 py-3 flex-row items-center justify-between ${
                        index !== ADDRESS_NICKNAMES.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      <AppText className="font-outfit-regular text-primary">
                        {nickname}
                      </AppText>
                      {selectedNickname === nickname && (
                        <AntDesign name="check" size={16} color="#1A1A1A" />
                      )}
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>

            {/* Address Input */}
            <View className="mb-6">
              <AppText className="text-secondary text-sm font-outfit-medium mb-2">
                Full Address
              </AppText>
              <TextInput
                value={customAddress}
                onChangeText={setCustomAddress}
                placeholder="Enter or edit address"
                placeholderTextColor="#808080"
                multiline
                numberOfLines={4}
                className="border border-gray-300 rounded-lg px-4 py-3 font-outfit-regular text-primary text-base bg-white"
                style={{ textAlignVertical: "top" }}
              />
            </View>

            {/* Default Address Checkbox */}
            <TouchableOpacity
              onPress={() => setIsDefaultAddress(!isDefaultAddress)}
              className="flex-row items-center mb-6"
            >
              <View
                className={`w-5 h-5 rounded border-2 mr-3 items-center justify-center ${
                  isDefaultAddress
                    ? "bg-primary border-primary"
                    : "border-gray-300 bg-white"
                }`}
              >
                {isDefaultAddress && (
                  <AntDesign name="check" size={12} color="white" />
                )}
              </View>
              <AppText className="text-primary font-outfit-regular">
                Make this as a default address
              </AppText>
            </TouchableOpacity>

            {/* Coordinates Display */}
            <View style={{ height: sizeBlock.getHeightSize(20) }} />

            {/* Add Button */}
            <AppButton label="Add" className="w-full" onPress={handleAdd} />
          </View>
        </Animated.View>
      </Modal>
    </>
  );
};

export default AddressBottomSheet;
