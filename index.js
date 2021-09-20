// this will allow us to import our variable
require("dotenv").config();
// the following lines are required to initialize a Notion client
const { Client } = require("@notionhq/client");
// this line initializes the Notion Client using our key
const notion = new Client({ auth: process.env.NOTION_API_KEY });

const databaseId = process.env.NOTION_API_DATABASE;

exports.getDatabase = async function () {
    const response = await notion.databases.query({ database_id: databaseId });

    const responseResults = response.results.map((page) => {
        return {
        id: page.id,
        name: page.properties.Name.title[0]?.plain_text,
        role: page.properties.Role.rich_text[0]?.plain_text,
        };
    });

    return responseResults;
};

exports.newEntryToDatabase = async function (name, role) {
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_API_DATABASE,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Role: {
          rich_text: [
            {
              text: {
                content: role,
              },
            },
          ],
        },
      },
    });
  
    return response;
  };