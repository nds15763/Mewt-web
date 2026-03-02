import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.NOTION_DATABASE_ID;

export async function getPosts() {
  if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
    // Return mock data if Notion is not configured
    return [
      {
        id: "1",
        title: "Mewt 2.0 版本更新说明：足迹热力图功能上线",
        slug: "mewt-2-0-update",
        date: "2026-03-01",
        category: "产品更新",
        excerpt: "我们引入了全新的足迹热力图功能，旨在让您更直观地回顾自己的旅行历程...",
      },
      {
        id: "2",
        title: "旅行指南：第一次独自出国旅行需要准备什么？",
        slug: "travel-guide-prep",
        date: "2026-02-25",
        category: "旅行攻略",
        excerpt: "资深旅行达人建议，第一次出国旅行的前 48 小时准备工作至关重要...",
      },
    ];
  }

  try {
    // @ts-ignore
    const response = await notion.databases.query({
      database_id: databaseId!,
      filter: {
        property: "Status",
        select: {
          equals: "Published",
        },
      },
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
    });

    return response.results.map((page: any) => {
      return {
        id: page.id,
        title: page.properties.Title.title[0]?.plain_text || "无标题",
        slug: page.properties.Slug.rich_text[0]?.plain_text || page.id,
        date: page.properties.Date.date?.start || "",
        category: page.properties.Category.select?.name || "常规",
        excerpt: page.properties.Excerpt.rich_text[0]?.plain_text || "",
      };
    });
  } catch (error) {
    console.error("Error fetching posts from Notion:", error);
    return [];
  }
}
