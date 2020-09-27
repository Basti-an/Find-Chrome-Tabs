(function () {
  const selectTab = (tab) => {
    const updateProperties = { active: true, highlighted: true };
    // highlight the given tab
    chrome.tabs.update(tab.id, updateProperties, () => {});
  };

  const query = (input) => {
    const searchterm = input.value.toLowerCase();
    let potentialTabs = [];

    if (searchterm.length >= 2) {
      chrome.tabs.query({ currentWindow: true }, (tabs) => {
        // get tabs which include searchterm
        potentialTabs = tabs.filter((tab) => {
          if (
            tab.title.toLowerCase().includes(searchterm) ||
            tab.url.toLowerCase().includes(searchterm)
          ) {
            return true;
          }
        });

        if (!potentialTabs.length) {
          return;
        }

        if (potentialTabs.length === 1) {
          selectTab(potentialTabs[0]);
          return;
        }

        // select first tab of potentialTabs if all tabs share origin
        const firstTabOrigin = new URL(potentialTabs[0].url).origin;
        const sameOriginTabs = potentialTabs.filter((tab) => {
          if (new URL(tab.url).origin == firstTabOrigin) { // == used deliberately here!
            return true;
          }
        });
        if (sameOriginTabs.length === potentialTabs.length) {
          selectTab(potentialTabs[0]);
        }
      });
    }
  };

  // Add listeners for communication from client
  chrome.runtime.onConnect.addListener((port) => {
    if (port.name === "query") {
      port.onMessage.addListener(query);
    }
  });
}());