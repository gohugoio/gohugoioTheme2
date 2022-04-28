




---
title: "data"
linkTitle: "data"
description: "Data is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
hugoSymbol: TODO




---















## data.GetCSV {#data_namespace_getcsv}

\([string](/documentation/reference/gotypes/#string),[...any](/documentation/reference/objects//...any)\) → [[][]string](/documentation/reference/objects//[][]string)
{.funcsig}
GetCSV expects a data separator and one or n-parts of a URL to a resource which
can either be a local or a remote one.
The data separator can be a comma, semi-colon, pipe, etc, but only one character.
If you provide multiple parts for the URL they will be joined together to the final URL.
GetCSV returns nil or a slice slice to use in a short code.


{{< docs/func-aliases "data.GetCSV" >}}
{{< docs/func-examples "data.GetCSV" >}}







## data.GetJSON {#data_namespace_getjson}

\([...any](/documentation/reference/objects//...any)\) → [any](/documentation/reference/gotypes/#any)
{.funcsig}
GetJSON expects one or n-parts of a URL to a resource which can either be a local or a remote one.
If you provide multiple parts they will be joined together to the final URL.
GetJSON returns nil or parsed JSON to use in a short code.


{{< docs/func-aliases "data.GetJSON" >}}
{{< docs/func-examples "data.GetJSON" >}}





