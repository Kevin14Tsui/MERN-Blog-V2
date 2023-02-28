export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://med.stanford.edu/news/all-news/2021/09/cat-fur-color-patterns/_jcr_content/main/image.img.780.high.jpg/cat_by-Kateryna-T-Unsplash.jpg"
          alt="cat"
        />
      </div>
      <div className="texts">
        <h2>Cat</h2>
        <p className="info">
          <a href="s" className="author">
            Kevin
          </a>
          <time>2023-2-28 16:45</time>
        </p>
        <p className="summary">qweqeqeqwe</p>
      </div>
    </div>
  );
}
