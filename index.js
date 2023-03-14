
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
// MMMMMMMMWN0xdoooooooodKMMMMMMMMWX0kddoollo0W0ollllllllllloox0XWMMMMMMMMMMMMMMMMWXKkddooookNNkoooooooo0MMMW0olllllllxXMMMMMM
// MMMMMMW0c'.          .xMMMMWKxc,..       .dWo               ..:dKWMMMMMMMMMMXkl;..       '0K,        cWMMWo        'OMMMMMM
// MMMMMNd.             .xMMNk:.            .xWo                   .c0WMMMMMW0l.            ,0K,        cWMMWo        '0MMMMMM
// MMMMWx.              .xMKc.              .xWo                     .lXMMMXl.              ,0K,        cWMMWo        'OMMMMMM
// MMMMNl         .;::::l00,         .;cloooxKWo         .,;'.         :KWO,         ,clddddkNK;        cWMMWo        'OMMMMMM
// MMMMX:       .oXWMMMMMK;        .lKWMMMMMMMMo         oWWN0o.        :d'        .xNMMMMMMMMK;        ;0000c        'OMMMMMM
// MMMMK;       .dOOOOOOk;         .lxdxddxxkXWo         dMMMMWO.                  'oddddodoxXK;         ....         .OMMMMMM
// MMMMK,                                   .kWo         dMMMMMWd.                          .OK,                      'OMMMMMM
// MMMM0'                                   .kMo         dMMMMMMk.                          .OK,                      .OMMMMMM
// MMMM0'                          .'''''''':OWo         dMMMMMNl                  .'''''''':0K;        .''''.        .OMMMMMM
// MMMMO.       .;c:::::c:.        ,ONNNNNNNWWWo         dMMMMXl.        .         ,0WWNNNNNNWK;        cNNNNo        .OMMMMMM
// MMMMO.       '0MMMMMMMWx.        .lkKXXNNNWWo         dMXxc.         c0l         ,oOKKXXXXWK;        cWMMWo        .OMMMMMM
// MMMMk.       '0MMMMMMMMWx.          ...'';OMo         dMx.         .oNMNd.          .....:KK;        cWMMWo        .OMMMMMM
// MMMMk.       '0MMMMMMMMMWKc.             .kMo         dMd.       .;OWMMMWO:.             ,0K;        cWMMWo        'OMMMMMM
// MMMMk.       '0MMMMMMMMMMMWKd;.          .kWo        .dMd.     'cOWMMMMMMMWKd:..         ,0K;        cWMMWd        '0MMMMMM
// MMMMO;.......cKMMMMMMMMMMMMMMWKOdlc;'....;OWx'.......,kMk'';cdOXMMMMMMMMMMMMMWXOxlc:,'...cKXc........dWMMWx'.......:KMMMMMM
// MMMMWNXXXXXXXNWMMMMMMMMMMMMMMMMMMMMWNNXXXNWMWXXXXXXXXXWMNXNWMMMMMMMMMMMMMMMMMMMMMMMWWNNXXNWWNXXXXXXXXWMMMMWXXXXXXXXNWMMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const port = process.env.PORT || 3001;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log(`%s listening at ${port}`); // eslint-disable-line no-console
  });
});
