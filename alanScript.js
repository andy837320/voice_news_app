intent(` $(item* (.*))`, (p) => {
  if (
    p.item.value === "health" ||
    p.item.value === "business" ||
    p.item.value === "sports" ||
    p.item.value === "general"
  ) {
    p.play({ command: "VoiceNews", data: p.item.value });
    p.play(`Fetching News from ${p.item.value} Category`);
  } else {
    p.play("Cannot get data");
  }
});
