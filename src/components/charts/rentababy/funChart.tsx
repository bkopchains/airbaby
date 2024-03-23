import { AreaChart } from "@mantine/charts";
import { data } from "./data";

export default function FunChart() {
  return (
    <AreaChart
      h={200}
      data={data}
      dataKey="Babies"
      series={[
        { name: "Fun", color: "pink", label: "Fun Level" }
      ]}
      curveType="natural"
      // xAxisProps={{
      //   label: { value: "Babies Rented", angle: 0, position: "insideBottom" }
      // }}
      // yAxisProps={{
      //   label: { value: "Fun Had", angle: -90, position: "insideLeft" }
      // }}
    />
  );
}
