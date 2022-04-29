




---
title: "urls"
linkTitle: "urls"
description: "Urls is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
hugoSymbol: TODO




---















## urls.AbsLangURL {#urls_namespace_abslangurl}

\(a [any](/documentation/reference/gotypes/#any)\) → [template.HTML](/documentation/reference/gotypes/#templatehtml)
{.funcsig}


AbsLangURL takes `a` given string and converts it to an absolute URL according
to `a` page's position in the project directory structure and the current
language.

{{< docs/func-aliases "urls.AbsLangURL" >}}
{{< docs/func-examples "urls.AbsLangURL" >}}







## urls.AbsURL {#urls_namespace_absurl}

\(a [any](/documentation/reference/gotypes/#any)\) → [template.HTML](/documentation/reference/gotypes/#templatehtml)
{.funcsig}


AbsURL takes `a` given string and converts it to an absolute URL.

{{< docs/func-aliases "urls.AbsURL" >}}
{{< docs/func-examples "urls.AbsURL" >}}







## urls.Anchorize {#urls_namespace_anchorize}

\(a [any](/documentation/reference/gotypes/#any)\) → [string](/documentation/reference/gotypes/#string)
{.funcsig}


Anchorize creates sanitized anchor names that are compatible with Blackfriday.

{{< docs/func-aliases "urls.Anchorize" >}}
{{< docs/func-examples "urls.Anchorize" >}}







## urls.Parse {#urls_namespace_parse}

\(rawurl [any](/documentation/reference/gotypes/#any)\) → [url.URL](/documentation/reference/objects//url.url)
{.funcsig}


Parse parses `rawurl` into a URL structure. The `rawurl` may be relative or
absolute.

{{< docs/func-aliases "urls.Parse" >}}
{{< docs/func-examples "urls.Parse" >}}







## urls.Ref {#urls_namespace_ref}

\(in [any](/documentation/reference/gotypes/#any), args [any](/documentation/reference/gotypes/#any)\) → [template.HTML](/documentation/reference/gotypes/#templatehtml)
{.funcsig}


Ref returns the absolute URL path to a given content item.

{{< docs/func-aliases "urls.Ref" >}}
{{< docs/func-examples "urls.Ref" >}}







## urls.RelLangURL {#urls_namespace_rellangurl}

\(a [any](/documentation/reference/gotypes/#any)\) → [template.HTML](/documentation/reference/gotypes/#templatehtml)
{.funcsig}


RelLangURL takes `a` given string and prepends the relative path according to `a`
page's position in the project directory structure and the current language.

{{< docs/func-aliases "urls.RelLangURL" >}}
{{< docs/func-examples "urls.RelLangURL" >}}







## urls.RelRef {#urls_namespace_relref}

\(in [any](/documentation/reference/gotypes/#any), args [any](/documentation/reference/gotypes/#any)\) → [template.HTML](/documentation/reference/gotypes/#templatehtml)
{.funcsig}


RelRef returns the relative URL path to a given content item.

{{< docs/func-aliases "urls.RelRef" >}}
{{< docs/func-examples "urls.RelRef" >}}







## urls.RelURL {#urls_namespace_relurl}

\(a [any](/documentation/reference/gotypes/#any)\) → [template.HTML](/documentation/reference/gotypes/#templatehtml)
{.funcsig}


RelURL takes `a` given string and prepends the relative path according to `a`
page's position in the project directory structure.

{{< docs/func-aliases "urls.RelURL" >}}
{{< docs/func-examples "urls.RelURL" >}}







## urls.URLize {#urls_namespace_urlize}

\(a [any](/documentation/reference/gotypes/#any)\) → [string](/documentation/reference/gotypes/#string)
{.funcsig}


URLize returns the given argument formatted as URL.

{{< docs/func-aliases "urls.URLize" >}}
{{< docs/func-examples "urls.URLize" >}}





