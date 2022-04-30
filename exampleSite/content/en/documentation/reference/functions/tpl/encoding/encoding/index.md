




---
title: "encoding"
linkTitle: "encoding"
description: "Encoding is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "





---















## encoding.Base64Decode {#encoding_namespace_base64decode}

\(content [any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


Base64Decode returns the base64 decoding of the given `content`.

{{< docs/func-aliases "encoding.Base64Decode" >}}
{{< docs/func-examples "encoding.Base64Decode" >}}







## encoding.Base64Encode {#encoding_namespace_base64encode}

\(content [any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


Base64Encode returns the base64 encoding of the given `content`.

{{< docs/func-aliases "encoding.Base64Encode" >}}
{{< docs/func-examples "encoding.Base64Encode" >}}







## encoding.Jsonify {#encoding_namespace_jsonify}

\(args [...any](/documentation/reference/typesgo/#any)\) → [template.HTML](/documentation/reference/typesgo/#templatehtml)
{.funcsig}


Jsonify encodes a given object to JSON.  To pretty print the JSON, pass a map
or dictionary of options as the first argument.  Supported options are
"prefix" and "indent".  Each JSON element in the output will begin on a new
line beginning with prefix followed by one or more copies of indent according
to the indentation nesting.

{{< docs/func-aliases "encoding.Jsonify" >}}
{{< docs/func-examples "encoding.Jsonify" >}}





