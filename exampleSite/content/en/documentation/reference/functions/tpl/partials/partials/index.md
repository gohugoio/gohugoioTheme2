




---
title: "partials"
linkTitle: "partials"
description: "Partials is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
hugoSymbol: TODO




---















## partials.Include {#partials_namespace_include}

\([string](/documentation/reference/gotypes/#string)[](/documentation/reference/objects//)\) → [any](/documentation/reference/gotypes/#any)
{.funcsig}
Include executes the named partial.
If the partial contains a return statement, that value will be returned.
Else, the rendered output will be returned:
A string if the partial is a text/template, or template.HTML when html/template.
Note that ctx is provided by Hugo, not the end user.


{{< docs/func-aliases "partials.Include" >}}
{{< docs/func-examples "partials.Include" >}}







## partials.IncludeCached {#partials_namespace_includecached}

\([string](/documentation/reference/gotypes/#string)[any](/documentation/reference/gotypes/#any)[](/documentation/reference/objects//)\) → [any](/documentation/reference/gotypes/#any)
{.funcsig}
IncludeCached executes and caches partial templates.  The cache is created with name+variants as the key.
Note that ctx is provided by Hugo, not the end user.


{{< docs/func-aliases "partials.IncludeCached" >}}
{{< docs/func-examples "partials.IncludeCached" >}}





