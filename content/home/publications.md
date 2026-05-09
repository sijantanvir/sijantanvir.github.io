+++
# Publications section on homepage.
widget = "pages"
headless = true
active = true
weight = 31

title = "[Publication](/publications/)"
subtitle = """*Publications and Preprints*"""

[content]
  page_type = "publication"
  count = 5
  offset = 0
  order = "desc"

  [content.filters]
    tag = ""
    category = ""
    publication_type = ""
    author = ""
    exclude_featured = false

[design]
  # 1 = List, 2 = Compact, 3 = Card, 4 = Citation
  view = 4

[advanced]
  css_style = ""
  css_class = "home-publications-cards"
+++
