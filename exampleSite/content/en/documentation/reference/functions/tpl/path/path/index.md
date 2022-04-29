




---
title: "path"
linkTitle: "path"
description: "Path is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
hugoSymbol: TODO




---















## path.Base {#path_namespace_base}

\(path [any](/documentation/reference/gotypes/#any)\) → [string](/documentation/reference/gotypes/#string)
{.funcsig}


Base returns the last element of `path`.
Trailing slashes are removed before extracting the last element.
If the `path` is empty, Base returns ".".
If the `path` consists entirely of slashes, Base returns "/".
The input `path` is passed into filepath.ToSlash converting any Windows slashes
to forward slashes.

{{< docs/func-aliases "path.Base" >}}
{{< docs/func-examples "path.Base" >}}







## path.Clean {#path_namespace_clean}

\(path [any](/documentation/reference/gotypes/#any)\) → [string](/documentation/reference/gotypes/#string)
{.funcsig}


Clean replaces the separators used with standard slashes and then
extraneous slashes are removed.

{{< docs/func-aliases "path.Clean" >}}
{{< docs/func-examples "path.Clean" >}}







## path.Dir {#path_namespace_dir}

\(path [any](/documentation/reference/gotypes/#any)\) → [string](/documentation/reference/gotypes/#string)
{.funcsig}


Dir returns all but the last element of `path`, typically the `path`'s directory.
After dropping the final element using Split, the `path` is Cleaned and trailing
slashes are removed.
If the `path` is empty, Dir returns ".".
If the `path` consists entirely of slashes followed by non-slash bytes, Dir
returns a single slash. In any other case, the returned `path` does not end in a
slash.
The input `path` is passed into filepath.ToSlash converting any Windows slashes
to forward slashes.

{{< docs/func-aliases "path.Dir" >}}
{{< docs/func-examples "path.Dir" >}}







## path.Ext {#path_namespace_ext}

\(path [any](/documentation/reference/gotypes/#any)\) → [string](/documentation/reference/gotypes/#string)
{.funcsig}


Ext returns the file name extension used by `path`.
The extension is the suffix beginning at the final dot
in the final slash-separated element of `path`;
it is empty if there is no dot.
The input `path` is passed into filepath.ToSlash converting any Windows slashes
to forward slashes.

{{< docs/func-aliases "path.Ext" >}}
{{< docs/func-examples "path.Ext" >}}







## path.Join {#path_namespace_join}

\(elements [...any](/documentation/reference/gotypes/#any)\) → [string](/documentation/reference/gotypes/#string)
{.funcsig}


Join joins any number of path `elements` into a single path, adding a
separating slash if necessary. All the input
path `elements` are passed into filepath.ToSlash converting any Windows slashes
to forward slashes.
The result is Cleaned; in particular,
all empty strings are ignored.

{{< docs/func-aliases "path.Join" >}}
{{< docs/func-examples "path.Join" >}}







## path.Split {#path_namespace_split}

\(path [any](/documentation/reference/gotypes/#any)\) → [DirFile](/documentation/reference/objects//dirfile)
{.funcsig}


Split splits `path` immediately following the final slash,
separating it into a directory and file name component.
If there is no slash in `path`, Split returns an empty dir and
file set to `path`.
The input `path` is passed into filepath.ToSlash converting any Windows slashes
to forward slashes.
The returned values have the property that `path` = dir+file.

{{< docs/func-aliases "path.Split" >}}
{{< docs/func-examples "path.Split" >}}





