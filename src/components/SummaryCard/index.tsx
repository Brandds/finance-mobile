import { View } from "react-native";


import Typography from "@/components/Typography/Typography";
import { styles as stylesSummaryCard} from "./styles";
import { SummaryCardProps } from "./types";
import { useTheme } from "@/theme/ThemeProvider";


export default function SummaryCard(props: SummaryCardProps) {

  const theme = useTheme()
  const styles = stylesSummaryCard(theme);
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