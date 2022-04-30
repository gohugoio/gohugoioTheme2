




---
title: "strings"
linkTitle: "strings"
description: "Strings is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "





---















## strings.Chomp {#strings_namespace_chomp}

\(s [any](/documentation/reference/typesgo/#any)\) → [any](/documentation/reference/typesgo/#any)
{.funcsig}


Chomp returns a copy of `s` with all trailing newline characters removed.

{{< docs/func-aliases "strings.Chomp" >}}
{{< docs/func-examples "strings.Chomp" >}}







## strings.Contains {#strings_namespace_contains}

\(s, substr [any](/documentation/reference/typesgo/#any)\) → [bool](/documentation/reference/typesgo/#bool)
{.funcsig}


Contains reports whether `substr` is in `s`.

{{< docs/func-aliases "strings.Contains" >}}
{{< docs/func-examples "strings.Contains" >}}







## strings.ContainsAny {#strings_namespace_containsany}

\(s, chars [any](/documentation/reference/typesgo/#any)\) → [bool](/documentation/reference/typesgo/#bool)
{.funcsig}


ContainsAny reports whether any Unicode code points in `chars` are within `s`.

{{< docs/func-aliases "strings.ContainsAny" >}}
{{< docs/func-examples "strings.ContainsAny" >}}







## strings.Count {#strings_namespace_count}

\(substr, s [any](/documentation/reference/typesgo/#any)\) → [int](/documentation/reference/typesgo/#int)
{.funcsig}


Count counts the number of non-overlapping instances of `substr` in `s`.
If `substr` is an empty string, Count returns 1 + the number of Unicode code points in `s`.

{{< docs/func-aliases "strings.Count" >}}
{{< docs/func-examples "strings.Count" >}}







## strings.CountRunes {#strings_namespace_countrunes}

\(s [any](/documentation/reference/typesgo/#any)\) → [int](/documentation/reference/typesgo/#int)
{.funcsig}


CountRunes returns the number of runes in `s`, excluding whitespace.

{{< docs/func-aliases "strings.CountRunes" >}}
{{< docs/func-examples "strings.CountRunes" >}}







## strings.CountWords {#strings_namespace_countwords}

\(s [any](/documentation/reference/typesgo/#any)\) → [int](/documentation/reference/typesgo/#int)
{.funcsig}


CountWords returns the approximate word count in `s`.

{{< docs/func-aliases "strings.CountWords" >}}
{{< docs/func-examples "strings.CountWords" >}}







## strings.FindRE {#strings_namespace_findre}

\(expr [string](/documentation/reference/typesgo/#string), content [any](/documentation/reference/typesgo/#any), limit [...any](/documentation/reference/typesgo/#any)\) → [[]string](/documentation/reference/typesgo/#string)
{.funcsig}


FindRE returns a list of strings that match the regular expression. By default all matches
will be included. The number of matches can be limited with an optional third parameter.

{{< docs/func-aliases "strings.FindRE" >}}
{{< docs/func-examples "strings.FindRE" >}}







## strings.FirstUpper {#strings_namespace_firstupper}

\(s [any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


FirstUpper converts `s` making  the first character upper case.

{{< docs/func-aliases "strings.FirstUpper" >}}
{{< docs/func-examples "strings.FirstUpper" >}}







## strings.HasPrefix {#strings_namespace_hasprefix}

\(s, prefix [any](/documentation/reference/typesgo/#any)\) → [bool](/documentation/reference/typesgo/#bool)
{.funcsig}


HasPrefix tests whether the input `s` begins with `prefix`.

{{< docs/func-aliases "strings.HasPrefix" >}}
{{< docs/func-examples "strings.HasPrefix" >}}







## strings.HasSuffix {#strings_namespace_hassuffix}

\(s, suffix [any](/documentation/reference/typesgo/#any)\) → [bool](/documentation/reference/typesgo/#bool)
{.funcsig}


HasSuffix tests whether the input `s` begins with `suffix`.

{{< docs/func-aliases "strings.HasSuffix" >}}
{{< docs/func-examples "strings.HasSuffix" >}}







## strings.Repeat {#strings_namespace_repeat}

\(n, s [any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


Repeat returns a new string consisting of `n` copies of the string `s`.

{{< docs/func-aliases "strings.Repeat" >}}
{{< docs/func-examples "strings.Repeat" >}}







## strings.Replace {#strings_namespace_replace}

\(s, old, new [any](/documentation/reference/typesgo/#any), limit [...any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


Replace returns a copy of the string `s` with all occurrences of `old` replaced
with `new`.  The number of replacements can be limited with an optional fourth
parameter.

{{< docs/func-aliases "strings.Replace" >}}
{{< docs/func-examples "strings.Replace" >}}







## strings.ReplaceRE {#strings_namespace_replacere}

\(pattern, repl, s [any](/documentation/reference/typesgo/#any), n [...any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


ReplaceRE returns a copy of `s`, replacing all matches of the regular
expression `pattern` with the replacement text `repl`. The number of replacements
can be limited with an optional fourth parameter.

{{< docs/func-aliases "strings.ReplaceRE" >}}
{{< docs/func-examples "strings.ReplaceRE" >}}







## strings.RuneCount {#strings_namespace_runecount}

\(s [any](/documentation/reference/typesgo/#any)\) → [int](/documentation/reference/typesgo/#int)
{.funcsig}


RuneCount returns the number of runes in `s`.

{{< docs/func-aliases "strings.RuneCount" >}}
{{< docs/func-examples "strings.RuneCount" >}}







## strings.SliceString {#strings_namespace_slicestring}

\(a [any](/documentation/reference/typesgo/#any), startEnd [...any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


SliceString slices `a` string by specifying `a` half-open range with
two indices, start and end. 1 and 4 creates `a` slice including elements 1 through 3.
The end index can be omitted, it defaults to the string's length.

{{< docs/func-aliases "strings.SliceString" >}}
{{< docs/func-examples "strings.SliceString" >}}







## strings.Split {#strings_namespace_split}

\(a [any](/documentation/reference/typesgo/#any), delimiter [string](/documentation/reference/typesgo/#string)\) → [[]string](/documentation/reference/typesgo/#string)
{.funcsig}


Split slices an input string into all substrings separated by `delimiter`.

{{< docs/func-aliases "strings.Split" >}}
{{< docs/func-examples "strings.Split" >}}







## strings.Substr {#strings_namespace_substr}

\(a [any](/documentation/reference/typesgo/#any), nums [...any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


Substr extracts parts of `a` string, beginning at the character at the specified
position, and returns the specified number of characters.

It normally takes two parameters: start and length.
It can also take one parameter: start, i.e. length is omitted, in which case
the substring starting from start until the end of the string will be returned.

To extract characters from the end of the string, use `a` negative start number.

In addition, borrowing from the extended behavior described at http://php.net/substr,
if length is given and is negative, then that many characters will be omitted from
the end of string.

{{< docs/func-aliases "strings.Substr" >}}
{{< docs/func-examples "strings.Substr" >}}







## strings.Title {#strings_namespace_title}

\(s [any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


Title returns a copy of the input `s` with all Unicode letters that begin words
mapped to their title case.

{{< docs/func-aliases "strings.Title" >}}
{{< docs/func-examples "strings.Title" >}}







## strings.ToLower {#strings_namespace_tolower}

\(s [any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


ToLower returns a copy of the input `s` with all Unicode letters mapped to their
lower case.

{{< docs/func-aliases "strings.ToLower" >}}
{{< docs/func-examples "strings.ToLower" >}}







## strings.ToUpper {#strings_namespace_toupper}

\(s [any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


ToUpper returns a copy of the input `s` with all Unicode letters mapped to their
upper case.

{{< docs/func-aliases "strings.ToUpper" >}}
{{< docs/func-examples "strings.ToUpper" >}}







## strings.Trim {#strings_namespace_trim}

\(s, cutset [any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


Trim returns converts the strings `s` removing all leading and trailing characters defined
contained.

{{< docs/func-aliases "strings.Trim" >}}
{{< docs/func-examples "strings.Trim" >}}







## strings.TrimLeft {#strings_namespace_trimleft}

\(cutset, s [any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


TrimLeft returns a slice of the string `s` with all leading characters
contained in `cutset` removed.

{{< docs/func-aliases "strings.TrimLeft" >}}
{{< docs/func-examples "strings.TrimLeft" >}}







## strings.TrimPrefix {#strings_namespace_trimprefix}

\(prefix, s [any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


TrimPrefix returns `s` without the provided leading `prefix` string. If `s` doesn't
start with `prefix`, `s` is returned unchanged.

{{< docs/func-aliases "strings.TrimPrefix" >}}
{{< docs/func-examples "strings.TrimPrefix" >}}







## strings.TrimRight {#strings_namespace_trimright}

\(cutset, s [any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


TrimRight returns a slice of the string `s` with all trailing characters
contained in `cutset` removed.

{{< docs/func-aliases "strings.TrimRight" >}}
{{< docs/func-examples "strings.TrimRight" >}}







## strings.TrimSuffix {#strings_namespace_trimsuffix}

\(suffix, s [any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


TrimSuffix returns `s` without the provided trailing `suffix` string. If `s`
doesn't end with `suffix`, `s` is returned unchanged.

{{< docs/func-aliases "strings.TrimSuffix" >}}
{{< docs/func-examples "strings.TrimSuffix" >}}







## strings.Truncate {#strings_namespace_truncate}

\(a [any](/documentation/reference/typesgo/#any), options [...any](/documentation/reference/typesgo/#any)\) → [template.HTML](/documentation/reference/typesgo/#templatehtml)
{.funcsig}


Truncate truncates `a` given string to the specified length.

{{< docs/func-aliases "strings.Truncate" >}}
{{< docs/func-examples "strings.Truncate" >}}





