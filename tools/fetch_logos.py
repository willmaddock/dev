#!/usr/bin/env python3
"""Run once from the repo root:  python3 tools/fetch_logos.py
Downloads employer/school/credential marks into static/artifacts/career-quest-app/logos/
and writes manifest.js so Career Quest uses the local copies. Needs internet.
Marks belong to their owners; identification only. MSU Denver is intentionally skipped
(its logo requires approval) and will show initials.

v2: works around the macOS "CERTIFICATE_VERIFY_FAILED" error by trying
    1) Python's default certs, 2) certifi, 3) the system curl.
    Files are only written when real data came back (no more 0-byte files)."""
import os, ssl, json, subprocess, urllib.request, urllib.parse

OUT = "static/artifacts/career-quest-app/logos"
os.makedirs(OUT, exist_ok=True)

WIKI = {
    "kingsoopers.com": "https://upload.wikimedia.org/wikipedia/commons/c/ca/King_Soopers_logo.svg",
    "convergys.com": "https://upload.wikimedia.org/wikipedia/commons/2/28/Convergys_logo.svg",
    "cummins.com": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Cummins_logo.svg",
}
FAV = ["amazon.com", "dish.com", "americorps.gov", "frontrange.edu", "regis.edu",
       "ibm.com", "coursera.org", "aws.amazon.com", "ptk.org", "nsls.org"]
UA = "Mozilla/5.0 (portfolio logo fetch)"


def _urllib(u, ctx=None):
    r = urllib.request.Request(u, headers={"User-Agent": UA})
    return urllib.request.urlopen(r, timeout=20, context=ctx).read()


def _certifi(u):
    import certifi
    return _urllib(u, ssl.create_default_context(cafile=certifi.where()))


def _curl(u):
    return subprocess.run(["curl", "-fsSL", "--max-time", "20", "-A", UA, u],
                          capture_output=True, check=True).stdout


def get(u):
    last = None
    for fn in (_urllib, _certifi, _curl):
        try:
            data = fn(u)
            if data:
                return data
        except Exception as e:
            last = e
    raise RuntimeError(last)


def save(domain, ext, data):
    # drop any stale copy of this domain, then write only real data
    for old in (".svg", ".png"):
        p = f"{OUT}/{domain}{old}"
        if os.path.exists(p) and os.path.getsize(p) == 0:
            os.remove(p)
    with open(f"{OUT}/{domain}.{ext}", "wb") as f:
        f.write(data)
    return f"{domain}.{ext}"


found = {}
for d, u in WIKI.items():
    try:
        found[d] = save(d, "svg", get(u)); print("ok", d)
    except Exception as e:
        print("skip", d, e)
for d in FAV:
    try:
        url = "https://www.google.com/s2/favicons?domain=%s&sz=128" % urllib.parse.quote(d)
        found[d] = save(d, "png", get(url)); print("ok", d)
    except Exception as e:
        print("skip", d, e)

with open(f"{OUT}/manifest.js", "w") as f:
    f.write("window.LOGO_FILES = " + json.dumps(found, indent=2) + ";\n")
print("Wrote manifest with", len(found), "logos")
