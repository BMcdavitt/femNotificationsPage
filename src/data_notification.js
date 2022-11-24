const notifications = [
  {
    sender: '1',
    text: 'reacted to your recent post [[a:My first tournament today!]]',
    //  Real world this would be a time stamp and the display would be calculated
    datetimeDisplay: '1m ago',
    read: false,
    message: '',
    photo: '',
  },
  {
    sender: '2',
    text: 'followed you',
    //  Real world this would be a time stamp and the display would be calculated
    datetimeDisplay: '5m ago',
    read: false,
    message: '',
    photo: '',
  },
  {
    sender: '3',
    text: 'has joined your group [[g:Chess Club]]',
    //  Real world this would be a time stamp and the display would be calculated
    datetimeDisplay: '1 day ago',
    read: false,
    message: '',
    photo: '',
  },
  {
    sender: '4',
    text: 'sent you a private message',
    //  Real world this would be a time stamp and the display would be calculated
    datetimeDisplay: '5 days ago',
    read: true,
    message: 'Hello, thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and I\'m already having lots of fun and improving my game.',
    photo: '',
  },
  {
    sender: '5',
    text: 'commented on your picture',
    //  Real world this would be a time stamp and the display would be calculated
    datetimeDisplay: '1 week ago',
    read: true,
    message: '',
    photo: 'image-chess.webp',
  },
  {
    sender: '6',
    text: 'recent post [[a:5 end-game strategies to increase your win rate]]',
    //  Real world this would be a time stamp and the display would be calculated
    datetimeDisplay: '',
    read: true,
    message: '',
    photo: '',
  },
  {
    sender: '7',
    text: 'left the group [[g:Chess Club]]',
    //  Real world this would be a time stamp and the display would be calculated
    datetimeDisplay: '2 weeks ago',
    read: true,
    message: '',
    photo: '',
  },
]

module.exports = { notifications }