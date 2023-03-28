exports.validationInputs = async (req, res, next) => {
  const {title, body} =  req.body
  try {
    if (!title) {
      return  res.status(400).send({message: "please put a title to the email "})
    }
    if (!body) {
        return  res.status(400).send({message: "empty body for email "})
    }
    req.message = {...req.message, title, body}
    next()
  } catch (error) {
    console.log("error", error)
    return res.status(500).send('Internal server error');
  }
}