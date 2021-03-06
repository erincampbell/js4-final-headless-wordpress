export const getFeed = () => {
  return (
    fetch('https://www.domain.com.au/news/wp-json/posts?filter%5Bcat%5D=1340')
    .then(response => response.json())
    .then(data => data)
  );
};

export const handleFeed = (newsFeed) => {
  const resultArray = [];
  newsFeed.map((result) => {
    console.log(result);
    const terms = result.terms.category.length > 1 ? result.terms.category : result.terms.category[0].name;
    const thumbnail = result.featured_image === null ? '' : result.featured_image.content;
    return resultArray.push({
      id: result.ID,
      title: result.title,
      image: thumbnail,
      content: result.content,
      tags: terms,
      slug: result.slug,
    });

  });
  return resultArray;
};
