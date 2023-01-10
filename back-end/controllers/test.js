export const HelloMessage = async (req, res, next) => {
  try {
    res.status(200).send("Hello");
  } catch (error) {
    console.log(error);
  }
};
