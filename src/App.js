import {useState, useEffect } from 'react'
import './css/App.css'
import { notifications } from './data_notification'
import NotificationCard from './NotificationCard'

function App() {
  const [messageCount, updateMessageCount] = useState(0)

  const [notificationState, updateNotificationState] = useState(notifications)

  useEffect(() => {
    updateMessageCount(getMessageCount())
  }, [notificationState])

  
  const markRead = (id) => {
    updateNotificationState((oldNotificationState) =>
      oldNotificationState.map((value, key) => (key === id ? { ...value, read: true } : { ...value }))
    )
  }

  const getMessageCount = () => {
    return notificationList.filter((notification) => !notification.props.read).length
  }

  const markMessagesRead = () => {
    updateNotificationState((oldNotificationState) => oldNotificationState.map((value) => ({ ...value, read: true })))
  }

  const notificationList = notificationState.map((value, id) => (
    <NotificationCard
      key={id}
      id={id}
      text={value.text}
      datetimeDisplay={value.datetimeDisplay}
      read={value.read}
      message={value.message}
      memberId={value.sender}
      messageTime={value.datetimeDisplay}
      photo={value.photo}
      markRead={markRead}
    />
  ))

  return (
    <div className="App">
      <main>
        <header>
          <div className="notifictions">
            Notifications <div className="notificaitonCounter">{messageCount}</div>
          </div>
          <div className="actions" onClick={markMessagesRead}>
            Mark all as read
          </div>
        </header>
        <div className="notifList">{notificationList}</div>
      </main>
    </div>
  )
}

export default App
