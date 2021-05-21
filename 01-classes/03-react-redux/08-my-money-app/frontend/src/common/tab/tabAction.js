export function changeTab(tabId) {
    return {
        type: "TAB_SELECTED",
        payload: tabId
    }
}