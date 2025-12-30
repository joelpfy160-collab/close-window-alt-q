import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import Meta from 'gi://Meta';
import Shell from 'gi://Shell';

export default class CloseWindowExtension {
    enable() {
        this._grabId = global.display.grab_accelerator(
            '<Alt>q',
            Meta.KeyBindingFlags.NONE
        );

        if (this._grabId !== Meta.KeyBindingAction.NONE) {
            Main.wm.allowKeybinding(
                'close-current-window',
                Shell.ActionMode.ALL
            );

            this._signalId = global.display.connect(
                'accelerator-activated',
                (display, action, deviceId, timestamp) => {
                    if (action === this._grabId) {
                        this._closeWindow();
                    }
                }
            );
        }
    }

    disable() {
        if (this._signalId) {
            global.display.disconnect(this._signalId);
            this._signalId = null;
        }

        if (this._grabId !== Meta.KeyBindingAction.NONE) {
            global.display.ungrab_accelerator(this._grabId);
            this._grabId = null;
        }
    }

    _closeWindow() {
        let window = global.display.focus_window;
        
        if (window && window.can_close()) {
            window.delete(global.get_current_time());
        }
    }
}
