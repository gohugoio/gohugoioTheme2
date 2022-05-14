




---
title: "math"
linkTitle: "math"
description: "Math is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "





---















## math.Add {#math_namespace_add}

\(n1, n2 [any](/documentation/reference/typesgo/#any)\) → [any](/documentation/reference/typesgo/#any)
{.funcsig}


Add adds the two addends `n1` and `n2`.

{{< docs/func-aliases "math.Add" >}}
{{< docs/func-examples "math.Add" >}}







## math.Ceil {#math_namespace_ceil}

\(n [any](/documentation/reference/typesgo/#any)\) → [float](/documentation/reference/typesgo/#float)
{.funcsig}


Ceil returns the least integer value greater than or equal to `n`.

{{< docs/func-aliases "math.Ceil" >}}
{{< docs/func-examples "math.Ceil" >}}







## math.Counter {#math_namespace_counter}

\(\) → [uint64](/documentation/reference/typesgo/#uint64)
{.funcsig}


Counter increments and returns a global counter.
This was originally added to be used in tests where now.UnixNano did not
have the needed precision (especially on Windows).
Note that given the parallel nature of Hugo, you cannot use this to get sequences of numbers,
and the counter will reset on new builds.

{{< docs/func-aliases "math.Counter" >}}
{{< docs/func-examples "math.Counter" >}}







## math.Div {#math_namespace_div}

\(n1, n2 [any](/documentation/reference/typesgo/#any)\) → [any](/documentation/reference/typesgo/#any)
{.funcsig}


Div divides `n1` by `n2`.

{{< docs/func-aliases "math.Div" >}}
{{< docs/func-examples "math.Div" >}}







## math.Floor {#math_namespace_floor}

\(n [any](/documentation/reference/typesgo/#any)\) → [float](/documentation/reference/typesgo/#float)
{.funcsig}


Floor returns the greatest integer value less than or equal to `n`.

{{< docs/func-aliases "math.Floor" >}}
{{< docs/func-examples "math.Floor" >}}







## math.Log {#math_namespace_log}

\(n [any](/documentation/reference/typesgo/#any)\) → [float](/documentation/reference/typesgo/#float)
{.funcsig}


Log returns the natural logarithm of the number `n`.

{{< docs/func-aliases "math.Log" >}}
{{< docs/func-examples "math.Log" >}}







## math.Max {#math_namespace_max}

\(n1, n2 [any](/documentation/reference/typesgo/#any)\) → [float](/documentation/reference/typesgo/#float)
{.funcsig}


Max returns the greater of the two numbers `n1` or `n2`.

{{< docs/func-aliases "math.Max" >}}
{{< docs/func-examples "math.Max" >}}







## math.Min {#math_namespace_min}

\(n1, n2 [any](/documentation/reference/typesgo/#any)\) → [float](/documentation/reference/typesgo/#float)
{.funcsig}


Min returns the smaller of two numbers `n1` or `n2`.

{{< docs/func-aliases "math.Min" >}}
{{< docs/func-examples "math.Min" >}}







## math.Mod {#math_namespace_mod}

\(n1, n2 [any](/documentation/reference/typesgo/#any)\) → [int64](/documentation/reference/typesgo/#int64)
{.funcsig}


Mod returns `n1` % `n2`.

{{< docs/func-aliases "math.Mod" >}}
{{< docs/func-examples "math.Mod" >}}







## math.ModBool {#math_namespace_modbool}

\(n1, n2 [any](/documentation/reference/typesgo/#any)\) → [bool](/documentation/reference/typesgo/#bool)
{.funcsig}


ModBool returns the boolean of `n1` % `n2`.  If `n1` % `n2` == 0, return true.

{{< docs/func-aliases "math.ModBool" >}}
{{< docs/func-examples "math.ModBool" >}}







## math.Mul {#math_namespace_mul}

\(n1, n2 [any](/documentation/reference/typesgo/#any)\) → [any](/documentation/reference/typesgo/#any)
{.funcsig}


Mul multiplies the two numbers `n1` and `n2`.

{{< docs/func-aliases "math.Mul" >}}
{{< docs/func-examples "math.Mul" >}}







## math.Pow {#math_namespace_pow}

\(n1, n2 [any](/documentation/reference/typesgo/#any)\) → [float](/documentation/reference/typesgo/#float)
{.funcsig}


Pow returns `n1` raised to the power of `n2`.

{{< docs/func-aliases "math.Pow" >}}
{{< docs/func-examples "math.Pow" >}}







## math.Round {#math_namespace_round}

\(n [any](/documentation/reference/typesgo/#any)\) → [float](/documentation/reference/typesgo/#float)
{.funcsig}


Round returns the integer nearest to `n`, rounding half away from zero.

{{< docs/func-aliases "math.Round" >}}
{{< docs/func-examples "math.Round" >}}







## math.Sqrt {#math_namespace_sqrt}

\(n [any](/documentation/reference/typesgo/#any)\) → [float](/documentation/reference/typesgo/#float)
{.funcsig}


Sqrt returns the square root of the number `n`.

{{< docs/func-aliases "math.Sqrt" >}}
{{< docs/func-examples "math.Sqrt" >}}







## math.Sub {#math_namespace_sub}

\(n1, n2 [any](/documentation/reference/typesgo/#any)\) → [any](/documentation/reference/typesgo/#any)
{.funcsig}


Sub subtracts `n2` from `n1`.

{{< docs/func-aliases "math.Sub" >}}
{{< docs/func-examples "math.Sub" >}}





