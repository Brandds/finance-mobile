export type SecuritySectionProps = {
    biometricEnabled: boolean;

    onChangePasswordPress: () => void;

    onBiometricChange: (
        value: boolean
    ) => void;
};
