(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{4181:function(module,exports){module.exports=function(hljs){var GCODE_CODE=[hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE,hljs.COMMENT(/\(/,/\)/),hljs.inherit(hljs.C_NUMBER_MODE,{begin:"([-+]?([0-9]*\\.?[0-9]+\\.?))|"+hljs.C_NUMBER_RE}),hljs.inherit(hljs.APOS_STRING_MODE,{illegal:null}),hljs.inherit(hljs.QUOTE_STRING_MODE,{illegal:null}),{className:"name",begin:"([G])([0-9]+\\.?[0-9]?)"},{className:"name",begin:"([M])([0-9]+\\.?[0-9]?)"},{className:"attr",begin:"(VC|VS|#)",end:"(\\d+)"},{className:"attr",begin:"(VZOFX|VZOFY|VZOFZ)"},{className:"built_in",begin:"(ATAN|ABS|ACOS|ASIN|SIN|COS|EXP|FIX|FUP|ROUND|LN|TAN)(\\[)",end:"([-+]?([0-9]*\\.?[0-9]+\\.?))(\\])"},{className:"symbol",variants:[{begin:"N",end:"\\d+",illegal:"\\W"}]}];return{aliases:["nc"],case_insensitive:!0,lexemes:"[A-Z_][A-Z0-9_.]*",keywords:"IF DO WHILE ENDWHILE CALL ENDIF SUB ENDSUB GOTO REPEAT ENDREPEAT EQ LT GT NE GE LE OR XOR",contains:[{className:"meta",begin:"\\%"},{className:"meta",begin:"([O])([0-9]+)"}].concat(GCODE_CODE)}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_gcode.64b6037e5591ff3be262.bundle.js.map