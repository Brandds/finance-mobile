import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  Animated,
  Dimensions,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { useTheme } from "@/theme/ThemeProvider";

import { AppBottomSheetProps, AppBottomSheetRef } from "./types";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const AppBottomSheet = forwardRef<AppBottomSheetRef, AppBottomSheetProps>(
  ({ children, snapPoints = ["50%"] }, ref) => {
    const theme = useTheme();

    const [visible, setVisible] = useState(false);
    const translateY = useRef(new Animated.Value(SCREEN_HEIGHT)).current;

    const snapHeight =
      (parseFloat(snapPoints[0]) / 100) * SCREEN_HEIGHT;

    const animateIn = () => {
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
        damping: 20,
        stiffness: 200,
        mass: 0.8,
      }).start();
    };

    const animateOut = (onDone?: () => void) => {
      Animated.timing(translateY, {
        toValue: SCREEN_HEIGHT,
        duration: 250,
        useNativeDriver: true,
      }).start(() => onDone?.());
    };

    useImperativeHandle(ref, () => ({
      present() {
        translateY.setValue(SCREEN_HEIGHT);
        setVisible(true);
        animateIn();
      },
      dismiss() {
        animateOut(() => setVisible(false));
      },
    }));

    const handleBackdropPress = () => {
      animateOut(() => setVisible(false));
    };

    return (
      <Modal
        visible={visible}
        transparent
        animationType="none"
        statusBarTranslucent
        onRequestClose={handleBackdropPress}
      >
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={handleBackdropPress}>
            <View style={styles.backdrop} />
          </TouchableWithoutFeedback>

          <Animated.View
            style={[
              styles.sheet,
              {
                height: snapHeight,
                backgroundColor: theme.colors.surfaceContainer,
                transform: [{ translateY }],
              },
            ]}
          >
            <View style={styles.handle} />
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
  }
);

AppBottomSheet.displayName = "AppBottomSheet";

export default AppBottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },

  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.45)",
  },

  sheet: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },

  handle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#C4C4C4",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 6,
  },
});
