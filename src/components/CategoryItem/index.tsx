import { View }
from "react-native";

import { MaterialIcons }
from "@expo/vector-icons";

import Typography
from "@/components/Typography/Typography";
import { styles } from "./styles";


export default function CategoryItem({
  item,
}: any) {

  return (
    <View style={styles.container}>

      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor:
              item.background,
          },
        ]}
      >
        <MaterialIcons
          name={item.icon}
          size={24}
          color={item.color}
        />
      </View>

      <Typography variant="body1">
        {item.title}
      </Typography>

    </View>
  );
}