import moment from "moment";
import React from "react";
import { View } from "react-native";
import AppText from "../ui/AppText";

interface DateSeparatorProps {
  date: string | Date;
}

const DateSeparator = ({ date }: DateSeparatorProps) => {
  const getDateLabel = (notificationDate: string | Date) => {
    const momentDate = moment(notificationDate);
    const today = moment().startOf("day");
    const yesterday = moment().subtract(1, "day").startOf("day");

    if (momentDate.isSame(today, "day")) {
      return "Today";
    } else if (momentDate.isSame(yesterday, "day")) {
      return "Yesterday";
    } else if (momentDate.isAfter(today.clone().subtract(7, "days"))) {
      return momentDate.format("dddd"); // e.g., "Monday"
    } else {
      return momentDate.format("MMM DD, YYYY"); // e.g., "Dec 03, 2025"
    }
  };

  return (
    <View className="py-3">
      <AppText className="uppercase font-outfit-semibold tracking-wide">
        {getDateLabel(date)}
      </AppText>
    </View>
  );
};

export default DateSeparator;
