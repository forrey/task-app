import { connectDatabase, insertDocument } from "../../helpers/db-utils";

async function handler(req, res) {
  if (req.method === "POST") {
    const { title, description, website, priority } = req.body;

    if (!title || !description) {
      res.status(422).json({ message: "Invalid data" });
      return;
    }

    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Connection failed" });
      return;
    }

    try {
      await insertDocument(client, "tasks", {
        title: title,
        description: description,
        website: website,
        priority: priority,
      });

      client.close();
    } catch (error) {
      res.status(500).json({ message: "Adding data failed" });
      return;
    }

    res.status(201).json({ message: "Success" });
  }
}

export default handler;
