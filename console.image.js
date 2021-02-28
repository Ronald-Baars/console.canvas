/**
 * Dubiously created by Adrian Cooney
 * http://adriancooney.github.io
 *
 * Made useful by Ronald Baars
 * https://baars.design
 */
(function (console) {
  "use strict";

  console.canvas = function (ctx, scale = 1) {
    const url = ctx.canvas.toDataURL();
    var img = new Image();

    img.onload = function () {
      const { height, width } = this;
      console.log(
        `%c+`,
        `
          font-size: 1px; 
          padding: ${Math.floor(height / 2)}px ${Math.floor(width / 2)}px;
          line-height: ${height}px;
          background: url(${url});
          background-size: ${width * scale}px ${height * scale}px;
          color: transparent;`
      );
    };

    img.src = url;
  };
})(console);
