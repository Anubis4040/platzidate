export function getTimestamp (){
  return Date.now();
}

export function getLongTime(locate = 'en-US') {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
  };
  return new Date().toLocaleString(locate, options);
}