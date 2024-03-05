export const modifiers = [
    {
      name: "offset",
      requiresIfExists: ["offset"],
      options: {
        offset: [0, 8],
      },
    },
    {
      name: "preventOverflow",
      options: {
        mainAxis: true,
        padding: 8,
      },
    },
  ];