const capitalizeTitle = (slug: string): string => {
  const splitTitle = slug.split(" ");

  for (let i = 0; i < splitTitle.length; i++) {
    const titleWord = splitTitle[i];
    splitTitle[i] = titleWord.charAt(0).toUpperCase() + titleWord.slice(1);
  }

  splitTitle.pop();

  return splitTitle.join(" ");
};

export default capitalizeTitle;
