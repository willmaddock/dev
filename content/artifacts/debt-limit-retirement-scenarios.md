---
title: "What a Debt-Limit Standoff Could Do to a Retirement Account"
date: 2026-11-01T00:00:00-06:00
lastmod: 2026-11-01T00:00:00-06:00
draft: false
description: "An interactive scenario tool: pick how a debt-limit standoff ends and whether a recession hits, and see the effect on a stock, bond and cash mix, with sourced historical ranges."
tags: ["Data Visualization", "JavaScript", "Explainer", "Debt Ceiling", "Retirement"]
linkTitle: "Debt Limit & Retirement Scenarios"
author: "William Maddock"
showToc: false
hidemeta: false
comments: false
canonicalURL: "https://willmaddock.github.io/dev/artifacts/debt-limit-retirement-scenarios/"
disableShare: false
hideSummary: false
searchHidden: false
ShowReadingTime: false
ShowWordCount: false
ShowBreadCrumbs: true
ShowPostNavLinks: true
cover:
  image: "./img/artifact-debt-retirement.webp"
  alt: "Bar chart of stock-market drops: 0% in 2023, 17% in 2011, 45% in a high breach model, 57% in 2008"
  caption: ""
  relative: false
  hidden: false
  hiddenInSingle: true
---

How would a debt-limit standoff, or a recession, change a retirement account? Pick how a standoff ends, add a recession if you like, and enter a rough stock, bond and cash mix. The tool shows the drop, the gain needed to recover, and how that compares with the years you have left. It also shows the live date when federal debt reaches the limit at the recent pace, from Treasury's Debt to the Penny data.

{{< artifact src="artifacts/debt-retirement/" title="Debt limit and retirement scenarios" height="1500" >}}

## About this artifact

- **Built from past episodes and published models.** The 2011 and 2023 standoffs and the Moody's and White House scenarios are sourced in the tool. The US has never missed a payment, so the prolonged-breach figures are model scenarios, not history.
- **My assumptions are labeled.** Bond changes in a breach, the recovery return, and the rule of using the larger of the standoff and recession stock drops are mine.
- **Not covered.** Pensions, Social Security and passive income are not modeled, and none of this is financial advice.
- **Built with** plain HTML, CSS and JavaScript, with no libraries or build step. Scenario links save your choices in the page address.
