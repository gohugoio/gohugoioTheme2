




---
title: "fmt"
linkTitle: "fmt"
description: "Fmt is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "





---















## fmt.Errorf {#fmt_namespace_errorf}

\(format [string](/documentation/reference/typesgo/#string), args [...any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


Errorf formats `args` according to a `format` specifier and logs an ERROR.
It returns an empty string.

{{< docs/func-aliases "fmt.Errorf" >}}
{{< docs/func-examples "fmt.Errorf" >}}







## fmt.Erroridf {#fmt_namespace_erroridf}

\(id, format [string](/documentation/reference/typesgo/#string), args [...any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


Erroridf formats `args` according to a `format` specifier and logs an ERROR and
an information text that the error with the given ID can be suppressed in config.
It returns an empty string.

{{< docs/func-aliases "fmt.Erroridf" >}}
{{< docs/func-examples "fmt.Erroridf" >}}







## fmt.Print {#fmt_namespace_print}

\(args [...any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


Print returns a string representation `args`.

{{< docs/func-aliases "fmt.Print" >}}
{{< docs/func-examples "fmt.Print" >}}







## fmt.Printf {#fmt_namespace_printf}

\(format [string](/documentation/reference/typesgo/#string), args [...any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


Printf returns a formatted string representation of `args`.

{{< docs/func-aliases "fmt.Printf" >}}
{{< docs/func-examples "fmt.Printf" >}}







## fmt.Println {#fmt_namespace_println}

\(args [...any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


Println returns string representation of `args`  ending with a newline.

{{< docs/func-aliases "fmt.Println" >}}
{{< docs/func-examples "fmt.Println" >}}







## fmt.Warnf {#fmt_namespace_warnf}

\(format [string](/documentation/reference/typesgo/#string), args [...any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


Warnf formats `args` according to a `format` specifier and logs a WARNING.
It returns an empty string.

{{< docs/func-aliases "fmt.Warnf" >}}
{{< docs/func-examples "fmt.Warnf" >}}





