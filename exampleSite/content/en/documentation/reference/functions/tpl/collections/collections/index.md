




---
title: "collections"
linkTitle: "collections"
description: "Collections is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "





---















## collections.After {#collections_namespace_after}

\(index [any](/documentation/reference/typesgo/#any), seq [any](/documentation/reference/typesgo/#any)\) → [any](/documentation/reference/typesgo/#any)
{.funcsig}


After returns all the items after the first N in a rangeable list.

{{< docs/func-aliases "collections.After" >}}
{{< docs/func-examples "collections.After" >}}







## collections.Append {#collections_namespace_append}

\(args [...any](/documentation/reference/typesgo/#any)\) → [any](/documentation/reference/typesgo/#any)
{.funcsig}


Append appends the arguments up to the last one to the slice in the last argument.
This construct allows template constructs like this:
    {{ $pages = $pages | append $p2 $p1 }}
Note that with 2 arguments where both are slices of the same type,
the first slice will be appended to the second:
    {{ $pages = $pages | append .Site.RegularPages }}

{{< docs/func-aliases "collections.Append" >}}
{{< docs/func-examples "collections.Append" >}}







## collections.Apply {#collections_namespace_apply}

\(seq [any](/documentation/reference/typesgo/#any), fname [string](/documentation/reference/typesgo/#string), args [...any](/documentation/reference/typesgo/#any)\) → [any](/documentation/reference/typesgo/#any)
{.funcsig}


Apply takes a map, array, or slice and returns a new slice with the function `fname` applied over it.

{{< docs/func-aliases "collections.Apply" >}}
{{< docs/func-examples "collections.Apply" >}}







## collections.Complement {#collections_namespace_complement}

\(seqs [...any](/documentation/reference/typesgo/#any)\) → [any](/documentation/reference/typesgo/#any)
{.funcsig}


Complement gives the elements in the last element of `seqs` that are not in
any of the others.
All elements of `seqs` must be slices or arrays of comparable types.

The reasoning behind this rather clumsy API is so we can do this in the templates:
   {{ $c := .Pages | complement $last4 }}

{{< docs/func-aliases "collections.Complement" >}}
{{< docs/func-examples "collections.Complement" >}}







## collections.Delimit {#collections_namespace_delimit}

\(seq, delimiter [any](/documentation/reference/typesgo/#any), last [...any](/documentation/reference/typesgo/#any)\) → [template.HTML](/documentation/reference/typesgo/#templatehtml)
{.funcsig}


Delimit takes a given sequence and returns a delimited HTML string.
If `last` is passed to the function, it will be used as the final `delimiter`.

{{< docs/func-aliases "collections.Delimit" >}}
{{< docs/func-examples "collections.Delimit" >}}







## collections.Dictionary {#collections_namespace_dictionary}

\(values [...any](/documentation/reference/typesgo/#any)\) → [map[string]any](/documentation/reference/typesgo/#mapstringany)
{.funcsig}


Dictionary creates a map[string]interface{} from the given parameters by
walking the parameters and treating them as key-value pairs.  The number
of parameters must be even.
The keys can be string slices, which will create the needed nested structure.

{{< docs/func-aliases "collections.Dictionary" >}}
{{< docs/func-examples "collections.Dictionary" >}}







## collections.EchoParam {#collections_namespace_echoparam}

\(a, key [any](/documentation/reference/typesgo/#any)\) → [any](/documentation/reference/typesgo/#any)
{.funcsig}


EchoParam returns `a` given value if it is set; otherwise, it returns an
empty string.

{{< docs/func-aliases "collections.EchoParam" >}}
{{< docs/func-examples "collections.EchoParam" >}}







## collections.First {#collections_namespace_first}

\(limit [any](/documentation/reference/typesgo/#any), seq [any](/documentation/reference/typesgo/#any)\) → [any](/documentation/reference/typesgo/#any)
{.funcsig}


First returns the first N items in a rangeable list.

{{< docs/func-aliases "collections.First" >}}
{{< docs/func-examples "collections.First" >}}







## collections.Group {#collections_namespace_group}

\(key [any](/documentation/reference/typesgo/#any), items [any](/documentation/reference/typesgo/#any)\) → [any](/documentation/reference/typesgo/#any)
{.funcsig}


Group groups a set of elements by the given `key`.
This is currently only supported for Pages.

{{< docs/func-aliases "collections.Group" >}}
{{< docs/func-examples "collections.Group" >}}







## collections.In {#collections_namespace_in}

\(l [any](/documentation/reference/typesgo/#any), v [any](/documentation/reference/typesgo/#any)\) → [bool](/documentation/reference/typesgo/#bool)
{.funcsig}


In returns whether `v` is in the set `l`.  `l` may be an array or slice.

{{< docs/func-aliases "collections.In" >}}
{{< docs/func-examples "collections.In" >}}







## collections.Index {#collections_namespace_index}

\(item [any](/documentation/reference/typesgo/#any), args [...any](/documentation/reference/typesgo/#any)\) → [any](/documentation/reference/typesgo/#any)
{.funcsig}


Index returns the result of indexing its first argument by the following
arguments. Thus "index x 1 2 3" is, in Go syntax, x[1][2][3]. Each
indexed `item` must be a map, slice, or array.

Copied from Go stdlib src/text/template/funcs.go.

We deviate from the stdlib due to https://github.com/golang/go/issues/14751.

TODO(moorereason): merge upstream changes.

{{< docs/func-aliases "collections.Index" >}}
{{< docs/func-examples "collections.Index" >}}







## collections.Intersect {#collections_namespace_intersect}

\(l1, l2 [any](/documentation/reference/typesgo/#any)\) → [any](/documentation/reference/typesgo/#any)
{.funcsig}


Intersect returns the common elements in the given sets, `l1` and `l2`.  `l1` and
`l2` must be of the same type and may be either arrays or slices.

{{< docs/func-aliases "collections.Intersect" >}}
{{< docs/func-examples "collections.Intersect" >}}







## collections.IsSet {#collections_namespace_isset}

\(a [any](/documentation/reference/typesgo/#any), key [any](/documentation/reference/typesgo/#any)\) → [bool](/documentation/reference/typesgo/#bool)
{.funcsig}


IsSet returns whether `a` given array, channel, slice, or map has `a` `key`
defined.

{{< docs/func-aliases "collections.IsSet" >}}
{{< docs/func-examples "collections.IsSet" >}}







## collections.KeyVals {#collections_namespace_keyvals}

\(key [any](/documentation/reference/typesgo/#any), vals [...any](/documentation/reference/typesgo/#any)\) → [KeyValues](/documentation/reference/objects/common/types/keyvalues)
{.funcsig}


KeyVals creates a `key` and values wrapper.

{{< docs/func-aliases "collections.KeyVals" >}}
{{< docs/func-examples "collections.KeyVals" >}}







## collections.Last {#collections_namespace_last}

\(limit [any](/documentation/reference/typesgo/#any), seq [any](/documentation/reference/typesgo/#any)\) → [any](/documentation/reference/typesgo/#any)
{.funcsig}


Last returns the last N items in a rangeable list.

{{< docs/func-aliases "collections.Last" >}}
{{< docs/func-examples "collections.Last" >}}







## collections.Merge {#collections_namespace_merge}

\(params [...any](/documentation/reference/typesgo/#any)\) → [any](/documentation/reference/typesgo/#any)
{.funcsig}


Merge creates a copy of the final parameter and merges the preceding
parameters into it in reverse order.
Currently only maps are supported. Key handling is case insensitive.

{{< docs/func-aliases "collections.Merge" >}}
{{< docs/func-examples "collections.Merge" >}}







## collections.NewScratch {#collections_namespace_newscratch}

\(\) → [Scratch](/documentation/reference/objects/common/maps/scratch)
{.funcsig}


NewScratch creates a new Scratch which can be used to store values in a
thread safe way.

{{< docs/func-aliases "collections.NewScratch" >}}
{{< docs/func-examples "collections.NewScratch" >}}







## collections.Querify {#collections_namespace_querify}

\(params [...any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


Querify encodes the given parameters in URL-encoded form ("bar=baz&foo=quux") sorted by key.

{{< docs/func-aliases "collections.Querify" >}}
{{< docs/func-examples "collections.Querify" >}}







## collections.Reverse {#collections_namespace_reverse}

\(slice [any](/documentation/reference/typesgo/#any)\) → [any](/documentation/reference/typesgo/#any)
{.funcsig}


Reverse creates a copy of `slice` and reverses it.

{{< docs/func-aliases "collections.Reverse" >}}
{{< docs/func-examples "collections.Reverse" >}}







## collections.Seq {#collections_namespace_seq}

\(args [...any](/documentation/reference/typesgo/#any)\) → [[]int](/documentation/reference/typesgo/#int)
{.funcsig}


Seq creates a sequence of integers.  It's named and used as GNU's seq.

Examples:
    3 => 1, 2, 3
    1 2 4 => 1, 3
    -3 => -1, -2, -3
    1 4 => 1, 2, 3, 4
    1 -2 => 1, 0, -1, -2

{{< docs/func-aliases "collections.Seq" >}}
{{< docs/func-examples "collections.Seq" >}}







## collections.Shuffle {#collections_namespace_shuffle}

\(seq [any](/documentation/reference/typesgo/#any)\) → [any](/documentation/reference/typesgo/#any)
{.funcsig}


Shuffle returns the given rangeable list in a randomised order.

{{< docs/func-aliases "collections.Shuffle" >}}
{{< docs/func-examples "collections.Shuffle" >}}







## collections.Slice {#collections_namespace_slice}

\(args [...any](/documentation/reference/typesgo/#any)\) → [any](/documentation/reference/typesgo/#any)
{.funcsig}


Slice returns a slice of all passed arguments.

{{< docs/func-aliases "collections.Slice" >}}
{{< docs/func-examples "collections.Slice" >}}







## collections.Sort {#collections_namespace_sort}

\(seq [any](/documentation/reference/typesgo/#any), args [...any](/documentation/reference/typesgo/#any)\) → [any](/documentation/reference/typesgo/#any)
{.funcsig}


Sort returns a sorted sequence.

{{< docs/func-aliases "collections.Sort" >}}
{{< docs/func-examples "collections.Sort" >}}







## collections.SymDiff {#collections_namespace_symdiff}

\(s2, s1 [any](/documentation/reference/typesgo/#any)\) → [any](/documentation/reference/typesgo/#any)
{.funcsig}


SymDiff returns the symmetric difference of `s1` and `s2`.
Arguments must be either a slice or an array of comparable types.

{{< docs/func-aliases "collections.SymDiff" >}}
{{< docs/func-examples "collections.SymDiff" >}}







## collections.Union {#collections_namespace_union}

\(l1, l2 [any](/documentation/reference/typesgo/#any)\) → [any](/documentation/reference/typesgo/#any)
{.funcsig}


Union returns the union of the given sets, `l1` and `l2`. `l1` and
`l2` must be of the same type and may be either arrays or slices.
If `l1` and `l2` aren't of the same type then `l1` will be returned.
If either `l1` or `l2` is nil then the non-nil list will be returned.

{{< docs/func-aliases "collections.Union" >}}
{{< docs/func-examples "collections.Union" >}}







## collections.Uniq {#collections_namespace_uniq}

\(seq [any](/documentation/reference/typesgo/#any)\) → [any](/documentation/reference/typesgo/#any)
{.funcsig}


Uniq takes in a slice or array and returns a slice with subsequent
duplicate elements removed.

{{< docs/func-aliases "collections.Uniq" >}}
{{< docs/func-examples "collections.Uniq" >}}







## collections.Where {#collections_namespace_where}

\(seq, key [any](/documentation/reference/typesgo/#any), args [...any](/documentation/reference/typesgo/#any)\) → [any](/documentation/reference/typesgo/#any)
{.funcsig}


Where returns a filtered subset of a given data type.

{{< docs/func-aliases "collections.Where" >}}
{{< docs/func-examples "collections.Where" >}}





