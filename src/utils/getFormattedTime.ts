export const getFormattedTime = (dateString: string) => {
  const date = new Date(dateString);

  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

  return hours + ':' + formattedMinutes;
};
