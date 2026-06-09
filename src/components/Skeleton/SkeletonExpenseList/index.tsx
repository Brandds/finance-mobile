import React from "react";

import SkeletonExpenseItem
from "../SkeletonExpenseItem";

import {
  SkeletonExpenseListProps,
} from "./types";

export default function SkeletonExpenseList({
  quantity = 3,
}: SkeletonExpenseListProps) {

  return (
    <>
      {Array.from({
        length: quantity,
      }).map((_, index) => (
        <SkeletonExpenseItem
          key={index}
        />
      ))}
    </>
  );
}