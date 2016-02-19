var execa = require('execa')
module.exports = function iconThemeName() {
  return execa.shell('gsettings get org.gnome.desktop.interface icon-theme')
          .then(result => result.stdout.replace(/'/g, ''))
}
