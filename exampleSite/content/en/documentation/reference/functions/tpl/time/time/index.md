




---
title: "time"
linkTitle: "time"
description: "Time is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "





---















## time.AsTime {#time_namespace_astime}

\(v [any](/documentation/reference/typesgo/#any), args [...any](/documentation/reference/typesgo/#any)\) → [any](/documentation/reference/typesgo/#any)
{.funcsig}


AsTime converts the textual representation of the datetime string into
a time.Time interface.

{{< docs/func-aliases "time.AsTime" >}}
{{< docs/func-examples "time.AsTime" >}}







## time.Duration {#time_namespace_duration}

\(unit [any](/documentation/reference/typesgo/#any), number [any](/documentation/reference/typesgo/#any)\) → [time.Duration](/documentation/reference/typesgo/#timeduration)
{.funcsig}


Duration converts the given `number` to a time.Duration.
Unit is one of nanosecond/ns, microsecond/us/µs, millisecond/ms, second/s, minute/m or hour/h.

{{< docs/func-aliases "time.Duration" >}}
{{< docs/func-examples "time.Duration" >}}







## time.Format {#time_namespace_format}

\(layout [string](/documentation/reference/typesgo/#string), v [any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


Format converts the textual representation of the datetime string in `v` into
time.Time if needed and formats it with the given `layout`.

{{< docs/func-aliases "time.Format" >}}
{{< docs/func-examples "time.Format" >}}







## time.Now {#time_namespace_now}

\(\) → [time.Time](/documentation/reference/typesgo/#timetime)
{.funcsig}


Now returns the current local time or `clock` time

{{< docs/func-aliases "time.Now" >}}
{{< docs/func-examples "time.Now" >}}







## time.ParseDuration {#time_namespace_parseduration}

\(s [any](/documentation/reference/typesgo/#any)\) → [time.Duration](/documentation/reference/typesgo/#timeduration)
{.funcsig}


ParseDuration parses the duration string `s`.
A duration string is a possibly signed sequence of
decimal numbers, each with optional fraction and a unit suffix,
such as "300ms", "-1.5h" or "2h45m".
Valid time units are "ns", "us" (or "µ`s`"), "ms", "`s`", "m", "h".
See https://golang.org/pkg/time/#ParseDuration

{{< docs/func-aliases "time.ParseDuration" >}}
{{< docs/func-examples "time.ParseDuration" >}}





