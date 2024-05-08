function createChatbox(elementId) {
  let element = document.getElementById(elementId);

  if (!element) {
    return;
  }
  element.style.position = "fixed";
  element.style.bottom = "15px";
  element.style.right = "15px";
  element.style.zIndex = "2147483600";
  element.style.minHeight = "75px";
  element.style.minWidth = "75px";
  element.style.overflow = "hidden";

  let iframe = document.createElement("iframe");

  iframe.src = "https://phukoika.github.io/Chatbox-Helper/";
  iframe.id = "widget-frame";
  iframe.width = "75px";
  iframe.height = "75px";
  iframe.style.border = "none";
  iframe.title = "Via Chatbox AI";
  iframe.allowFullscreen = true;
  iframe.webkitallowfullscreen = true;
  iframe.mozallowfullscreen = true;

  element.appendChild(iframe);
}

createChatbox("chatbox");
