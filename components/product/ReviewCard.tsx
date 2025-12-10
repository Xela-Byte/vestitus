import { View } from "react-native";
import AppText from "../ui/AppText";
import ReviewStars from "./ReviewStars";

type Props = {
  rating: number;
  reviewText: string;
  reviewerName: string;
  reviewDate: string;
};

const ReviewCard = ({
  rating,
  reviewText,
  reviewerName,
  reviewDate,
}: Props) => {
  return (
    <View className="gap-y-3 py-4 border-b border-stroke">
      <ReviewStars rating={rating} />
      <AppText className="text-base text-secondary">{reviewText}</AppText>
      <AppText weight="semibold" className="text-sm">
        {reviewerName} •{" "}
        <AppText className="text-secondary">{reviewDate}</AppText>
      </AppText>
    </View>
  );
};

export default ReviewCard;
