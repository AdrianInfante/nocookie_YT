chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url && changeInfo.url.includes("https://www.youtube.com/watch?v")) {
      let newUrl = changeInfo.url.replace("youtube.com", "yout-ube.com");
      chrome.tabs.update(tabId, { url: newUrl }, () => {
        // Wait for a second before reloading the page
        setTimeout(() => {
          chrome.tabs.reload(tabId);
        }, 1000); // 1000 milliseconds = 1 second
      });
    }
  });
  