const convertToDisplayTime = (date: string) => {
  const splittedDate = `${date.split(":")[0]}:${date.split(":")[1]}`;
  const amOrPm = +date.split(":")[0] >= 12 ? "PM" : "AM";

  return `${splittedDate} ${amOrPm}`;
};

export default convertToDisplayTime;
