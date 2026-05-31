export type ProfileHeaderSectionProps = {
name: string;
email: string;

imageUrl?: string;
initials?: string;

onEditAvatar?: () => void;
onEditProfile?: () => void;
};
