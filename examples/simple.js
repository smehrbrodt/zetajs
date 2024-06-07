/* -*- Mode: JS; tab-width: 4; indent-tabs-mode: nil; c-basic-offset: 4; fill-column: 100 -*- */

// Adapted sample code from <https://git.libreoffice.org/core> static/README.wasm.md:

Module.addOnPostRun(function() {
    setTimeout(function() {
        {
            const uno = init_unoembind_uno(Module);
            const css = uno.com.sun.star;
            const xModel = Module.jsuno.proxy(Module.getCurrentModelFromViewSh());
            const xText = xModel.getText();
            const xTextCursor = xText.createTextCursor();
            xTextCursor.setString("string here!");
        }
        {
            const uno = init_unoembind_uno(Module);
            const css = uno.com.sun.star;
            const xModel = Module.jsuno.proxy(Module.getCurrentModelFromViewSh());
            const xText = xModel.getText();
            const xParaEnumeration = xText.createEnumeration();
            while (xParaEnumeration.hasMoreElements()) {
                const next = xParaEnumeration.nextElement();
                const xParagraph = next.val;
                const color = Math.floor(Math.random() * 0xFFFFFF);
                xParagraph.setPropertyValue("CharColor", color);
            }
        }
    }, 10000);
});

/* vim:set shiftwidth=4 softtabstop=4 expandtab cinoptions=b1,g0,N-s cinkeys+=0=break: */
