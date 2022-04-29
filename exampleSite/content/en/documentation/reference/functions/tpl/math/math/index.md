




---
title: "math"
linkTitle: "math"
description: "Math is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
hugoSymbol: TODO




---















## math.Add {#math_namespace_add}

\(a [any](/documentation/reference/gotypes/#any)\) → [any](/documentation/reference/gotypes/#any)
{.funcsig}


Add adds two numbers.

{{< docs/func-aliases "math.Add" >}}
{{< docs/func-examples "math.Add" >}}







## math.Ceil {#math_namespace_ceil}

\(x [any](/documentation/reference/gotypes/#any)\) → [float](/documentation/reference/gotypes/#float)
{.funcsig}


Ceil returns the least integer value greater than or equal to `x`.

{{< docs/func-aliases "math.Ceil" >}}
{{< docs/func-examples "math.Ceil" >}}







## math.Counter {#math_namespace_counter}

\(\) → [uint64](/documentation/reference/gotypes/#uint64)
{.funcsig}


Counter increments and returns a global counter.
This was originally added to be used in tests where now.UnixNano did not
have the needed precision (especially on Windows).
Note that given the parallel nature of Hugo, you cannot use this to get sequences of numbers,
and the counter will reset on new builds.

{{< docs/func-aliases "math.Counter" >}}
{{< docs/func-examples "math.Counter" >}}







## math.Div {#math_namespace_div}

\(a [any](/documentation/reference/gotypes/#any)\) → [any](/documentation/reference/gotypes/#any)
{.funcsig}


Div divides two numbers.

{{< docs/func-aliases "math.Div" >}}
{{< docs/func-examples "math.Div" >}}







## math.Floor {#math_namespace_floor}

\(x [any](/documentation/reference/gotypes/#any)\) → [float](/documentation/reference/gotypes/#float)
{.funcsig}


Floor returns the greatest integer value less than or equal to `x`.

{{< docs/func-aliases "math.Floor" >}}
{{< docs/func-examples "math.Floor" >}}







## math.Log {#math_namespace_log}

\(a [any](/documentation/reference/gotypes/#any)\) → [float](/documentation/reference/gotypes/#float)
{.funcsig}


Log returns the natural logarithm of `a` number.

{{< docs/func-aliases "math.Log" >}}
{{< docs/func-examples "math.Log" >}}







## math.Max {#math_namespace_max}

\(a [any](/documentation/reference/gotypes/#any)\) → [float](/documentation/reference/gotypes/#float)
{.funcsig}


Max returns the greater of two numbers.

{{< docs/func-aliases "math.Max" >}}
{{< docs/func-examples "math.Max" >}}







## math.Min {#math_namespace_min}

\(a [any](/documentation/reference/gotypes/#any)\) → [float](/documentation/reference/gotypes/#float)
{.funcsig}


Min returns the smaller of two numbers.

{{< docs/func-aliases "math.Min" >}}
{{< docs/func-examples "math.Min" >}}







## math.Mod {#math_namespace_mod}

\(a [any](/documentation/reference/gotypes/#any)\) → [int64](/documentation/reference/gotypes/#int64)
{.funcsig}


Mod returns `a` % b.

{{< docs/func-aliases "math.Mod" >}}
{{< docs/func-examples "math.Mod" >}}







## math.ModBool {#math_namespace_modbool}

\(a [any](/documentation/reference/gotypes/#any)\) → [bool](/documentation/reference/gotypes/#bool)
{.funcsig}


ModBool returns the boolean of `a` % b.  If `a` % b == 0, return true.

{{< docs/func-aliases "math.ModBool" >}}
{{< docs/func-examples "math.ModBool" >}}







## math.Mul {#math_namespace_mul}

\(a [any](/documentation/reference/gotypes/#any)\) → [any](/documentation/reference/gotypes/#any)
{.funcsig}


Mul multiplies two numbers.

{{< docs/func-aliases "math.Mul" >}}
{{< docs/func-examples "math.Mul" >}}







## math.Pow {#math_namespace_pow}

\(a [any](/documentation/reference/gotypes/#any)\) → [float](/documentation/reference/gotypes/#float)
{.funcsig}


Pow returns `a` raised to the power of b.

{{< docs/func-aliases "math.Pow" >}}
{{< docs/func-examples "math.Pow" >}}







## math.Round {#math_namespace_round}

\(x [any](/documentation/reference/gotypes/#any)\) → [float](/documentation/reference/gotypes/#float)
{.funcsig}


Round returns the nearest integer, rounding half away from zero.

{{< docs/func-aliases "math.Round" >}}
{{< docs/func-examples "math.Round" >}}







## math.Sqrt {#math_namespace_sqrt}

\(a [any](/documentation/reference/gotypes/#any)\) → [float](/documentation/reference/gotypes/#float)
{.funcsig}


Sqrt returns the square root of `a` number.

{{< docs/func-aliases "math.Sqrt" >}}
{{< docs/func-examples "math.Sqrt" >}}







## math.Sub {#math_namespace_sub}

\(a [any](/documentation/reference/gotypes/#any)\) → [any](/documentation/reference/gotypes/#any)
{.funcsig}


Sub subtracts two numbers.

{{< docs/func-aliases "math.Sub" >}}
{{< docs/func-examples "math.Sub" >}}





