




---
title: "urls"
linkTitle: "urls"
description: "Urls is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "





---















## urls.AbsLangURL {#urls_namespace_abslangurl}

\(s [any](/documentation/reference/typesgo/#any)\) → [template.HTML](/documentation/reference/typesgo/#templatehtml)
{.funcsig}


AbsLangURL the string `s` and converts it to an absolute URL according
to a page'`s` position in the project directory structure and the current
language.

{{< docs/func-aliases "urls.AbsLangURL" >}}
{{< docs/func-examples "urls.AbsLangURL" >}}







## urls.AbsURL {#urls_namespace_absurl}

\(s [any](/documentation/reference/typesgo/#any)\) → [template.HTML](/documentation/reference/typesgo/#templatehtml)
{.funcsig}


AbsURL takes the string `s` and converts it to an absolute URL.

{{< docs/func-aliases "urls.AbsURL" >}}
{{< docs/func-examples "urls.AbsURL" >}}







## urls.Anchorize {#urls_namespace_anchorize}

\(s [any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


Anchorize creates sanitized anchor name version of the string `s` that is compatible
with how your configured markdown renderer does it.

{{< docs/func-aliases "urls.Anchorize" >}}
{{< docs/func-examples "urls.Anchorize" >}}







## urls.Parse {#urls_namespace_parse}

\(rawurl [any](/documentation/reference/typesgo/#any)\) → [URL](/documentation/reference/objects/net/url/url)
{.funcsig}


Parse parses `rawurl` into a URL structure. The `rawurl` may be relative or
absolute.

{{< docs/func-aliases "urls.Parse" >}}
{{< docs/func-examples "urls.Parse" >}}







## urls.Ref {#urls_namespace_ref}

\(p [any](/documentation/reference/typesgo/#any), args [any](/documentation/reference/typesgo/#any)\) → [template.HTML](/documentation/reference/typesgo/#templatehtml)
{.funcsig}


Ref returns the absolute URL path to a given content item from Page `p`.

{{< docs/func-aliases "urls.Ref" >}}
{{< docs/func-examples "urls.Ref" >}}







## urls.RelLangURL {#urls_namespace_rellangurl}

\(s [any](/documentation/reference/typesgo/#any)\) → [template.HTML](/documentation/reference/typesgo/#templatehtml)
{.funcsig}


RelLangURL takes the string `s` and prepends the relative path according to a
page'`s` position in the project directory structure and the current language.

{{< docs/func-aliases "urls.RelLangURL" >}}
{{< docs/func-examples "urls.RelLangURL" >}}







## urls.RelRef {#urls_namespace_relref}

\(p [any](/documentation/reference/typesgo/#any), args [any](/documentation/reference/typesgo/#any)\) → [template.HTML](/documentation/reference/typesgo/#templatehtml)
{.funcsig}


RelRef returns the relative URL path to a given content item from Page `p`.

{{< docs/func-aliases "urls.RelRef" >}}
{{< docs/func-examples "urls.RelRef" >}}







## urls.RelURL {#urls_namespace_relurl}

\(s [any](/documentation/reference/typesgo/#any)\) → [template.HTML](/documentation/reference/typesgo/#templatehtml)
{.funcsig}


RelURL takes the string `s` and prepends the relative path according to a
page'`s` position in the project directory structure.

{{< docs/func-aliases "urls.RelURL" >}}
{{< docs/func-examples "urls.RelURL" >}}







## urls.URLize {#urls_namespace_urlize}

\(s [any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


URLize returns the the strings `s` formatted as an URL.

{{< docs/func-aliases "urls.URLize" >}}
{{< docs/func-examples "urls.URLize" >}}





