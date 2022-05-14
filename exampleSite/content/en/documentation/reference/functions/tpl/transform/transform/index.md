




---
title: "transform"
linkTitle: "transform"
description: "Transform is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "





---















## transform.CanHighlight {#transform_namespace_canhighlight}

\(language [string](/documentation/reference/typesgo/#string)\) → [bool](/documentation/reference/typesgo/#bool)
{.funcsig}


CanHighlight returns whether the given code `language` is supported by the Chroma highlighter.

{{< docs/func-aliases "transform.CanHighlight" >}}
{{< docs/func-examples "transform.CanHighlight" >}}







## transform.Emojify {#transform_namespace_emojify}

\(s [any](/documentation/reference/typesgo/#any)\) → [template.HTML](/documentation/reference/typesgo/#templatehtml)
{.funcsig}


Emojify returns a copy of `s` with all emoji codes replaced with actual emojis.

See http://www.emoji-cheat-sheet.com/

{{< docs/func-aliases "transform.Emojify" >}}
{{< docs/func-examples "transform.Emojify" >}}







## transform.HTMLEscape {#transform_namespace_htmlescape}

\(s [any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


HTMLEscape returns a copy of `s` with reserved HTML characters escaped.

{{< docs/func-aliases "transform.HTMLEscape" >}}
{{< docs/func-examples "transform.HTMLEscape" >}}







## transform.HTMLUnescape {#transform_namespace_htmlunescape}

\(s [any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


HTMLUnescape returns a copy of `s` with HTML escape requences converted to plain
text.

{{< docs/func-aliases "transform.HTMLUnescape" >}}
{{< docs/func-examples "transform.HTMLUnescape" >}}







## transform.Highlight {#transform_namespace_highlight}

\(s [any](/documentation/reference/typesgo/#any), lang [string](/documentation/reference/typesgo/#string), opts [...any](/documentation/reference/typesgo/#any)\) → [template.HTML](/documentation/reference/typesgo/#templatehtml)
{.funcsig}


Highlight returns a copy of `s` as an HTML string with syntax
highlighting applied.

{{< docs/func-aliases "transform.Highlight" >}}
{{< docs/func-examples "transform.Highlight" >}}







## transform.HighlightCodeBlock {#transform_namespace_highlightcodeblock}

\(ctx [CodeblockContext](/documentation/reference/objects/markup/converter/hooks/codeblockcontext), opts [...any](/documentation/reference/typesgo/#any)\) → [HightlightResult](/documentation/reference/objects/markup/highlight/hightlightresult)
{.funcsig}


HighlightCodeBlock highlights a code block on the form received in the codeblock render hooks.

{{< docs/func-aliases "transform.HighlightCodeBlock" >}}
{{< docs/func-examples "transform.HighlightCodeBlock" >}}







## transform.Markdownify {#transform_namespace_markdownify}

\(s [any](/documentation/reference/typesgo/#any)\) → [template.HTML](/documentation/reference/typesgo/#templatehtml)
{.funcsig}


Markdownify renders `s` from Markdown to HTML.

{{< docs/func-aliases "transform.Markdownify" >}}
{{< docs/func-examples "transform.Markdownify" >}}







## transform.Plainify {#transform_namespace_plainify}

\(s [any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


Plainify returns a copy of `s` with all HTML tags removed.

{{< docs/func-aliases "transform.Plainify" >}}
{{< docs/func-examples "transform.Plainify" >}}







## transform.Remarshal {#transform_namespace_remarshal}

\(format [string](/documentation/reference/typesgo/#string), data [any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


Remarshal is used in the Hugo documentation to convert configuration
examples from YAML to JSON, TOML (and possibly the other way around).
The is primarily a helper for the Hugo docs site.
It is not a general purpose YAML to TOML converter etc., and may
change without notice if it serves a purpose in the docs.
Format is one of json, yaml or toml.

{{< docs/func-aliases "transform.Remarshal" >}}
{{< docs/func-examples "transform.Remarshal" >}}









## transform.Unmarshal {#transform_namespace_unmarshal}

\(args [...any](/documentation/reference/typesgo/#any)\) → [any](/documentation/reference/typesgo/#any)
{.funcsig}


Unmarshal unmarshals the data given, which can be either a string, json.RawMessage
or a Resource. Supported formats are JSON, TOML, YAML, and CSV.
You can optionally provide an options map as the first argument.

{{< docs/func-aliases "transform.Unmarshal" >}}
{{< docs/func-examples "transform.Unmarshal" >}}





