




---
title: "inflect"
linkTitle: "inflect"
description: "Inflect is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
hugoSymbol: TODO




---















## inflect.Humanize {#inflect_namespace_humanize}

\(in [any](/documentation/reference/gotypes/#any)\) → [string](/documentation/reference/gotypes/#string)
{.funcsig}


Humanize returns the humanized form of a single parameter.

If the parameter is either an integer or a string containing an integer
value, the behavior is to add the appropriate ordinal.

    Example:  "my-first-post" -> "My first post"
    Example:  "103" -> "103rd"
    Example:  52 -> "52nd"

{{< docs/func-aliases "inflect.Humanize" >}}
{{< docs/func-examples "inflect.Humanize" >}}







## inflect.Pluralize {#inflect_namespace_pluralize}

\(in [any](/documentation/reference/gotypes/#any)\) → [string](/documentation/reference/gotypes/#string)
{.funcsig}


Pluralize returns the plural form of a single word.

{{< docs/func-aliases "inflect.Pluralize" >}}
{{< docs/func-examples "inflect.Pluralize" >}}







## inflect.Singularize {#inflect_namespace_singularize}

\(in [any](/documentation/reference/gotypes/#any)\) → [string](/documentation/reference/gotypes/#string)
{.funcsig}


Singularize returns the singular form of a single word.

{{< docs/func-aliases "inflect.Singularize" >}}
{{< docs/func-examples "inflect.Singularize" >}}





