const folderData = {
  name: "root",
  isFolder: true,
  elements: [
    {
      name: "public",
      isFolder: true,
      elements: [
        {
          name: "index.html",
          isFolder: false,
        },
      ],
    },
    {
      name: "src",
      isFolder: true,
      elements: [
        {
          name: "components",
          isFolder: true,
          elements: [
            {
              name: "FolderStructure.js",
              isFolder: false,
            },
          ],
        },
        {
          name: "data",
          isFolder: true,
          elements: [
            {
              name: "folderData.json",
              isFolder: false,
            },
            {
              name: "App.js",
              isFolder: false,
            },
            {
              name: "index.js",
              isFolder: false,
            },
            {
              name: "style.css",
              isFolder: false,
            },
          ],
        },
      ],
    },
    {
      name: "package.json",
      isFolder: false,
    },
  ],
};

export default folderData;
