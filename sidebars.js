module.exports = {
  denon: [
    {
      type: "category",
      label: "Denon",
      items: ["denon/home", "denon/installation", "denon/usage", "denon/contributing"],
    },
    {
      type: "category",
      label: "Advanced",
      items: [
        {
          type: "category",
          label: "Configuration",
          items: [
            "denon/configuration/introduction",
            "denon/configuration/script",
            "denon/configuration/watcher",
            "denon/configuration/logger",
          ],
        },
        "denon/module",
      ],
    },
  ],
};
