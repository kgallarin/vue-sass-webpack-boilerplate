export const checkNull = value => {
    return typeof value != "undefined" && value;
}
export const isTabActive = (tab_description, activeTab) => {
  return activeTab === tab_description
}

export default {
    checkNull,
    isTabActive
};
