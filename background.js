chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url && changeInfo.url.includes("https://www.youtube.com/watch?v")) {
    // Extract the video ID from the URL
    let videoId = new URL(changeInfo.url).searchParams.get("v");
    
    if (videoId) {
      // Construct the new URL for youtube-nocookie.com
      let newUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`;

      // Update the tab with the new URL
      chrome.tabs.update(tabId, { url: newUrl }, () => {
        // Wait for a second before reloading the page
        setTimeout(() => {
          chrome.tabs.reload(tabId);
        }, 1000);
      });
    }
  }
});
