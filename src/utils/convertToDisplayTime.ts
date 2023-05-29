const convertToDisplayTime = (date: string) => {
  let hour = +date.split(":")[0];
  if (hour > 12) {
    hour -= 12;
  }
  const splittedDate = `${hour}:${date.split(":")[1]}`;
  const amOrPm = +date.split(":")[0] >= 12 ? "PM" : "AM";

  return `${splittedDate} ${amOrPm}`;
};

export default convertToDisplayTime;
