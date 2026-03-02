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
        title: "Mewt 2.0 版本更新说明：全新爱心值系统上线",
        slug: "mewt-2-0-update",
        date: "2026-03-01",
        category: "产品更新",
        excerpt: "我们引入了全新的爱心值激励机制，旨在奖励积极提供寻猫线索的社区成员...",
      },
      {
        id: "2",
        title: "寻猫指南：发现迷路猫后的黄金 48 小时该做什么？",
        slug: "finding-guide-48h",
        date: "2026-02-25",
        category: "科普知识",
        excerpt: "专业的寻宠专家建议，发现猫咪走失后的前 48 小时是寻回成功率最高的黄金期...",
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
