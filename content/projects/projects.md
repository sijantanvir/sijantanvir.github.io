+++
# Projects page section
widget = "portfolio"
headless = true
active = true
weight = 65

title = "Projects"
subtitle = ""

[content]
  page_type = "project-tutorials"
  filter_default = 0

  [[content.filter_button]]
    name = "All"
    tag = "*"

  [[content.filter_button]]
    name = "Visualization"
    tag = "Visualization"

  [[content.filter_button]]
    name = "Statistics"
    tag = "Statistics"

[design]
  columns = "2"
  view = 5
  flip_alt_rows = true

[advanced]
  css_style = ""
  css_class = ""
+++
