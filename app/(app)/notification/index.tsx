import DateSeparator from "@/components/notification/DateSeparator";
import NoNotification from "@/components/notification/NoNotification";
import NotifeeCard from "@/components/notification/NotifeeCard";
import HeaderComponent from "@/components/ui/HeaderComponent";
import {
  sampleNotifications,
  type NotificationItem,
} from "@/utils/data/notifications";
import moment from "moment";
import React, { useMemo } from "react";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const NotificationScreen = (props: Props) => {
  // Group notifications by date
  const groupedNotifications = useMemo(() => {
    const groups: { [key: string]: NotificationItem[] } = {};

    sampleNotifications.forEach((notification) => {
      const dateKey = moment(notification.timestamp)
        .startOf("day")
        .format("YYYY-MM-DD");

      if (!groups[dateKey]) {
        groups[dateKey] = [];
      }
      groups[dateKey].push(notification);
    });

    // Sort by date descending (newest first)
    return Object.entries(groups)
      .sort(([keyA], [keyB]) => moment(keyB).diff(moment(keyA)))
      .map(([date, notifications]) => ({
        date: moment(date).toDate(),
        notifications,
      }));
  }, []);

  const renderItem = ({
    item,
  }: {
    item: NotificationItem | { type: "separator"; date: string | Date };
  }) => {
    if ("type" in item && item.type === "separator") {
      return <DateSeparator date={item.date} />;
    }

    const notification = item as NotificationItem;
    return (
      <View className="py-2">
        <NotifeeCard
          type={notification.type}
          title={notification.title}
          subtitle={notification.subtitle}
          timestamp={notification.timestamp}
        />
      </View>
    );
  };

  // Flatten grouped notifications with separators
  const flatData: (
    | NotificationItem
    | { type: "separator"; date: string | Date }
  )[] = [];
  groupedNotifications.forEach((group) => {
    flatData.push({ type: "separator", date: group.date });
    flatData.push(...group.notifications);
  });

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="px-5 pb-3">
        <HeaderComponent title="Notifications" />

        <View className="border-t border-stroke py-5 h-[95%]">
          {flatData.length ? (
            <FlatList
              data={flatData}
              contentContainerClassName="pb-10"
              keyExtractor={(item, index) => {
                if ("id" in item) {
                  return item.id;
                }
                return `separator-${index}`;
              }}
              renderItem={renderItem}
            />
          ) : (
            <NoNotification />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;
