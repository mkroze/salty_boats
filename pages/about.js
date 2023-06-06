import Layout from '../components/Layout';
import Mission from '../components/aboutComponents/Mission';
import Features from '../components/indexComponents/Features';
import Founders from '../components/aboutComponents/Founders';

const About = () => {
  return (
    <Layout title="About us">
      <Mission />
      <Founders />
    </Layout>
  );
};

export default About;
