import { StrictModifiers } from "@popperjs/core";

export const modifiers: StrictModifiers[] = [
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