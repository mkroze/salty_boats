import { useState } from 'react';
import Layout from '../components/Layout';
import BigTitles from '../components/BigTitle';
import ListOfNeeds from '../components/donationComponent/ListofNeeds';
import Donation from '../models/Donation';
import db from '../utils/db';

export default function Donations ({donations}) {
    const briefs = {
      title1 : "We need you to",
      title2 : "Lend a hand",
      bio : "If you share our passion for thrilling sea adventures and exploring the world's breathtaking wonders, we invite you to embark on an extraordinary journey with Shira3. Our intrepid crew sets sail across the globe, seeking new horizons and embracing the untamed beauty of the open sea. But we can't do it alone - we need your support to make these exhilarating adventures a reality. Join us in our quest for discovery and help us continue our voyage by choosing how to support Shira3 below. Together, we can bring the spirit of adventure to life and create unforgettable memories on the high seas. Fair winds await us, so let's set sail and embrace the thrill of the unknown!",
    }
    const {title1,title2,bio} = briefs;
  return (
    <Layout title="Donations">
        <BigTitles title1={title1} title2={title2} bio= {bio}/>
        <ListOfNeeds listofneeds={donations} />
     
    </Layout>
  );
};

export async function getServerSideProps() {
  await db.connect();
  const donations = await Donation.find().lean();
  return {
    props: {
      donations: donations.map(db.convertDocToObj),
    },
  };
}
