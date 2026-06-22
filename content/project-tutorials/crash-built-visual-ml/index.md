---
title: "Crash Severity Analysis with Public Geospatial Data"
summary: "Analyze how pedestrian crash severity is connected to driver's visual and built environment using Open POI data and Semantic Segmentation of GSV Images."
tags:
- Computer Vision
- Machine Learning
- Data Analysis
- Scikit-Learn

date: "2025-02-22T00:00:00Z"
external_link: ""

image:
  caption: ""
  focal_point: ""

url_code: "https://github.com/sijantanvir/crash-built-visual-ml"
url_project: "https://github.com/sijantanvir/crash-built-visual-ml"
url_pdf: ""
url_slides: ""
url_video: ""
slides: ""
math: false


---

In this project, I demonstrate how publicly available geospatial data and Google Streetview Images can be utilized to determine the correleation between fatal crashes and driver’s visual and built environment for data-scarce regions. 



I designed a pipeline that collects Point-of-Interest data from Overture Maps, collects information about road and traffic from Google Traffic Color Codes, weather data from Open-Meteo API and then perform Semantic Segmentation to identify Streetscape Complexity, Street Openness, Building View Index, Greenview Index. Then train four ensemble models (XGBoost, AdaBoost, Random Forest, CatBoost) to predict crash severity. Finally perform SHAP interpretability to map how individual road segments contrbute to fatal road crashes.

![Pipeline](./assets/Figure_4.png)



