import Layout from '../components/Layout';
import BigTitles from '../components/BigTitle';
import Items from '../components/shopComponents/items';
import Item from '../models/Item';
import db from '../utils/db';
export default function Shop({items}) {
  const briefs = {
    title1: 'Support us',
    title2: 'Gear up !',
    bio: 'Welcome to our thrilling merch store! Join our adventurous group of YouTubers as they set sail in search of freedom and thrilling high-seas escapades. Explore our exclusive collection, featuring stylish apparel and awe-inspiring accessories inspired by their daring journeys. Embrace the excitement and discover the perfect memento for your own fearless spirit. Set sail with us today!',
  };
  const { title1, title2, bio } = briefs;
  return (
    <Layout title="Shop">
      <BigTitles title1={title1} title2={title2} bio={bio} />
      <Items items={items} />
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const items = await Item.find().lean();
  return {
    props: {
      items: items.map(db.convertDocToObj),
    },
  };
}
