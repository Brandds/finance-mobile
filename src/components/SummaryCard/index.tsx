import { View } from "react-native";


import Typography from "@/components/Typography/Typography";
import { styles } from "./styles";
import { SummaryCardProps } from "./types";


export default function SummaryCard(props: SummaryCardProps) {

  return (
    <View style={styles.container}>

      {props.title && (
        <Typography
          variant="h2"
          color="#FFFFFF"
        >
          {props.title}
        </Typography>
      )}

      <Typography
        variant="body1"
        color="#FFFFFF"
      >
        {props.subTitle}
      </Typography>

      <View style={styles.badge}>

        {props.children}

        <Typography
          variant="body1"
          color="#FFFFFF"
        >
          {props.info}
        </Typography>

      </View>

    </View>
  );
}