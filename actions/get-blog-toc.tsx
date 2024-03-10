export const getBlogTOC = (blocks: any) => {
  if (blocks?.length <= 0 || !blocks) return;

  const filteredBlocks = blocks.filter(
    (block: any) => block.type === "heading"
  );

  // console.log(filteredBlocks);

  const toc: any = [];
  filteredBlocks.forEach((block: any, index: number) => {
    if (
      block.type !== "heading" ||
      !(block.content.length > 0 && block.content[0].text)
    )
      return;

    let indexProperty = {
      text: "",
      id: "",
      level: "",
    };

    indexProperty.text = block.content[0].text;
    indexProperty.id = block.id;
    indexProperty.level = block.props.level;

    toc.push(indexProperty);
  });

  return toc;
};

const test = [
  {
    id: "3e1d28bc-f6c9-49a7-8398-c9476376093c",
    userId: "user_2Y6yVOm9Sps5mz3eb2oTVvM2HLz",
    title: "Blog is funny!!!",
    description:
      "Oh meaning.y gosh. I actually found the cover I was hoping to find. This song has always been a favorite. But since losing my dad in September, the lyrics have a whole new m",
    content: [
      {
        id: "6a1d1b04-c0a3-4a95-9313-c50c4ab17487",
        type: "heading",
        props: {
          level: 1,
          textColor: "default",
          textAlignment: "center",
          backgroundColor: "default",
        },
        content: [{ text: "Blog is funny!!!", type: "text", styles: {} }],
        children: [],
      },
      {
        id: "3ae98ace-25a0-405b-9507-4e0788fa94c1",
        type: "heading",
        props: {
          level: 1,
          textColor: "default",
          textAlignment: "left",
          backgroundColor: "default",
        },
        content: [{ text: "Heading Two", type: "text", styles: {} }],
        children: [],
      },
      {
        id: "79f3fa28-1c35-414a-8270-89cf32991c29",
        type: "paragraph",
        props: {
          textColor: "default",
          textAlignment: "left",
          backgroundColor: "default",
        },
        content: [
          {
            text: "Oh meaning.y gosh. I actually found the cover I was hoping to find. This song has always been a favorite. But since losing my dad in September, the lyrics have a whole new m",
            type: "text",
            styles: {},
          },
        ],
        children: [],
      },
      {
        id: "844ba116-b112-4ef1-8972-7c4c123f06e0",
        type: "paragraph",
        props: {
          textColor: "default",
          textAlignment: "left",
          backgroundColor: "default",
        },
        content: [],
        children: [],
      },
      {
        id: "f1061879-77d2-49cb-9b83-3e2ead709d7e",
        type: "paragraph",
        props: {
          textColor: "default",
          textAlignment: "left",
          backgroundColor: "default",
        },
        content: [],
        children: [],
      },
      {
        id: "a84f7f28-1814-47a5-a17d-1ca7be07ca23",
        type: "heading",
        props: {
          level: 2,
          textColor: "default",
          textAlignment: "left",
          backgroundColor: "default",
        },
        content: [{ text: "Sub-heading one", type: "text", styles: {} }],
        children: [],
      },
      {
        id: "e76a5139-b9de-49d0-9ae8-12a2d7dd21e8",
        type: "paragraph",
        props: {
          textColor: "default",
          textAlignment: "left",
          backgroundColor: "default",
        },
        content: [],
        children: [],
      },
    ],
    isPublished: true,
    categoryId: "36914671-4365-450d-8db6-8eb1411fe66e",
    createdAt: new Date("2023-11-23T18:24:12.000Z"),
    updatedAt: new Date("2023-11-24T17:23:16.000Z"),
    category: { id: "36914671-4365-450d-8db6-8eb1411fe66e", name: "Fitness" },
  },
];
