




---
title: "debug"
linkTitle: "debug"
description: "Debug is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "





---















## debug.Dump {#debug_namespace_dump}

\(val [any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


Dump returns a object dump of `val` as a string.
Note that not every value passed to Dump will print so nicely, but
we'll improve on that. We recommend using the "go" Chroma lexer to format the output
nicely.
Also note that the output from Dump may change from Hugo version to the next,
so don't depend on a specific output.

{{< docs/func-aliases "debug.Dump" >}}
{{< docs/func-examples "debug.Dump" >}}





