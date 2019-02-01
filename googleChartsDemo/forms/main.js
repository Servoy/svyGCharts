/**
 * Callback method when the user changes tab in a tab panel or divider position in split pane.
 *
 * @param {Number} previousIndex index of tab shown before the change
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"9FAFF0C7-B290-49F1-8616-7FE1249059A7"}
 */
function onTabChange(previousIndex, event) {
	elements.lblSolutionName.text = elements.tabs.getTabTextAt(elements.tabs.tabIndex);
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"5D76AFD9-2847-4F07-B64F-4BCCBD7D50EA"}
 */
function onShow(firstShow, event) {
	onTabChange(-1, event);
}
