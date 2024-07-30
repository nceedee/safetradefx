import * as React from "react";
import Stack from "@mui/material/Stack";
import { Gauge } from "@mui/x-charts/Gauge";
import { Box, Typography } from "@mui/material";

export default function RoundedChart() {
  return (
    <Box
      className="p-4 bg-[#202b5d] rounded-md text-white"
      sx={{ width: "100%", height: "100%" }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-around"
        alignItems="center"
        height="100%"
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Gauge width={100} height={100} value={0} />
          <Typography variant="h6" mt={2}>
            Invest Completed
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Gauge width={100} height={100} value={100} />
          <Typography variant="h6" mt={2}>
            ROI Speed
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Gauge width={100} height={100} value={0} />
          <Typography variant="h6" mt={2}>
            ROI Redeemed
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
