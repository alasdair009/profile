// service-worker.js
self.addEventListener("push", (event) => {
  const options = {
    body: event.data.text(),
    icon: "/am.svg", // Replace with your icon path
  };
  event.waitUntil(
    self.registration.showNotification("Alasdair Macrae", options)
  );
});
