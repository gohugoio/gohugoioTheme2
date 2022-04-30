




---
title: "lang"
linkTitle: "lang"
description: "Lang is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "





---















## lang.FormatAccounting {#lang_namespace_formataccounting}

\(precision, currency, number [any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


FormatAccounting returns the `currency` representation of `number` for the given `currency` and `precision`
for the current language in accounting notation.

The return value is formatted with at least two decimal places.

{{< docs/func-aliases "lang.FormatAccounting" >}}
{{< docs/func-examples "lang.FormatAccounting" >}}







## lang.FormatCurrency {#lang_namespace_formatcurrency}

\(precision, currency, number [any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


FormatCurrency returns the `currency` representation of `number` for the given `currency` and `precision`
for the current language.

The return value is formatted with at least two decimal places.

{{< docs/func-aliases "lang.FormatCurrency" >}}
{{< docs/func-examples "lang.FormatCurrency" >}}







## lang.FormatNumber {#lang_namespace_formatnumber}

\(precision, number [any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


FormatNumber formats `number` with the given `precision` for the current language.

{{< docs/func-aliases "lang.FormatNumber" >}}
{{< docs/func-examples "lang.FormatNumber" >}}







## lang.FormatNumberCustom {#lang_namespace_formatnumbercustom}

\(precision, number [any](/documentation/reference/typesgo/#any), options [...any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


FormatNumberCustom formats a `number` with the given `precision` using the
negative, decimal, and grouping `options`.  The ``options``
parameter is a string consisting of `<negative> <decimal> <grouping>`.  The
default ``options`` value is `- . ,`.

Note that numbers are rounded up at 5 or greater.
So, with `precision` set to 0, 1.5 becomes `2`, and 1.4 becomes `1`.

For a simpler function that adapts to the current language, see FormatNumber.

{{< docs/func-aliases "lang.FormatNumberCustom" >}}
{{< docs/func-examples "lang.FormatNumberCustom" >}}







## lang.FormatPercent {#lang_namespace_formatpercent}

\(precision, number [any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


FormatPercent formats `number` with the given `precision` for the current language.
Note that the `number` is assumed to be a percentage.

{{< docs/func-aliases "lang.FormatPercent" >}}
{{< docs/func-examples "lang.FormatPercent" >}}







## lang.Merge {#lang_namespace_merge}

\(p2, p1 [any](/documentation/reference/typesgo/#any)\) → [any](/documentation/reference/typesgo/#any)
{.funcsig}


Merge creates a union of pages from two languages.

{{< docs/func-aliases "lang.Merge" >}}
{{< docs/func-examples "lang.Merge" >}}









## lang.Translate {#lang_namespace_translate}

\(id [any](/documentation/reference/typesgo/#any), args [...any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


Translate returns a translated string for `id`.

{{< docs/func-aliases "lang.Translate" >}}
{{< docs/func-examples "lang.Translate" >}}





