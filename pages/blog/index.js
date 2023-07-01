import Layout from "../../components/Layout";
import db from "../../utils/db";
import Article from "../../models/Article";
import ListOfArticles from "../../components/blogComponents/listOfArticles";

export default function Blog ({articles}) {
    return ( <Layout title="Blog">
        <ListOfArticles articles={articles} />
    </Layout> );
}
 
export async function getServerSideProps() {
    await db.connect();
    const articles = await Article.find().lean();
    return {
      props: {
        articles: articles.map(db.convertDocToObj),
      },
    };
  }