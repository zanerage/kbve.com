---
title: SWUP Framework
description: Swup is a website transition library that makes it easy, quick and fast to render pages
tags:
- javascript
---

## SWUP Framework

## SWUP Install

- Adding `swup` page into your nodejs application via yarn.

- ```shell
    yarn add swup
    ```

- Plugins to install for `swup` via yarn.

- ```shell
    yarn add @swup/scripts-plugin @swup/a11y-plugin @swup/head-plugin @swup/slide-theme @swup/scroll-plugin @swup/preload-plugin @swup/body-class-plugin @swup/debug-plugin
    ```

## SWUP Journal

- 11/10/2022 - There seems to be issues with SWUP and frameworks that use partial hydration. The reference of the DOM seems to be the core, thus there might be a requirement of a modular framework that sits in between certain partial content and SWUP. Based upon the research, it seems that Gia might be an approach to take.
