chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url && changeInfo.url.includes("https://www.youtube.com/watch?v")) {
    // Extract the video ID from the URL
    let videoId = new URL(changeInfo.url).searchParams.get("v");

    if (videoId) {
      // Construct the new URL for youtube-nocookie.com
      let newUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`;

      // Open the new URL in a new tab
      chrome.tabs.create({ url: newUrl }, (newTab) => {
        console.log(`New tab created with ID: ${newTab.id}`);

        // Redirect the current tab to a blank page
        chrome.tabs.update(tabId, { url: 'https://www.youtube.com/' });
        setTimeout(() => {
          chrome.tabs.reload(tabId);
        }, 1000);
      });
    }
  }
});
