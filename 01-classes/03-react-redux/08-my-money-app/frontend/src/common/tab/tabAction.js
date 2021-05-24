export function selectTab(tabId) {
    return {
        type: "TAB_SELECTED",
        payload: tabId
    }
}

export function hideTabs(tabsConfig) {
    return {
        type: "TAB_SHOWED",
        payload: tabsConfig
    }
}