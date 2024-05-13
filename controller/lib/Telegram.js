const { axiosInstance } = require("./axios");

const sendMessage = async (message, text) => {
  const chatID = message.chat.id;
  try {
    await axiosInstance
      .get(`/sendMessage`, {
        params: {
          chat_id: chatID,
          text: text,
        },
      })
      .then((data) => {
        console.log("data: ", data);
      })
      .catch((error) => {
        console.log("Catch Axios Error", error);
      });
  } catch (error) {
    console.log("Catch Error", error);
  }
};

module.exports = {
  sendMessage,
};
