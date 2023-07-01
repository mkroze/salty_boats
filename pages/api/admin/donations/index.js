import { getSession } from 'next-auth/react';
import Donation from '../../../../models/Donation';
import db from '../../../../utils/db';

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session || !session.user.isAdmin) {
    return res.status(401).send('admin signin required');
  }
  // const { user } = session;
  if (req.method === 'GET') {
    return getHandler(req, res);
  } else if (req.method === 'POST') {
    return postHandler(req, res);
  } else {
    return res.status(400).send({ message: 'Method not allowed' });
  }
};
const postHandler = async (req, res) => {
  await db.connect();
  const newDonation = new Donation({
    title: 'sample title',
    image: '/public/logoB.png',
    summary: 'sample summary',
    description: 'sample category',
  });

  const donation = await newDonation.save();
  await db.disconnect();
  res.send({ message: 'Article created successfully', donation });
};
const getHandler = async (req, res) => {
  await db.connect();
  const donations = await Donation.find({});
  console.log('we are inside the get hangler :');

  await db.disconnect();
  res.send(donations);
};
export default handler;