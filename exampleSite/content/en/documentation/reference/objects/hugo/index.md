


---
title: "Hugo"
linkTitle: "Hugo"
description: "Hugo is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "



keywords:
- hugo

weight: 80
---










CommitHash
: {#hugo_info_commithash}






BuildDate
: {#hugo_info_builddate}






Environment
: The build environment.
Defaults are "production" (hugo) and "development" (hugo server).
This can also be set by the user.
It can be any string, but it will be all lower case.

{#hugo_info_environment}











## Deps {#hugo_info_deps}

\(\) → [[]Dependency](/documentation/reference/typeshugo/#dependency)
{.funcsig}


Deps gets a list of dependencies for this Hugo build.







## Generator {#hugo_info_generator}

\(\) → [template.HTML](/documentation/reference/typesgo/#templatehtml)
{.funcsig}


Generator a Hugo meta generator HTML tag.







## IsExtended {#hugo_info_isextended}

\(\) → [bool](/documentation/reference/typesgo/#bool)
{.funcsig}









## IsProduction {#hugo_info_isproduction}

\(\) → [bool](/documentation/reference/typesgo/#bool)
{.funcsig}









## Version {#hugo_info_version}

\(\) → [VersionString](/documentation/reference/objects/common/hugo/versionstring)
{.funcsig}


Version returns the current version as a comparable version string.





