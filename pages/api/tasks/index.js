import {
  connectDatabase,
  getDocuments,
  insertDocument,
} from "../../../helpers/db-utils";

async function handler(req, res) {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connection failed" });
    return;
  }

  if (req.method === "POST") {
    const { title, slug, description, website, priority, taskType, date } =
      req.body;

    if (!title || !description) {
      res.status(422).json({ message: "Invalid data" });
      return;
    }

    try {
      await insertDocument(client, "tasks", {
        title: title,
        slug: slug,
        description: description,
        website: website,
        priority: priority,
        taskType: taskType,
        date: date,
      });
    } catch (error) {
      res.status(500).json({ message: "Adding data failed" });
      return;
    }

    res.status(201).json({ message: "Success" });
  }

  if (req.method === "GET") {
    try {
      const documents = await getDocuments(client, "tasks");
      res.status(200).json({ tasks: documents });
    } catch (error) {
      res.status(500).json({ message: "Failed to get tasks" });
    }
  }

  client.close();
}

export default handler;
