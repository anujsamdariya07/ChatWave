const crypto = require('crypto');
const { connect } = require('getstream');
const bcrypt = require('bcrypt');
const StreamChat = require('stream-chat');

const API_KEY = process.env.STREAM_API_KEY;
const API_SECRET = process.env.STREAM_API_SECRET;
const APP_ID = process.env.STREAM_APP_ID;

const signUp = async (req, res) => {
  try {
    const { fullName, username, password, phoneNumber } = req.body;

    const userId = crypto.randomBytes(16).toString('hex');

    const serverClient = connect(API_KEY, API_SECRET, APP_ID);

    const hashedPassword = await bcrypt.hash(password, 10);

    const token = serverClient.createUserToken(userId);

    res
      .status(200)
      .json({ token, fullName, username, userId, hashedPassword, phoneNumber });
  } catch (error) {
    console.log(`ERROR: ${error}`);

    res.status(500).json({ msg: error });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const serverClient = connect(API_KEY, API_SECRET, APP_ID);
    const client = StreamChat.getInstance(API_KEY, API_SECRET);

    const { users } = await client.queryUsers({ name: username });
  } catch (error) {
    console.log(`ERROR: ${error}`);

    res.status(500).json({ msg: error });
  }
};

module.exports = { login, signUp };
