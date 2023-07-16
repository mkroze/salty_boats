import Layout from '../../components/Layout';
import ItemView from '../../components/shopComponents/ItemView';
import db from '../../utils/db';
import Item from '../../models/Item';
import { useContext } from 'react';
import { Store } from '../../utils/Store';
import { useRouter } from 'next/router';
import axios from 'axios';

const ItemScreen = ({ item }) => {
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  if (!item) {
    return <Layout title="Produit introuvable">Produit introuvable</Layout>;
  }
  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === item.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/items/${item._id}`);

    if (data.countInStock < quantity) {
      return toast.error('Sorry. item is out of stock');
    }

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });
    console.log('dispatch done');
    router.push('/Cart');
  };
  return (
    <Layout>
      <ItemView item={item} addToCartHandler={addToCartHandler} />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const item = await Item.findOne({ slug }).lean();
  return {
    props: {
      item: item ? db.convertDocToObj(item) : null,
    },
  };
}

export default ItemScreen;
