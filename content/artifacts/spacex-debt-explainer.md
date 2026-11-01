---
title: "SpaceX: Two Crashes, One Rally – and the Debt-Ceiling Math"
date: 2026-10-31T00:00:00-06:00
lastmod: 2026-11-01T00:00:00-06:00
draft: false
description: "An interactive look at SpaceX's 2026 market-value swings with sourced detail on each move, plus a live debt-ceiling tracker and straight-line calculator."
tags: ["Data Visualization", "JavaScript", "SVG", "Explainer", "SpaceX"]
linkTitle: "SpaceX & Debt-Ceiling Explainer"
author: "William Maddock"
showToc: false
hidemeta: false
comments: false
canonicalURL: "https://willmaddock.github.io/dev/artifacts/spacex-debt-explainer/"
disableShare: false
hideSummary: false
searchHidden: false
ShowReadingTime: false
ShowWordCount: false
ShowBreadCrumbs: true
ShowPostNavLinks: true
cover:
  image: "./img/artifact-spacex-debt.webp"
  alt: "Bar chart of SpaceX market-value swings: down $600B, down $400B, up $500B, down $400B"
  caption: ""
  relative: false
  hidden: false
  hiddenInSingle: true
---

Two crashes and a rally pushed SpaceX's market value around by hundreds of billions of dollars in 2026. Tap any bar for what happened, the dollar figure, and the source. The second tab now pulls Treasury's Debt to the Penny data live, shows how much room is left under the statutory limit, and estimates when federal debt would reach it at different daily borrowing paces.

{{< artifact src="artifacts/spacex-debt/" title="SpaceX swings and debt-ceiling calculator" height="900" >}}

## About this artifact

- **Built with** plain HTML, CSS, and JavaScript. The chart is inline SVG with keyboard-accessible bars, and there are no libraries or build step.
- **Follows the site theme.** It picks up the light or dark mode you choose in the header.
- **Figures are approximate.** Every move links to its source. The late-June-to-July slide is derived by subtracting the June crash from a reported total, and the borrowing-pace and headroom numbers include one figure I could not verify independently. The calculator is a straight-line illustration, not a forecast.
