


---
title: "MediaType"
linkTitle: "MediaType"
description: "MediaType is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "


tags:
- outputs



---










## MainType {#media_type_maintype}
`MainType` is a {string  }.






## SubType {#media_type_subtype}
`SubType` is a {string  }.






## Delimiter {#media_type_delimiter}
`Delimiter` is a {string  }.






## FirstSuffix {#media_type_firstsuffix}
`FirstSuffix` is a {SuffixInfo  media}.
FirstSuffix holds the first suffix defined for this Type.












## IsText {#media_type_istext}

\(\) → [bool](/documentation/reference/typesgo/#bool)
{.funcsig}


IsText returns whether this Type is a text format.
Note that this may currently return false negatives.
TODO(bep) improve













## Suffixes {#media_type_suffixes}

\(\) → [[]string](/documentation/reference/typesgo/#string)
{.funcsig}


Suffixes returns all valid file suffixes for this type.







## Type {#media_type_type}

\(\) → [string](/documentation/reference/typesgo/#string)
{.funcsig}


Type returns a string representing the main- and sub-type of a media type, e.g. "text/css".
A suffix identifier will be appended after a "+" if set, e.g. "image/svg+xml".
Hugo will register a set of default media types.
These can be overridden by the user in the configuration,
by defining a media type with the same Type.





