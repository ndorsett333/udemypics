import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 8ae791fd024b5c08d5a96fd789ab5f85c6685dd6ea8fbd4834cd21cf2273708d"
  }
});
