chrome.tabs.onUpdated.addListener(function(tabId,changeInfo){
    const url = changeInfo.pendingUrl||changeInfo.url;
    const hostname = new URL(url).hostname;

    chrome.storage.local.get([blocked],function(local){
        const {blocked}=local;
        if (Array.isArray(blocked)&& blocked.find(domain => hostname.includes(domain))) {
            chrome.tabs.remove(tabId);
        }
    })
});