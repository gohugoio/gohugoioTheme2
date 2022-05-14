




---
title: "os"
linkTitle: "os"
description: "Os is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "





---















## os.FileExists {#os_namespace_fileexists}

\(i [any](/documentation/reference/typesgo/#any)\) → [bool](/documentation/reference/typesgo/#bool)
{.funcsig}


FileExists checks whether a file exists under the given path.

{{< docs/func-aliases "os.FileExists" >}}
{{< docs/func-examples "os.FileExists" >}}







## os.Getenv {#os_namespace_getenv}

\(key [any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


Getenv retrieves the value of the environment variable named by the `key`.
It returns the value, which will be empty if the variable is not present.

{{< docs/func-aliases "os.Getenv" >}}
{{< docs/func-examples "os.Getenv" >}}







## os.ReadDir {#os_namespace_readdir}

\(i [any](/documentation/reference/typesgo/#any)\) → [_os.FileInfo](/documentation/reference/objects//_os.fileinfo)
{.funcsig}


ReadDir lists the directory contents relative to the configured WorkingDir.

{{< docs/func-aliases "os.ReadDir" >}}
{{< docs/func-examples "os.ReadDir" >}}







## os.ReadFile {#os_namespace_readfile}

\(i [any](/documentation/reference/typesgo/#any)\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


ReadFile reads the file named by filename relative to the configured WorkingDir.
It returns the contents as a string.
There is an upper size limit set at 1 megabytes.

{{< docs/func-aliases "os.ReadFile" >}}
{{< docs/func-examples "os.ReadFile" >}}







## os.Stat {#os_namespace_stat}

\(i [any](/documentation/reference/typesgo/#any)\) → [FileInfo](/documentation/reference/objects/os/fileinfo)
{.funcsig}


Stat returns the os.FileInfo structure describing file.

{{< docs/func-aliases "os.Stat" >}}
{{< docs/func-examples "os.Stat" >}}





