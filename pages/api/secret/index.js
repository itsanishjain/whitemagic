import { getSession } from "next-auth/react";

export default async (req, res) => {
  const session = await getSession({ req });
  console.log("SESSION", session);
  if (session) {
    res.send({
      content: "You are logged in",
    });
  } else {
    res.send({
      error: "You are not logged in",
    });
  }
};
