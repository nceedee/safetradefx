import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export const SkeletonUi = () => {
  return (
    <Box sx={{ width: "90%" }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
      <Skeleton animation={false} />
      <Skeleton animation={false} />
      <Skeleton animation={false} />
    </Box>
  );
};
