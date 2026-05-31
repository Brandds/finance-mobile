export type ProfileAvatarProps = {
  imageUrl?: string;
  initials?: string;

  size?: number;

  editable?: boolean;

  onEditPress?: () => void;
};