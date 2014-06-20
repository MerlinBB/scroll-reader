#Protocol Viewer

Searches though a document of text and dyanmically creates a smooth scroll menu for it.

##Usage

    $("#my-document").protocol();

##Options

**menu**
Optional string with a selector for a container that will become populated with the menu. Default is "#menu".

**speed**
Optional integer to control scroll speed, default is 600.

**tags**
Optional commar seperated string with a list of selectors for elements in the document that will become menu items. Default is "h1, h2, h3, h4, h5, h6".

**primaryTags**
Optional array of selectors that are used to define which elements are to be marked as primary, all others are marked as tertiary. Default is ["h1", "h2"].

**offset**
Optional integer stating the amount of pixels to stop scrolling before the heading. Default is 0.

##Example

    $("#protocol").protocol({
        menu: "#my-menu",
        speed: 400,
        tags: ".chapter, h1, h2, h3, h4, h5, h6, strong",
        primaryTags: ["h1", ".chapter"],
        offset: 20
    });

