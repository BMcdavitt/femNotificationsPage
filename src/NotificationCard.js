import { members } from './data_members'

function NotificationCard(props) {
  const parseText = (text) => {
    return text.replace('[[a:', '<span class="link">').replace('[[g:', '<span class="group">').replace(']]', '</span>')
  }

  const getAvatarImage = (firstName, lastName) => {
    return `./images/avatar-${firstName}-${lastName}.webp`
  }

  const displayMessage = (message) => {
    if (message) return <div className="NotificationMessage">{message}</div>
  }

  const notificationCardClass = (read) => {
    return 'NotificationCard' + (!read ? ' NotificationCardNew' : '')
  }

  const displayThumbnail = (photo) => {
    if (photo) {
      return <img className="NotificationPhotoThumbnail" src={`./images/${photo}`} alt="howl" />
    }
  }

  const memberData = members.find((element) => element.id === parseInt(props.memberId))

  return (
    <div className={notificationCardClass(props.read)} onClick={() => props.markRead(props.id)}>
      <img
        className="NotificatoinAvatar"
        src={getAvatarImage(memberData.nameFirst.toLowerCase(), memberData.nameLast.toLowerCase())}
        alt="avatar"
      />
      <div className="NotificationDetails">
        <div className="NotificationString">
          <span className="memberName">{`${memberData.nameFirst} ${memberData.nameLast} `}</span>
          <span dangerouslySetInnerHTML={{ __html: parseText(props.text) }} />
          {!props.read ? <i className="NotificationAlert fa-solid fa-circle"></i> : ''}
        </div>
        <div className="NotificationTime">{props.messageTime}</div>
        {displayMessage(props.message)}
      </div>
      {displayThumbnail(props.photo)}
    </div>
  )
}

export default NotificationCard
