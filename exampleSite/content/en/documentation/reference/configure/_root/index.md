---
title: Root Config
weight: 5
slug: root
description: The top level configuration.
---


baseURL
: Hostname (and path) to the root, e.g. https://bep.is/

buildDrafts (false)
: Include drafts when building.

buildExpired  (false)
: Include content already expired.

buildFuture (false)
: Include content with publishdate in the future.

canonifyURLs (false)
: Enable to turn relative URLs into absolute.

defaultContentLanguage ("en")
: Content without language indicator will default to this language.

defaultContentLanguageInSubdir (false)
: Render the default content language in subdir, e.g. `content/en/`. The site root `/` will then redirect to `/en/`.

disableAliases (false)
: Will disable generation of alias redirects. Note that even if `disableAliases` is set, the aliases themselves are preserved on the page. The motivation with this is to be able to generate 301 redirects in an `.htaccess`, a Netlify `_redirects` file or similar using a custom output format.

disableHugoGeneratorInject (false)
: Hugo will, by default, inject a generator meta tag in the HTML head on the _home page only_. You can turn it off, but we would really appreciate if you don't, as this is a good way to watch Hugo's popularity on the rise.

disableKinds ([])
: Enable disabling of all pages of the specified *Kinds*. Allowed values in this list: `"page"`, `"home"`, `"section"`, `"taxonomy"`, `"term"`, `"RSS"`, `"sitemap"`, `"robotsTXT"`, `"404"`.

disableLiveReload (false)
: Disable automatic live reloading of browser window.

disablePathToLower (false)
: Do not convert the url/path to lowercase.

enableEmoji (false)
: Enable Emoji emoticons support for page content; see the [Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet/).

enableGitInfo (false)
: Enable `.GitInfo` object for each page (if the Hugo site is versioned by Git). This will then update the `Lastmod` parameter for each page using the last git commit date for that content file.

enableInlineShortcodes (false)
: Enable inline shortcode support. See [Inline Shortcodes](/templates/shortcode-templates/#inline-shortcodes).

enableMissingTranslationPlaceholders (false)
: Show a placeholder instead of the default value or an empty string if a translation is missing.

enableRobotsTXT (false)
: Enable generation of `robots.txt` file.


footnoteAnchorPrefix ("")
: Prefix for footnote anchors.

footnoteReturnLinkContents ("")
: Text to display for footnote return links.

googleAnalytics ("")
: Google Analytics tracking ID.

hasCJKLanguage (false)
: If true, auto-detect Chinese/Japanese/Korean Languages in the content. This will make `.Summary` and `.WordCount` behave correctly for CJK languages.

imaging
: See [Image Processing Config](/content-management/image-processing/#image-processing-config).

languages
: See [Configure Languages](/content-management/multilingual/#configure-languages).

languageCode ("")
: The site's language code. It is used in the default [RSS template](/templates/rss/#configure-rss) and can be useful for [multi-lingual sites](/content-management/multilingual/#configure-multilingual-multihost).

languageName ("")
: The site's language name.

disableLanguages
: See [Disable a Language](/content-management/multilingual/#disable-a-language)

layoutDir ("layouts")
: The directory from where Hugo reads layouts (templates).

log (false)
: Enable logging.

logFile ("")
: Log File path (if set, logging enabled automatically).

markup
: See [Configure Markup](/getting-started/configuration-markup).{{< new-in "0.60.0" >}}

menu
: See [Add Non-content Entries to a Menu](/content-management/menus/#add-non-content-entries-to-a-menu).

minify
: See [Configure Minify](#configure-minify)

module
: Module config see [Module Config](/hugo-modules/configuration/).{{< new-in "0.56.0" >}}

newContentEditor ("")
: The editor to use when creating new content.

noChmod (false)
: Don't sync permission mode of files.

noTimes (false)
: Don't sync modification time of files.

paginate (10)
: Default number of elements per page in [pagination](/templates/pagination/).

paginatePath ("page")
: The path element used during pagination (https://example.com/page/2).

permalinks
: See [Content Management](/content-management/urls/#permalinks).

pluralizeListTitles (true)
: Pluralize titles in lists.

publishDir ("public")
: The directory to where Hugo will write the final static site (the HTML files etc.).

related
: See [Related Content](/content-management/related/#configure-related-content).{{< new-in "0.27" >}}

relativeURLs (false)
: Enable this to make all relative URLs relative to content root. Note that this does not affect absolute URLs.

refLinksErrorLevel ("ERROR")
: When using `ref` or `relref` to resolve page links and a link cannot resolved, it will be logged with this logg level. Valid values are `ERROR` (default) or `WARNING`. Any `ERROR` will fail the build (`exit -1`).

refLinksNotFoundURL
: URL to be used as a placeholder when a page reference cannot be found in `ref` or `relref`. Is used as-is.

rssLimit (unlimited)
: Maximum number of items in the RSS feed.

sectionPagesMenu ("")
: See ["Section Menu for Lazy Bloggers"](/templates/menu-templates/#section-menu-for-lazy-bloggers).

sitemap
: Default [sitemap configuration](/templates/sitemap-template/#configure-sitemapxml).

staticDir ("static")
: A directory or a list of directories from where Hugo reads [static files][static-files]. {{% module-mounts-note %}}

summaryLength (70)
: The length of text in words to show in a [`.Summary`](/content-management/summaries/#hugo-defined-automatic-summary-splitting).

taxonomies
: See [Configure Taxonomies](/content-management/taxonomies#configure-taxonomies).

theme ("")
: Theme to use (located by default in `/themes/THEMENAME/`).

themesDir ("themes")
: The directory where Hugo reads the themes from.

timeout (10000)
: Timeout for generating page contents, in milliseconds (defaults to 10&nbsp;seconds). *Note:* this is used to bail out of recursive content generation, if your pages are slow to generate (e.g., because they require large image processing or depend on remote contents) you might need to raise this limit.

title ("")
: Site title.

titleCaseStyle ("AP")
: Title case.

uglyURLs (false)
: When enabled, creates URL of the form `/filename.html` instead of `/filename/`.

verbose (false)
: Enable verbose output.

verboseLog (false)
: Enable verbose logging.

watch (false)
: Watch filesystem for changes and recreate as needed.
