import NotificationCard from "./NotificationCard";
import NotificationSectionHeader from "./NotificationSectionHeader";

type Props = {
  title: string;

  notifications: any[];
};

export default function NotificationSection({
  title,
  notifications,
}: Props) {
  return (
    <>
      <NotificationSectionHeader title={title} />

      {notifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          {...notification}
        />
      ))}
    </>
  );
}