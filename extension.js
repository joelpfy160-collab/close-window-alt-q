import Gio from 'gi://Gio';

const SCHEMA = 'org.gnome.desktop.wm.keybindings';
const KEY = 'close';
const ALT_Q = '<Alt>q';

export default class CloseWindowExtension {
    enable() {
        this._settings = new Gio.Settings({ schema_id: SCHEMA });
        this._original = this._settings.get_strv(KEY);

        // If Alt+Q is not already present, prepend it so Alt+F4 (and others) continue to work
        if (!this._original.includes(ALT_Q)) {
            const updated = [ALT_Q, ...this._original];
            this._settings.set_strv(KEY, updated);
        }
    }

    disable() {
        if (!this._settings)
            return;

        // Restore the exact original value to avoid surprising the user
        this._settings.set_strv(KEY, this._original);
        this._settings = null;
        this._original = null;
    }
}
