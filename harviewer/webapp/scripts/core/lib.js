/* See license.txt for terms of usage */

/**
 * @module core/lib
 */
define([
    "./array",
    "./css",
    "./date",
    "./dom",
    "./events",
    "./json",
    "./mime",
    "./object",
    "./rect",
    "./sniff",
    "./string",
    "./url",
    "./trace"
],

function(Arr, Css, Date_, Dom, Events, Json, Mime, Obj, Rect, Sniff, Str, Url, Trace) {

//***********************************************************************************************//

/**
 * @alias module:core/lib
 */
var Lib = {};

//***********************************************************************************************//
// Browser Version

Obj.append(Lib, Sniff);

//***********************************************************************************************//
// Core concepts (extension, bind)

Obj.append(Lib, Obj);

//***********************************************************************************************//
// Events

Obj.append(Lib, Events);

//***********************************************************************************************//
// Rect {top, left, height, width}

Obj.append(Lib, Rect);

//*************************************************************************************************
// Arrays

Obj.append(Lib, Arr);

//*************************************************************************************************
// Text Formatting

Obj.append(Lib, Str);

//*************************************************************************************************
// Date

Obj.append(Lib, Date_);

//*************************************************************************************************
// MIME

Obj.append(Lib, Mime);

//*************************************************************************************************
// URL

Obj.append(Lib, Url);

//*************************************************************************************************
// DOM

Obj.append(Lib, Dom);

//***********************************************************************************************//
// CSS

Obj.append(Lib, Css);

//***********************************************************************************************//
// JSON

Obj.append(Lib, Json);

// ********************************************************************************************* //

return Lib;

// ********************************************************************************************* //
});
