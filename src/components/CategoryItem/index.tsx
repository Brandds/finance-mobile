import { View } from "react-native";


import Typography from "@/components/Typography/Typography";
import { Icon } from "../Icon/Icon";
import { styles as stylesCategoryItem} from "./styles";
import { useTheme } from "@/theme/ThemeProvider";


export default function CategoryItem({
  item,
}: any) {
  const theme = useTheme();
  const styles = stylesCategoryItem(theme);
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