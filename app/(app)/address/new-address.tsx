import AddressBottomSheet from "@/components/address/AddressBottomSheet";
import MapPicker from "@/components/address/MapPicker";
import HeaderComponent from "@/components/ui/HeaderComponent";
import PopupModal from "@/components/ui/PopupModal";
import type { SelectedLocation } from "@/types/address";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const NewAddress = () => {
  const router = useRouter();
  const [selectedLocation, setSelectedLocation] =
    useState<SelectedLocation | null>(null);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleLocationSelected = (location: SelectedLocation) => {
    setSelectedLocation(location);
    setBottomSheetVisible(true);
  };

  const handleAddressConfirm = (data: {
    nickname: string;
    address: string;
    latitude: string;
    longitude: string;
    isDefault: boolean;
  }) => {
    // Save address to state/store
    console.log("Address confirmed:", data);
    // TODO: Save address to store or API

    // Show success modal
    setShowSuccessModal(true);
  };

  return (
    <>
      <SafeAreaView className="flex-1 bg-white">
        {/* Header */}
        <View className="px-5 pb-3">
          <HeaderComponent title="New Address" />
        </View>

        <View className="px-5">
          {/* Map Picker - emits location to bottom sheet */}
          <MapPicker onLocationSelected={handleLocationSelected} />
        </View>

        {/* Address Bottom Sheet */}
        <AddressBottomSheet
          visible={bottomSheetVisible}
          selectedLocation={selectedLocation}
          onClose={() => setBottomSheetVisible(false)}
          onConfirm={handleAddressConfirm}
        />

        {/* Success Modal */}
        <PopupModal
          visible={showSuccessModal}
          onClose={() => {
            setShowSuccessModal(false);
            router.push("/(tabs)");
          }}
          title="Congratulations"
          description="Your new address has been added"
          primaryAction={{
            label: "Confirm",
            onPress: () => {
              setShowSuccessModal(false);
              router.push("/(tabs)");
            },
          }}
        />
      </SafeAreaView>
    </>
  );
};

export default NewAddress;
