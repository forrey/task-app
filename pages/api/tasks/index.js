import {
  connectDatabase,
  getDocuments,
  insertDocument,
  deleteDocument,
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
    const {
      id,
      title,
      slug,
      description,
      descriptionTwo,
      project,
      priority,
      taskType,
      status,
      date,
      link,
    } = req.body;

    if (!title || !description) {
      res.status(422).json({ message: "Invalid data" });
      return;
    }

    try {
      await insertDocument(client, "tasks", {
        title: title,
        id: id,
        slug: slug,
        description: description,
        descriptionTwo: descriptionTwo,
        project: project,
        priority: priority,
        link: link,
        taskType: taskType,
        status: status,
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
      const documents = await getDocuments(
        client,
        "tasks",
        { status: "new" },
        {
          priority: 1,
        }
      );
      res.status(200).json({ tasks: documents });
    } catch (error) {
      res.status(500).json({ message: "Failed to get tasks" });
    }
  }

  if (req.method === "DELETE") {
    const { id } = req.body;
    try {
      await deleteDocument(client, "tasks", { id: id });
    } catch (error) {
      res.status(500).json({ message: "failed to delete" });
      return;
    }

    res.status(201).json({ message: "Successfully deleted" });
  }

  client.close();
}

export default handler;
