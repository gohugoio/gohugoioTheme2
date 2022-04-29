


---
title: "Site"
linkTitle: "Site"
description: "Site is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
hugoSymbol: TODO


keywords:
- site

weight: 10
---








## Language {#page_site_language}
\(\) → [langs.Language](/documentation/reference/objects//langs.language)
{.funcsig}

Returns the `Language` configured for this Site.




## RegularPages {#page_site_regularpages}
\(\) → [Pages](/documentation/reference/objects//pages)
{.funcsig}

Returns all the regular Pages in this Site.




## Pages {#page_site_pages}
\(\) → [Pages](/documentation/reference/objects//pages)
{.funcsig}

Returns all `Pages` in this Site.




## Home {#page_site_home}
\(\) → [Page](/documentation/reference/objects//page)
{.funcsig}

A shortcut to the home page.




## IsServer {#page_site_isserver}
\(\) → [bool](/documentation/reference/gotypes/#bool)
{.funcsig}

Returns true if we're running in a server.




## ServerPort {#page_site_serverport}
\(\) → [int](/documentation/reference/gotypes/#int)
{.funcsig}

Returns the server port.




## Title {#page_site_title}
\(\) → [string](/documentation/reference/gotypes/#string)
{.funcsig}

Returns the configured title for this Site.




## Sites {#page_site_sites}
\(\) → [Sites](/documentation/reference/objects//sites)
{.funcsig}

Returns all `Sites` for all languages.




## Current {#page_site_current}
\(\) → [Site](/documentation/reference/objects//site)
{.funcsig}

Returns Site currently rendering.




## Hugo {#page_site_hugo}
\(\) → [Info](/documentation/reference/objects/common/hugo/info)
{.funcsig}

Returns a struct with some information about the build.




## BaseURL {#page_site_baseurl}
\(\) → [URL](/documentation/reference/objects/html/template/url)
{.funcsig}

Returns the `BaseURL` for this Site.




## Taxonomies {#page_site_taxonomies}
\(\) → [any](/documentation/reference/gotypes/#any)
{.funcsig}

Retuns a taxonomy map.




## LastChange {#page_site_lastchange}
\(\) → [time.Time](/documentation/reference/gotypes/#timetime)
{.funcsig}

Returns the last modification date of the content.




## Menus {#page_site_menus}
\(\) → [Menus](/documentation/reference/objects/navigation/menus)
{.funcsig}

Returns the `Menus` for this site.




## Params {#page_site_params}
\(\) → [Params](/documentation/reference/objects/common/maps/params)
{.funcsig}

Returns the `Params` configured for this site.




## Data {#page_site_data}
\(\) → [map[string]any](/documentation/reference/gotypes/#mapstringany)
{.funcsig}

Returns a map of all the data inside /data.






