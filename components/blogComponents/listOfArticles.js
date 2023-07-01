const ListOfArticles = ({ articles }) => {
  return (
    <div className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
      {articles.map((article) => {
        return (
          <a href={`/blog/${article._id}`}>
            <article className="group">
              <img
                alt="Lava"
                src={article.image}
                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
              />

              <div className="p-4">
                <h3 className="text-lg font-medium text-lgreen">
                  {article.title}
                </h3>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-dblue">
                  {article.summary}
                </p>
              </div>
            </article>
          </a>
        );
      })}
    </div>
  );
};

export default ListOfArticles;
