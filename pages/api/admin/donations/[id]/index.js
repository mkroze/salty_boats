import { getSession } from 'next-auth/react';
import Donation from '../../../../../models/Donation';
import db from '../../../../../utils/db';

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session || (session && !session.user.isAdmin)) {
    return res.status(401).send('signin required');
  }

  const { user } = session;
  if (req.method === 'GET') {
    return getHandler(req, res, user);
  } else if (req.method === 'PUT') {
    return putHandler(req, res, user);
  } else if (req.method === 'DELETE') {
    return deleteHandler(req, res, user);
  } else {
    return res.status(400).send({ message: 'Method not allowed' });
  }
};
const getHandler = async (req, res) => {
  await db.connect();
  const donation = await Donation.findById(req.query.id);
  await db.disconnect();
  res.send(donation);
};
const putHandler = async (req, res) => {
  await db.connect();
  const donation = await Donation.findById(req.query.id);
  if (donation) {
    donation.title = req.body.title;
    donation.image = req.body.image;
    donation.summary = req.body.summary;
    donation.description = req.body.description;
    
    await donation.save();
    await db.disconnect();
    res.send({ message: 'Donation updated successfully' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Donation not found' });
  }
};
const deleteHandler = async (req, res) => {
  await db.connect();
  const donation = await Donation.findById(req.query.id);
  if (donation) {
    await donation.deleteOne();
    await db.disconnect();
    res.send({ message: 'Donation deleted successfully' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Donation not found' });
  }
};
export default handler;