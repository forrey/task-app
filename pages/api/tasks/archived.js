import { connectDatabase, getDocuments } from "../../../helpers/db-utils";

async function handler(req, res) {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connection failed" });
    return;
  }

  if (req.method === "GET") {
    try {
      const documents = await getDocuments(
        client,
        "tasks",
        { status: "archived" },
        {
          priority: 1,
        }
      );
      res.status(200).json({ tasks: documents });
    } catch (error) {
      res.status(500).json({ message: "Failed to get tasks" });
    }
  }

  client.close();
}

export default handler;
