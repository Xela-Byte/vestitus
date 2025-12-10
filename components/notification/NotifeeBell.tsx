import Feather from "@expo/vector-icons/Feather";
import { Link } from "expo-router";
import React from "react";

type Props = {};

const NotifeeBell = (props: Props) => {
  return (
    <Link href={"/notification"} asChild>
      <Feather name="bell" size={24} color="#1a1a1a" />
    </Link>
  );
};

export default NotifeeBell;
