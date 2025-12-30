# Close Window Alt+Q

A GNOME Shell extension that adds the Alt+Q keyboard shortcut to close the currently focused window.

## Features

- Close windows quickly with Alt+Q
- Works with all window types that can be closed
- Lightweight and efficient
- No configuration needed

## Installation

### From Source

1. Copy the extension files to your local extensions directory:
   ```bash
   mkdir -p ~/.local/share/gnome-shell/extensions/close-window-alt-q@extensions.gnome.org
   cp -r * ~/.local/share/gnome-shell/extensions/close-window-alt-q@extensions.gnome.org/
   ```

2. Restart GNOME Shell:
   - On X11: Press Alt+F2, type `r`, and press Enter
   - On Wayland: Log out and log back in

3. Enable the extension:
   ```bash
   gnome-extensions enable close-window-alt-q@extensions.gnome.org
   ```

## Usage

Simply press Alt+Q while any window is focused to close it. This is a convenient alternative to Alt+F4.

## Publishing to GNOME Extensions

To publish this extension on extensions.gnome.org:

1. Create a zip file:
   ```bash
   zip -r close-window-alt-q.zip extension.js metadata.json stylesheet.css
   ```

2. Go to https://extensions.gnome.org/upload/

3. Log in or create an account

4. Upload the zip file

5. Fill in the required information and submit for review

### Before Publishing

Make sure to update `metadata.json`:
- Change the `url` field to your actual GitHub repository
- Update the `uuid` if needed (must be unique)
- Adjust `shell-version` to match the versions you've tested

## License

This extension is free software and comes without any warranty.

## Contributing

Feel free to submit issues and pull requests on GitHub.
