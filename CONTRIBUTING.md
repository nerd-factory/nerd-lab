# Contributing

Short version: turn up, be curious, break something interesting.

There is no application process and no minimum qualification. If you are reading this
page at all, you have already cleared the bar.

## If you have never used GitHub before

Genuinely, start here. This is the intended door, not the consolation one.

1. Go to **[Discussions](https://github.com/orgs/nerd-factory/discussions)**.
2. Post the question you are worried is too basic. It is not too basic. The people who
   built this stuff were confused about it first, usually for longer than you have been.
3. That is the whole first step. You have now contributed — an unanswered question is a
   gap in the documentation wearing a disguise.

Things that are real contributions, in case anyone told you otherwise:

- Saying "I followed the instructions and it did not work."
- Saying "I do not understand what this word means."
- Saying "this explanation is worse than it needs to be."
- Noticing a typo. Yes, that one counts too.

## If you write code

1. Open an issue first if it is a big change. Not for permission — so that two people do
   not build the same thing in different directions on the same weekend.
2. Fork, branch, commit, open a pull request against `main`.
3. Small pull requests get reviewed. Large pull requests get admired and then reviewed
   slowly. Both are fine; only one of them is fast.

This site in particular is deliberately plain: HTML, CSS, and about sixty lines of
JavaScript. There is no build step, no bundler, and no framework. If your change adds
one, explain in the pull request what it buys us. It might well be worth it — it just
has to be argued for rather than assumed.

To work on it locally:

```bash
git clone https://github.com/nerd-factory/nerd-lab.git
cd nerd-lab
python3 -m http.server 8000
# open http://localhost:8000
```

That is the entire toolchain. It is not going to get more sophisticated by accident.

## What we care about in review

- **Does it work without JavaScript?** The content must. The clever bits may not.
- **Is it accessible?** Real contrast, real focus states, keyboard reachable,
  `prefers-reduced-motion` respected. This is not negotiable and it is not decoration.
- **Is it fast?** No dependency arrives without a reason attached.
- **Does it sound like us?** Dry, exact, unhurried. No hype, no buzzwords, no exclamation
  marks doing emotional labour.

## Becoming a maintainer

Keep showing up and you become a co-maintainer. This is not a reward scheme, it is just
an accurate description of what has already happened — at some point it stops being
somebody's project that you help with, and we would rather the permissions reflected
reality.

## One rule

Read the [Code of Conduct](CODE_OF_CONDUCT.md). It is short and it is enforced.
Be the kind of person that a nervous beginner is glad to have replied to them.
