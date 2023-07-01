import BigTitles from '../BigTitle';

const BlogArticle = ({ article }) => {
  function splitString(string, delimiter) {
    if (string.includes(delimiter)) {
      const substrings = string
        .split(delimiter)
        .map((substring) => substring.trim());
      return [substrings[0], substrings[1]];
    } else {
      return [null, null];
    }
  }
  return (
    <>
      <BigTitles
        title1={splitString(article.title, ':')[0]}
        title2={splitString(article.title, ':')[1]}
      />
      
        <div className="flex flex-row">
          <img
            src={article.image}
            alt={article.title}
            className="m-auto rounded-xl w-1/3 mx-12"
          />
          <div className="m-auto w-2/3 bg-cpink rounded-md">
            {article.description.map((paragraph, index) => {
              return index == 0 ? (
                <p className=" mb-3 mx-12  m-auto mt-4 font-semi text-justify text-gray-900  first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-lgreen  first-letter:mr-3 first-letter:float-left">
                  {paragraph}
                </p>
              ) : (
                <p className="font-semi  mx-12  m-auto mt-4 text-justify text-gray-900">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
      
    </>
  );
};

export default BlogArticle;
