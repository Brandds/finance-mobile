import { View } from "react-native";

import Typography from "@/components/Typography/Typography";


import { ProfileHeaderSectionProps } from "./types";

import { styles } from "./styles";
import ProfileAvatar from "../../components/ProfileAvatar";
import { Button } from "@/components";

export default function ProfileHeaderSection({
    name,
    email,
    imageUrl,
    initials,
    onEditAvatar,
    onEditProfile,
}: ProfileHeaderSectionProps) {
    return (
        <View style={styles.container}> 
            <ProfileAvatar
                imageUrl={imageUrl}
                initials={initials}
                editable
                onEditPress={onEditAvatar}
            />
            <View style={styles.infoContainer}>
                <Typography variant="h2">
                    {name}
                </Typography>

                <Typography
                    variant="body2"
                    color="textSecondary"
                    style={styles.email}
                >
                    {email}
                </Typography>
            </View>

            <Button
                title="Editar Perfil"
                onPress={onEditProfile}
                style={styles.editButton}
            />
        </View>
    );
}
