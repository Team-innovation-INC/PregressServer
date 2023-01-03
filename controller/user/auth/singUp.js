const register = async (req, res) => {
  try {

  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: " please try again" });
  }
};

module.exports = register;
