




---
title: "compare"
linkTitle: "compare"
description: "Compare is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "





---















## compare.Conditional {#compare_namespace_conditional}

\(condition [bool](/documentation/reference/typesgo/#bool), a, b [any](/documentation/reference/typesgo/#any)\) → [any](/documentation/reference/typesgo/#any)
{.funcsig}


Conditional can be used as `a` ternary operator.
It returns `a` if `condition`, else `b`.

{{< docs/func-aliases "compare.Conditional" >}}
{{< docs/func-examples "compare.Conditional" >}}







## compare.Default {#compare_namespace_default}

\(dflt [any](/documentation/reference/typesgo/#any), given [...any](/documentation/reference/typesgo/#any)\) → [any](/documentation/reference/typesgo/#any)
{.funcsig}


Default checks whether a `given` value is set and returns a default value if it
is not.  "Set" in this context means non-zero for numeric types and times;
non-zero length for strings, arrays, slices, and maps;
any boolean or struct value; or non-nil for any other types.

{{< docs/func-aliases "compare.Default" >}}
{{< docs/func-examples "compare.Default" >}}







## compare.Eq {#compare_namespace_eq}

\(first [any](/documentation/reference/typesgo/#any), others [...any](/documentation/reference/typesgo/#any)\) → [bool](/documentation/reference/typesgo/#bool)
{.funcsig}


Eq returns the boolean truth of arg1 == arg2 || arg1 == arg3 || arg1 == arg4.

{{< docs/func-aliases "compare.Eq" >}}
{{< docs/func-examples "compare.Eq" >}}







## compare.Ge {#compare_namespace_ge}

\(first [any](/documentation/reference/typesgo/#any), others [...any](/documentation/reference/typesgo/#any)\) → [bool](/documentation/reference/typesgo/#bool)
{.funcsig}


Ge returns the boolean truth of arg1 >= arg2 && arg1 >= arg3 && arg1 >= arg4.

{{< docs/func-aliases "compare.Ge" >}}
{{< docs/func-examples "compare.Ge" >}}







## compare.Gt {#compare_namespace_gt}

\(first [any](/documentation/reference/typesgo/#any), others [...any](/documentation/reference/typesgo/#any)\) → [bool](/documentation/reference/typesgo/#bool)
{.funcsig}


Gt returns the boolean truth of arg1 > arg2 && arg1 > arg3 && arg1 > arg4.

{{< docs/func-aliases "compare.Gt" >}}
{{< docs/func-examples "compare.Gt" >}}







## compare.Le {#compare_namespace_le}

\(first [any](/documentation/reference/typesgo/#any), others [...any](/documentation/reference/typesgo/#any)\) → [bool](/documentation/reference/typesgo/#bool)
{.funcsig}


Le returns the boolean truth of arg1 <= arg2 && arg1 <= arg3 && arg1 <= arg4.

{{< docs/func-aliases "compare.Le" >}}
{{< docs/func-examples "compare.Le" >}}







## compare.Lt {#compare_namespace_lt}

\(first [any](/documentation/reference/typesgo/#any), others [...any](/documentation/reference/typesgo/#any)\) → [bool](/documentation/reference/typesgo/#bool)
{.funcsig}


Lt returns the boolean truth of arg1 < arg2 && arg1 < arg3 && arg1 < arg4.

{{< docs/func-aliases "compare.Lt" >}}
{{< docs/func-examples "compare.Lt" >}}









## compare.Ne {#compare_namespace_ne}

\(first [any](/documentation/reference/typesgo/#any), others [...any](/documentation/reference/typesgo/#any)\) → [bool](/documentation/reference/typesgo/#bool)
{.funcsig}


Ne returns the boolean truth of arg1 != arg2 && arg1 != arg3 && arg1 != arg4.

{{< docs/func-aliases "compare.Ne" >}}
{{< docs/func-examples "compare.Ne" >}}





