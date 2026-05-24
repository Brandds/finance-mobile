import { View }
from "react-native";

import { MaterialIcons }
from "@expo/vector-icons";

import Typography
from "@/components/Typography/Typography";
import { styles } from "./styles";


export default function SummaryCard() {

  return (
    <View style={styles.container}>

      <Typography
        variant="h2"
        color="#B8D4DC"
      >
        Total gasto no mês
      </Typography>

      <Typography
        variant="body1"
        color="#FFFFFF"
      >
        R$ 3.450,00
      </Typography>

      <View style={styles.badge}>

        <MaterialIcons
          name="trending-down"
          size={16}
          color="#FFFFFF"
        />

        <Typography
          variant="body1"
          color="#FFFFFF"
        >
          8% menor que mês passado
        </Typography>

      </View>

    </View>
  );
}