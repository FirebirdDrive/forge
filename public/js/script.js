var viewer;

const onToolbarCreated = (e) => {
    const settingsTools = viewer.toolbar.getControl('settingsTools')
    settingsTools.removeControl('toolbar-modelStructureTool')
    settingsTools.removeControl('toolbar-propertiesTool')
    settingsTools.removeControl('toolbar-settingsTool')
    settingsTools.removeControl('toolbar-fullscreenTool')

    viewer.removeEventListener(
        Autodesk.Viewing.TOOLBAR_CREATED_EVENT,
        onToolbarCreated)
}