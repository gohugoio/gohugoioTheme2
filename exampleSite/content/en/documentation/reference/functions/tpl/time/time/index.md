




---
title: "time"
linkTitle: "time"
description: "Time is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
hugoSymbol: TODO




---















## time.AsTime {#time_namespace_astime}

\(v [any](/documentation/reference/gotypes/#any), args [...any](/documentation/reference/gotypes/#any)\) → [any](/documentation/reference/gotypes/#any)
{.funcsig}


AsTime converts the textual representation of the datetime string into
a time.Time interface.

{{< docs/func-aliases "time.AsTime" >}}
{{< docs/func-examples "time.AsTime" >}}







## time.Duration {#time_namespace_duration}

\(unit [any](/documentation/reference/gotypes/#any), number [any](/documentation/reference/gotypes/#any)\) → [Duration](/documentation/reference/objects/time/duration)
{.funcsig}


Duration converts the given `number` to a time.Duration.
Unit is one of nanosecond/ns, microsecond/us/µs, millisecond/ms, second/s, minute/m or hour/h.

{{< docs/func-aliases "time.Duration" >}}
{{< docs/func-examples "time.Duration" >}}







## time.Format {#time_namespace_format}

\(layout [string](/documentation/reference/gotypes/#string), v [any](/documentation/reference/gotypes/#any)\) → [string](/documentation/reference/gotypes/#string)
{.funcsig}


Format converts the textual representation of the datetime string into
the other form or returns it of the time.Time value. These are formatted
with the `layout` string

{{< docs/func-aliases "time.Format" >}}
{{< docs/func-examples "time.Format" >}}







## time.Now {#time_namespace_now}

\(\) → [time.Time](/documentation/reference/gotypes/#timetime)
{.funcsig}


Now returns the current local time.

{{< docs/func-aliases "time.Now" >}}
{{< docs/func-examples "time.Now" >}}







## time.ParseDuration {#time_namespace_parseduration}

\(in [any](/documentation/reference/gotypes/#any)\) → [Duration](/documentation/reference/objects/time/duration)
{.funcsig}


ParseDuration parses a duration string.
A duration string is a possibly signed sequence of
decimal numbers, each with optional fraction and a unit suffix,
such as "300ms", "-1.5h" or "2h45m".
Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h".
See https://golang.org/pkg/time/#ParseDuration

{{< docs/func-aliases "time.ParseDuration" >}}
{{< docs/func-examples "time.ParseDuration" >}}





