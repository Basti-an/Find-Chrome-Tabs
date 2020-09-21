"use strict";
(function () {
  function sendValue() {
    const { value } = document.getElementById("findTabInput");
    const port = chrome.runtime.connect({ name: "query" });
    port.postMessage({ value });
  }

  document.addEventListener("DOMContentLoaded", () => {
    document
      .getElementById("findTabInput")
      .addEventListener("keyup", sendValue);
  });
}());