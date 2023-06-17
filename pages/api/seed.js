import User from "../../models/User";

const handler = async (req, res) => {
  await db.connect();

  //   await Breed.deleteMany();
  //   await Breed.insertMany(data.breeds);

  await db.disconnect();
  res.send({ message: "seeded successfully" });
};
export default handler;
