import { sizeBlock } from "@/styles/universalStyle";
import Feather from "@expo/vector-icons/Feather";
import { Link } from "expo-router";
import React from "react";

const NotifeeBell = () => {
  return (
    <Link href={"/notification"} asChild>
      <Feather name="bell" size={sizeBlock.fontSize(24)} color="#1a1a1a" />
    </Link>
  );
};

export default NotifeeBell;
