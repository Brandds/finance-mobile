import { View } from 'react-native';


import Screen from '@/components/Screen/Screen';

import { useTheme } from '@/theme/ThemeProvider';

import { Button } from '@/components';
import Header from '@/components/Header';
import { styles as stylesChangePassword } from 'src/features/changePassword/styles/changePassword.styles';
import ChangePasswordForm from '../form/ChangePasswordForm';

export default function ChangePassword() {
    const theme = useTheme();
    const styles = stylesChangePassword(theme);

    return (
        <Screen>

            <View style={styles.content}>
                <Header title="Alterar Senha" />
                <ChangePasswordForm/>
            </View>
        </Screen>
    );
}