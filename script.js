// Keep iframe heights up to date
window.addEventListener("message", function (e) {
  const d = e.data;
  if (d.type !== "tako::resize") {
    return;
  }
  for (let iframe of document.querySelectorAll("iframe")) {
    if (iframe.contentWindow !== e.source) {
      continue;
    }
    iframe.style.height = d.height + "px";
  }
});
