import { View } from "react-native";


import Typography from "@/components/Typography/Typography";
import { Icon } from "../Icon/Icon";
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
        <Icon
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