import { React, useState } from "react";
import { AnimatePresence } from "framer-motion";
import NotificationItem from "./../components/notification-item";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const pushNotification = (notification) => {
    setNotifications([...notifications, notification]);
  };

  const styles = {
    notifications: {
      top: 0,
      right: 0,
      position: "fixed",
    },
  };

  return (
    <div>
      <button
        onClick={() =>
          pushNotification({
            title: "Test notification",
            description:
              "This is a test notification that is being animated using framer-motion",
            id: Math.random(),
            onClose: (id) => {
              setNotifications((currentNotifications) =>
                currentNotifications.filter(
                  (notification) => notification.id !== id
                )
              );
            },
          })
        }
      >
        Push notification
      </button>
      <div style={styles.notifications}>
        <AnimatePresence>
          {notifications.map((notification) => (
            <NotificationItem {...notification} key={notification.id} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
