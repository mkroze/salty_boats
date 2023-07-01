import Layout from '../../components/Layout';
import BlogArticle from '../../components/blogComponents/BlogArticle';
import Article from '../../models/Article';
import db from '../../utils/db';

export default function ArticlePost({ article }) {
  return <Layout title="Article">
    <BlogArticle article={article}/>
  </Layout>;
}
export async function getServerSideProps(context) {
  // const { query } = useRouter();
  const { params } = context;
  const { id } = params;

  await db.connect();

  const article = await Article.findById(id).lean();
  return {
    props: {
      article: article ? db.convertDocToObj(article) : null,
    },
  };
}
