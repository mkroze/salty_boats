import User from '../../models/User';
import Item from '../../models/Item';
import Article from '../../models/Article';
import data from '../../utils/data';
import db from '../../utils/db';
import Donation from '../../models/Donation';
const handler = async (req, res) => {
  await db.connect();

  await Item.deleteMany();
  await Item.insertMany(data.items);

  await Article.deleteMany();
  await Article.insertMany(data.articles);
  
  await Donation.deleteMany();
  await Donation.insertMany(data.donations);

  await User.deleteMany();
  await User.insertMany(data.users);

  await db.disconnect();
  res.send({ message: 'seeded successfully' });
};
export default handler;
