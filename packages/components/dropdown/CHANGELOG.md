# @landing-ui/dropdown

## 2.3.7

### Patch Changes

- [#4322](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/4322) [`78c0928`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/78c09280e30113bd648057ad64ad6198d1e5d58f) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix #4292 interactive elements were not responding to "onClick" event

- Updated dependencies [[`78c0928`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/78c09280e30113bd648057ad64ad6198d1e5d58f)]:
  - @landing-ui/aria-utils@2.2.5
  - @landing-ui/menu@2.2.7
  - @landing-ui/popover@2.3.7

## 2.3.6

### Patch Changes

- [#4314](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/4314) [`5598806`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/5598806216166dc9fff36cafd9112412486b747f) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix build

- Updated dependencies [[`5598806`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/5598806216166dc9fff36cafd9112412486b747f)]:
  - @landing-ui/menu@2.2.6
  - @landing-ui/popover@2.3.6

## 2.3.5

### Patch Changes

- [#4288](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/4288) [`aa5ea19`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/aa5ea19a3c990f8f6d47abacf321f0cbce67b927) Thanks [@ryo-manba](https://github.com/ryo-manba)! - Fix initial animation direction to match fallback placement (#4251)

- Updated dependencies [[`11eae5c`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/11eae5cc808e10db07b509f4e06d30441bb1937a)]:
  - @landing-ui/menu@2.2.5
  - @landing-ui/popover@2.3.5

## 2.3.4

### Patch Changes

- [#4258](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/4258) [`1031e98`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/1031e985b71e69b8a7189ea049b9616257f820b3) Thanks [@wingkwong](https://github.com/wingkwong)! - sync with upstream RA versions

- [#4278](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/4278) [`26b33a5`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/26b33a51f0ae9d0bb1146277a8b61b839aa52393) Thanks [@wingkwong](https://github.com/wingkwong)! - fix unnecessary ref in dropdown (#4245)

- Updated dependencies [[`1031e98`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/1031e985b71e69b8a7189ea049b9616257f820b3)]:
  - @landing-ui/aria-utils@2.2.4
  - @landing-ui/popover@2.3.4
  - @landing-ui/menu@2.2.4

## 2.3.3

### Patch Changes

- [#4255](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/4255) [`6a94a12`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/6a94a125d4836b0a18d9cd2cb521c85a6bfa9050) Thanks [@wingkwong](https://github.com/wingkwong)! - fixed incorrect peerDependencies for theme and system package (#4254)

- Updated dependencies [[`6a94a12`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/6a94a125d4836b0a18d9cd2cb521c85a6bfa9050)]:
  - @landing-ui/popover@2.3.3
  - @landing-ui/menu@2.2.3
  - @landing-ui/aria-utils@2.2.3

## 2.3.2

### Patch Changes

- [#4247](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/4247) [`551ab18`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/551ab184060b24b2c3a89598f84d4c18599649d0) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix peerDeps & core package client on export \*

- Updated dependencies [[`551ab18`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/551ab184060b24b2c3a89598f84d4c18599649d0)]:
  - @landing-ui/popover@2.3.2
  - @landing-ui/menu@2.2.2
  - @landing-ui/aria-utils@2.2.2

## 2.3.1

### Patch Changes

- [`d6eee4a`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/d6eee4a8767556152f47f06dcf04940951abc5af) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - v2.6.2

- Updated dependencies [[`d6eee4a`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/d6eee4a8767556152f47f06dcf04940951abc5af)]:
  - @landing-ui/menu@2.2.1
  - @landing-ui/popover@2.3.1
  - @landing-ui/aria-utils@2.2.1
  - @landing-ui/react-utils@2.1.1
  - @landing-ui/shared-utils@2.1.1

## 2.3.0

### Minor Changes

- [`5786897`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/5786897b9950d95c12351dacd2fb41bb1e298201) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - This release includes several improvements and bug fixes:

  - Updated react-aria version across all components
  - Improved Drawer styles and transitions
  - Fixed missing peer dependencies for framer-motion
  - Fixed menu item classNames functionality
  - Added isClearable prop to Textarea component
  - Fixed label placement issues in Input and Select components
  - Improved table keyboard navigation with new isKeyboardNavigationDisabled prop
  - Fixed UI sliding issues with helper wrapper in Input and Select
  - Updated use-image hook to avoid Next.js hydration issues
  - Replaced RTL-specific styles with logical properties
  - Fixed textarea label squish issue
  - Bumped tailwind-merge version
  - Applied tw nested group fixes
  - Fixed fullWidth variant in input and select components
  - Moved circular-progress tv to progress
  - Changed ListboxItem key to optional
  - Fixed autocomplete clear button behavior
  - Updated Select label placement logic
  - Added missing framer-motion peer dependencies
  - Removed layoutNode prop from Table due to react-aria update
  - Virtualization added to Autocomplete

### Patch Changes

- [#4207](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/4207) [`6bc616c`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/6bc616caea948431d05eec33c1784e0560524e97) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix the "forwardRef render functions accept exactly two parameters: props and ref. Did you forget to use the ref parameter?" on next.js by changing the way we manage collection base components refs

- [#4206](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/4206) [`44958bf`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/44958bf91a1677becd5e9f3c420b7956cf0244d8) Thanks [@vinroger](https://github.com/vinroger)! - Fix typecheck

- [#4226](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/4226) [`6c0213d`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/6c0213dfc805aa3c793763c0b25f53b2b80c24dc) Thanks [@wingkwong](https://github.com/wingkwong)! - bump `@react-aria/utils` version (#4212)

- [#4198](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/4198) [`ffb1e55`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/ffb1e554f7d6b5b1ede66d0838b3b1edeeccdf6b) Thanks [@winchesHe](https://github.com/winchesHe)! - Fix forwardRef render functions not using ref

- Updated dependencies [[`6bc616c`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/6bc616caea948431d05eec33c1784e0560524e97), [`44958bf`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/44958bf91a1677becd5e9f3c420b7956cf0244d8), [`44958bf`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/44958bf91a1677becd5e9f3c420b7956cf0244d8), [`6c0213d`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/6c0213dfc805aa3c793763c0b25f53b2b80c24dc), [`ffb1e55`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/ffb1e554f7d6b5b1ede66d0838b3b1edeeccdf6b), [`5786897`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/5786897b9950d95c12351dacd2fb41bb1e298201), [`44958bf`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/44958bf91a1677becd5e9f3c420b7956cf0244d8)]:
  - @landing-ui/menu@2.2.0
  - @landing-ui/popover@2.3.0
  - @landing-ui/aria-utils@2.2.0
  - @landing-ui/react-utils@2.1.0
  - @landing-ui/shared-utils@2.1.0

## 2.2.0-beta.14

### Patch Changes

- Updated dependencies [[`0b5ceb93c`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/0b5ceb93ce098e5d76409190f2d57cd89c06b7e9)]:
  - @landing-ui/menu@2.1.0-beta.13
  - @landing-ui/popover@2.2.0-beta.12

## 2.2.0-beta.13

### Patch Changes

- Updated dependencies [[`d37007c69`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/d37007c69c3e1ff4a66d414cbb1a4a38bb22264c)]:
  - @landing-ui/menu@2.1.0-beta.12
  - @landing-ui/popover@2.2.0-beta.12
  - @landing-ui/aria-utils@2.1.0-beta.11

## 2.2.0-beta.12

### Patch Changes

- [`9869f2b91`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/9869f2b91d0829f9c7f0500ba05745707820bf27) Thanks [@wingkwong](https://github.com/wingkwong)! - bump version

- Updated dependencies [[`9869f2b91`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/9869f2b91d0829f9c7f0500ba05745707820bf27)]:
  - @landing-ui/menu@2.1.0-beta.11
  - @landing-ui/popover@2.2.0-beta.11
  - @landing-ui/aria-utils@2.1.0-beta.10
  - @landing-ui/react-utils@2.0.18-beta.8
  - @landing-ui/shared-utils@2.0.9-beta.8

## 2.2.0-beta.11

### Patch Changes

- [#3036](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/3036) [`eafdb7d47`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/eafdb7d475a7fcaa7671af77e86fcdf62f14ae00) Thanks [@ryo-manba](https://github.com/ryo-manba)! - update react-aria version

- Updated dependencies [[`eafdb7d47`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/eafdb7d475a7fcaa7671af77e86fcdf62f14ae00)]:
  - @landing-ui/menu@2.1.0-beta.10
  - @landing-ui/popover@2.2.0-beta.10
  - @landing-ui/aria-utils@2.1.0-beta.9

## 2.2.0-beta.10

### Patch Changes

- Updated dependencies [[`256d46277`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/256d462771c19d6ca5b969d0ec44419fb560f0ac)]:
  - @landing-ui/menu@2.1.0-beta.9
  - @landing-ui/popover@2.2.0-beta.9

## 2.2.0-beta.9

### Patch Changes

- Updated dependencies []:
  - @landing-ui/menu@2.1.0-beta.8
  - @landing-ui/popover@2.2.0-beta.9
  - @landing-ui/aria-utils@2.1.0-beta.8

## 2.2.0-beta.8

### Patch Changes

- [#4092](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/4092) [`528668db8`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/528668db85b98b46473cb1e214780b7468cdadba) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Test new runner

- Updated dependencies [[`528668db8`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/528668db85b98b46473cb1e214780b7468cdadba)]:
  - @landing-ui/menu@2.1.0-beta.7
  - @landing-ui/popover@2.2.0-beta.8
  - @landing-ui/aria-utils@2.1.0-beta.7
  - @landing-ui/react-utils@2.0.18-beta.7
  - @landing-ui/shared-utils@2.0.9-beta.7

## 2.2.0-beta.7

### Patch Changes

- [#4086](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/4086) [`f69fe47b5`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/f69fe47b5b8f6f3a77a7a8c20d8715263fa32acb) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Pnpm clean

- Updated dependencies [[`f69fe47b5`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/f69fe47b5b8f6f3a77a7a8c20d8715263fa32acb)]:
  - @landing-ui/menu@2.1.0-beta.6
  - @landing-ui/popover@2.2.0-beta.7
  - @landing-ui/aria-utils@2.1.0-beta.6
  - @landing-ui/react-utils@2.0.18-beta.6
  - @landing-ui/shared-utils@2.0.9-beta.6

## 2.2.0-beta.6

### Patch Changes

- [#4083](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/4083) [`35058262c`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/35058262c61628fb42907f529c4417886aa12bb2) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix build

- Updated dependencies [[`35058262c`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/35058262c61628fb42907f529c4417886aa12bb2)]:
  - @landing-ui/menu@2.1.0-beta.5
  - @landing-ui/popover@2.2.0-beta.6
  - @landing-ui/aria-utils@2.1.0-beta.5
  - @landing-ui/react-utils@2.0.18-beta.5
  - @landing-ui/shared-utils@2.0.9-beta.5

## 2.2.0-beta.5

### Patch Changes

- Updated dependencies [[`5339b2571`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/5339b2571e6d73ca6efe2acd34d88669419db9f7)]:
  - @landing-ui/shared-utils@2.0.9-beta.4
  - @landing-ui/menu@2.1.0-beta.4
  - @landing-ui/popover@2.2.0-beta.5
  - @landing-ui/aria-utils@2.1.0-beta.4
  - @landing-ui/react-utils@2.0.18-beta.4

## 2.2.0-beta.4

### Patch Changes

- [#4010](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/4010) [`ef432eb53`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/ef432eb539714fded6cab86a2185956fb103e0df) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - framer-motion alpha version added

- Updated dependencies [[`ef432eb53`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/ef432eb539714fded6cab86a2185956fb103e0df)]:
  - @landing-ui/menu@2.1.0-beta.3
  - @landing-ui/popover@2.2.0-beta.4
  - @landing-ui/aria-utils@2.1.0-beta.3
  - @landing-ui/react-utils@2.0.18-beta.3
  - @landing-ui/shared-utils@2.0.9-beta.3

## 2.2.0-beta.3

### Patch Changes

- [#4008](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/4008) [`7c1c0dd8f`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/7c1c0dd8fef3ea72996c1095b919574c4b7f9b89) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - React 19 added to peerDeps

- Updated dependencies [[`7c1c0dd8f`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/7c1c0dd8fef3ea72996c1095b919574c4b7f9b89)]:
  - @landing-ui/menu@2.1.0-beta.2
  - @landing-ui/popover@2.2.0-beta.3
  - @landing-ui/aria-utils@2.1.0-beta.2
  - @landing-ui/react-utils@2.0.18-beta.2
  - @landing-ui/shared-utils@2.0.9-beta.2

## 2.2.0-beta.2

### Patch Changes

- Updated dependencies [[`563c1585a`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/563c1585a3c1a32e8272ec4641cfabeaaac3296c)]:
  - @landing-ui/popover@2.2.0-beta.2

## 2.2.0-beta.1

### Patch Changes

- [#3990](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/3990) [`cb5bc4c74`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/cb5bc4c74f00caaee80dca89c1f02038db315b85) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Beta 1

- Updated dependencies [[`cb5bc4c74`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/cb5bc4c74f00caaee80dca89c1f02038db315b85)]:
  - @landing-ui/menu@2.1.0-beta.1
  - @landing-ui/popover@2.2.0-beta.1
  - @landing-ui/aria-utils@2.1.0-beta.1
  - @landing-ui/react-utils@2.0.18-beta.1
  - @landing-ui/shared-utils@2.0.9-beta.1

## 2.2.0-beta.0

### Minor Changes

- [#3732](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/3732) [`67ea2f65e`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/67ea2f65e17f913bdffae4690586a6ae202c8f7d) Thanks [@ryo-manba](https://github.com/ryo-manba)! - update react-aria version

### Patch Changes

- [#3523](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/3523) [`3f0d81b56`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/3f0d81b560e7ef3eb315bd98407249c0eb4ed5eb) Thanks [@wingkwong](https://github.com/wingkwong)! - update `framer-motion` versions

- Updated dependencies [[`0cf91395c`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/0cf91395c7c66a69fb05c7fca4a30cbad9e1e0f8), [`781b85566`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/781b85566ee5eac3f505625462c4f5f14e36ed3a), [`67ea2f65e`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/67ea2f65e17f913bdffae4690586a6ae202c8f7d), [`38a54ab49`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/38a54ab497781e17799b37f0061ba50f2dc44e09), [`af3c4f706`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/af3c4f706bb88eae02eee594a6db68cdd33bbe88), [`ae73de1a6`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/ae73de1a61c26e78235ce2d4c38159d486b55d56), [`ad6393ab3`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/ad6393ab33362119203455ef5c8ffbfe1ffa96a1), [`3f0d81b56`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/3f0d81b560e7ef3eb315bd98407249c0eb4ed5eb), [`cb1b3135b`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/cb1b3135bc7e811c9c2e163d4778f9f6eb2ef8c8), [`a5cac4561`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/a5cac45619e529cf9850f02f416b6bc7cba77f3f), [`d90ad05b1`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/d90ad05b13b36617009cb0e5f57f299aa7bb7bd0), [`a0d7141db`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/a0d7141db314c6bea27df6b8beb15dae3b1bcb93), [`9f6839faf`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/9f6839faf9fe05c766571bcb71028bd3236d6e3a), [`2aebfcca5`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/2aebfcca5906fb72a7f751273b38e41a40dc16a3), [`3f0d81b56`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/3f0d81b560e7ef3eb315bd98407249c0eb4ed5eb), [`3f0d81b56`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/3f0d81b560e7ef3eb315bd98407249c0eb4ed5eb), [`8a33eabb2`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/8a33eabb2583202fcc8fbc33e8f2ed23bb45f1a4), [`559436d46`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/559436d462bdb8739d8c817d1aa98607969d8a07)]:
  - @landing-ui/theme@2.3.0-beta.0
  - @landing-ui/menu@2.1.0-beta.0
  - @landing-ui/popover@2.2.0-beta.0
  - @landing-ui/system@2.3.0-beta.0
  - @landing-ui/aria-utils@2.1.0-beta.0
  - @landing-ui/shared-utils@2.0.9-beta.0
  - @landing-ui/react-utils@2.0.18-beta.0

## 2.1.31

### Patch Changes

- [#3762](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/3762) [`8fecb5afa`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/8fecb5afa9aabe73e32243ca313f97856da8aa08) Thanks [@wingkwong](https://github.com/wingkwong)! - fixed `_a2.find` is not a function (#3761)

- [#3759](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/3759) [`229388422`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/2293884229541e363b1983fea88ba6e3bee6be14) Thanks [@wingkwong](https://github.com/wingkwong)! - rollback pr3467. rescheduled to v2.5.0.

- Updated dependencies [[`4c01d1824`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/4c01d1824d4dde22d89232968a3a4c48fe04678f), [`229388422`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/2293884229541e363b1983fea88ba6e3bee6be14)]:
  - @landing-ui/popover@2.1.29
  - @landing-ui/aria-utils@2.0.26
  - @landing-ui/menu@2.0.30

## 2.1.30

### Patch Changes

- [#3467](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/3467) [`123b7fbc9`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/123b7fbc9fb51613d7568572a00982ad230d02ae) Thanks [@chirokas](https://github.com/chirokas)! - Refactor overlays to reduce its complexity, while improving stability.

- [#2598](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/2598) [`4f8ae50cf`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/4f8ae50cf441da5b5685b6573714a3f7c9ab3ea2) Thanks [@gtoxlili](https://github.com/gtoxlili)! - fix(dropdown): respect closeOnSelect prop on DropdownItem (#2290)

- Updated dependencies [[`123b7fbc9`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/123b7fbc9fb51613d7568572a00982ad230d02ae), [`19c331be7`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/19c331be75f1d03048c7b2dc92c2c9b62865cc11), [`f36df4362`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/f36df4362f572e8e233d4357f43600265cd5b8d5)]:
  - @landing-ui/popover@2.1.28
  - @landing-ui/shared-utils@2.0.8
  - @landing-ui/menu@2.0.29
  - @landing-ui/react-utils@2.0.17

## 2.1.29

### Patch Changes

- [#3512](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/3512) [`2d2d300a1`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/2d2d300a12dbe20ca7ebd125daf3dce74efcbf34) Thanks [@wingkwong](https://github.com/wingkwong)! - fix conflicting versions in npm

- Updated dependencies [[`2d2d300a1`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/2d2d300a12dbe20ca7ebd125daf3dce74efcbf34)]:
  - @landing-ui/menu@2.0.28
  - @landing-ui/popover@2.1.27
  - @landing-ui/aria-utils@2.0.24
  - @landing-ui/react-utils@2.0.16
  - @landing-ui/shared-utils@2.0.7

## 2.1.28

### Patch Changes

- Updated dependencies []:
  - @landing-ui/menu@2.0.27
  - @landing-ui/popover@2.1.26
  - @landing-ui/aria-utils@2.0.23

## 2.1.27

### Patch Changes

- [#3336](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/3336) [`0cdfdb48b`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/0cdfdb48bcb7eecb752fc6a3033d3bdd2335872b) Thanks [@winchesHe](https://github.com/winchesHe)! - Fix onSelectionChange type incorrect (#2512)

- Updated dependencies [[`0cdfdb48b`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/0cdfdb48bcb7eecb752fc6a3033d3bdd2335872b), [`60bb09fe6`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/60bb09fe6455475a16225e776348e9acf0537f9b), [`0462dde0a`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/0462dde0a752e5ee5341c372834be5496296a6cc), [`f5d94f96e`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/f5d94f96e4cffed1d4aeef971c89f8d283effd49), [`444d320db`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/444d320dbc146399eb937c219ce983d427675425)]:
  - @landing-ui/menu@2.0.26
  - @landing-ui/aria-utils@2.0.22
  - @landing-ui/popover@2.1.25
  - @landing-ui/shared-utils@2.0.6
  - @landing-ui/react-utils@2.0.15

## 2.1.26

### Patch Changes

- [#3240](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/3240) [`47c2472fb`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/47c2472fb22bfe1c0c357b5ba12e5606eba0d65b) Thanks [@wingkwong](https://github.com/wingkwong)! - bump react-aria dependencies

- Updated dependencies [[`47c2472fb`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/47c2472fb22bfe1c0c357b5ba12e5606eba0d65b), [`47c2472fb`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/47c2472fb22bfe1c0c357b5ba12e5606eba0d65b), [`47c2472fb`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/47c2472fb22bfe1c0c357b5ba12e5606eba0d65b), [`b9bb06ff3`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/b9bb06ff37f99bfc438e848706ec79b4c7b7c5d3)]:
  - @landing-ui/popover@2.1.24
  - @landing-ui/aria-utils@2.0.21
  - @landing-ui/menu@2.0.25
  - @landing-ui/react-utils@2.0.14

## 2.1.25

### Patch Changes

- [#3119](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/3119) [`685995a12`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/685995a125cc3db26c6adb67ed9f7245b87e792a) Thanks [@wingkwong](https://github.com/wingkwong)! - bump `@react-aria/utils` version to `3.24.1` and bump `@react-types/shared` to `3.23.1`

- Updated dependencies [[`685995a12`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/685995a125cc3db26c6adb67ed9f7245b87e792a)]:
  - @landing-ui/menu@2.0.24
  - @landing-ui/popover@2.1.23
  - @landing-ui/aria-utils@2.0.20

## 2.1.24

### Patch Changes

- [#2854](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/2854) [`3b14c21e0`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/3b14c21e02fedf15d7d22e911109dac60c4e780e) Thanks [@wingkwong](https://github.com/wingkwong)! - Revise popover-based focus behaviours (#2849, #2834, #2779, #2962, #2872, #2974, #1920, #1287, #3060)

- [#2953](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/2953) [`c8f792ccd`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/c8f792ccd78a80000e6f5b15e6f22cac947fd531) Thanks [@ryo-manba](https://github.com/ryo-manba)! - Fix update type definition to prevent primitive values as items (#2938)

- [#2970](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/2970) [`7df2c71ec`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/7df2c71ecc5f06d60807b6b3502d3a118080a0d5) Thanks [@wingkwong](https://github.com/wingkwong)! - Focus on the first item when pressing Space / Enter key on dropdown menu open (#2863)

- [#2929](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/2929) [`422770cc6`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/422770cc6bcdd1d4c51257654ab718f3c19d6cb2) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Add support for disabling the animations globally.

- Updated dependencies [[`3b14c21e0`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/3b14c21e02fedf15d7d22e911109dac60c4e780e), [`c8f792ccd`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/c8f792ccd78a80000e6f5b15e6f22cac947fd531), [`7df2c71ec`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/7df2c71ecc5f06d60807b6b3502d3a118080a0d5), [`422770cc6`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/422770cc6bcdd1d4c51257654ab718f3c19d6cb2)]:
  - @landing-ui/popover@2.1.22
  - @landing-ui/aria-utils@2.0.19
  - @landing-ui/menu@2.0.23

## 2.1.23

### Patch Changes

- Updated dependencies []:
  - @landing-ui/popover@2.1.21
  - @landing-ui/menu@2.0.22

## 2.1.22

### Patch Changes

- [#2784](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/2784) [`183a4a6cf`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/183a4a6cfda193a076a4a30550ab93b72d51002d) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix `isDisabled` prop warning on NextUI components that don't support this property, it is also fixed for non-NextUI components.

- Updated dependencies [[`183a4a6cf`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/183a4a6cfda193a076a4a30550ab93b72d51002d), [`eccc2f2f3`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/eccc2f2f3d856eefb2cc7c07b94e1c4cefd4d7d0)]:
  - @landing-ui/popover@2.1.20
  - @landing-ui/react-utils@2.0.13
  - @landing-ui/menu@2.0.21

## 2.1.21

### Patch Changes

- Updated dependencies [[`9e5dd8ce3`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/9e5dd8ce37c94c9ca1ba7b2049a6e55f1803fee9)]:
  - @landing-ui/popover@2.1.19

## 2.1.20

### Patch Changes

- [#2746](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/2746) [`6b56e43a3`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/6b56e43a350d045c36eb9983c7f48ba61db7cdd2) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix #2743 #2751 internal react-aria use-menu hooks implemented to pass down the press events and control the pressUp one

- Updated dependencies [[`6b56e43a3`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/6b56e43a350d045c36eb9983c7f48ba61db7cdd2), [`f89356691`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/f89356691cecb8e54f5f820b2b4491537e7c11f3)]:
  - @landing-ui/menu@2.0.20
  - @landing-ui/popover@2.1.18

## 2.1.19

### Patch Changes

- Updated dependencies []:
  - @landing-ui/menu@2.0.19
  - @landing-ui/popover@2.1.17
  - @landing-ui/react-utils@2.0.12

## 2.1.18

### Patch Changes

- [#2618](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/2618) [`dc0bcf13a`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/dc0bcf13a5e9aa0450938bcca47cd4c696066f14) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - v2.3.0

- [#2618](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/2618) [`dc0bcf13a`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/dc0bcf13a5e9aa0450938bcca47cd4c696066f14) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fixed the issue where only two keyframes were supported with spring and inertia animations.

- [#2618](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/2618) [`dc0bcf13a`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/dc0bcf13a5e9aa0450938bcca47cd4c696066f14) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - - Calendar component added

  - objectToDeps function applied all across components
  - `useMeasure` hook added
  - `useIntersectionObserver` hook added
  - `framer-transitions` renamed to `framer-utils`
  - `ResizablePanel` component added to `framer-utils`
  - `test-utils` updated

- [#2450](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/2450) [`0a9982d3e`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/0a9982d3efe6ac8dfc25438f21598c8fe53de4db) Thanks [@wingkwong](https://github.com/wingkwong)! - fixed getMenuTriggerProps mergeProps (#2448)

- [#2458](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/2458) [`7263daca0`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/7263daca08674338eb28529315070337ba0dfc17) Thanks [@wingkwong](https://github.com/wingkwong)! - fix(autocomplete): support isReadOnly for dynamic collections in Autocomplete

- Updated dependencies [[`dc0bcf13a`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/dc0bcf13a5e9aa0450938bcca47cd4c696066f14), [`dc0bcf13a`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/dc0bcf13a5e9aa0450938bcca47cd4c696066f14), [`dc0bcf13a`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/dc0bcf13a5e9aa0450938bcca47cd4c696066f14), [`a05aef0ac`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/a05aef0acb5a7b000c8131e8ba4f50f0adec01e5), [`2b9f89023`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/2b9f89023ac087016083dcc205703ae1b2bc9cb8), [`c5049edfd`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/c5049edfde7edaee2081d70e581739be9dcae2f9), [`8761168d3`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/8761168d3459cd83ce571f4e65eb8ea6db8516ef), [`eb51bf226`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/eb51bf226170e4bb37ae30990d1c3aa26d8c504b), [`7263daca0`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/7263daca08674338eb28529315070337ba0dfc17), [`2894aecca`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/2894aecca1a2ef0dfb3066b9b8df24ce48c99dae)]:
  - @landing-ui/menu@2.0.18
  - @landing-ui/popover@2.1.16
  - @landing-ui/react-utils@2.0.11
  - @landing-ui/shared-utils@2.0.5

## 2.1.17

### Patch Changes

- [#2435](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/2435) [`9b27da544`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/9b27da544e950cdb2bccd2d1a57ead772fd10dc1) Thanks [@kuri-sun](https://github.com/kuri-sun)! - Fixed the bug: isDisabled does not disable dropdown

- Updated dependencies [[`a235e324b`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/a235e324b9ee0c7d4f6af23b086860ac112ff633), [`01aedcf09`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/01aedcf09b63daafef9ff5e0465040c0c91c809e)]:
  - @landing-ui/popover@2.1.15
  - @landing-ui/menu@2.0.17

## 2.1.16

### Patch Changes

- Updated dependencies []:
  - @landing-ui/menu@2.0.17
  - @landing-ui/popover@2.1.14

## 2.1.15

### Patch Changes

- Updated dependencies []:
  - @landing-ui/menu@2.0.16
  - @landing-ui/popover@2.1.13

## 2.1.14

### Patch Changes

- Updated dependencies [[`135cc21e6`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/135cc21e6f0f2bee1f19e7e5799b6cea8179b7f5)]:
  - @landing-ui/menu@2.0.15
  - @landing-ui/popover@2.1.12

## 2.1.13

### Patch Changes

- [#1877](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/1877) [`44ed1056e`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/44ed1056e717c56633f60cf289f78e9c7b83b648) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Peer dependencies updated, changeset config changed to update peer dependencies only when out of range

- Updated dependencies [[`44ed1056e`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/44ed1056e717c56633f60cf289f78e9c7b83b648)]:
  - @landing-ui/popover@2.1.12
  - @landing-ui/menu@2.0.14

## 2.1.12

### Patch Changes

- [#1874](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/1874) [`38af48faf`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/38af48faf5b62d2f81f2402f3d83d78991eb46e0) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Peer dependencies updated to avoid the peer conflicts issue.

- Updated dependencies [[`38af48faf`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/38af48faf5b62d2f81f2402f3d83d78991eb46e0)]:
  - @landing-ui/popover@2.1.11
  - @landing-ui/menu@2.0.13
  - @landing-ui/system@2.0.12

## 2.1.11

### Patch Changes

- [`25e86fb41`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/25e86fb41770d3cdae6dfdb79306b78fa02d8187) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - New version v2.2.0

- Updated dependencies [[`25e86fb41`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/25e86fb41770d3cdae6dfdb79306b78fa02d8187)]:
  - @landing-ui/menu@2.0.12
  - @landing-ui/popover@2.1.10
  - @landing-ui/system@2.0.11
  - @landing-ui/theme@2.1.10
  - @landing-ui/react-utils@2.0.10
  - @landing-ui/shared-utils@2.0.4

## 2.1.10

### Patch Changes

- Updated dependencies [[`425a034bc`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/425a034bca4aa5a86cfe4bc47c084366a7ad7e87)]:
  - @landing-ui/theme@2.1.9
  - @landing-ui/popover@2.1.9
  - @landing-ui/system@2.0.10
  - @landing-ui/menu@2.0.11
  - @landing-ui/react-utils@2.0.9

## 2.1.9

### Patch Changes

- [#1600](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/1600) [`b1b30b797`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/b1b30b7976f1d6652808fbf12ffde044f0861572) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix npm deploy

- Updated dependencies [[`b1b30b797`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/b1b30b7976f1d6652808fbf12ffde044f0861572)]:
  - @landing-ui/menu@2.0.10
  - @landing-ui/popover@2.1.8
  - @landing-ui/system@2.0.9
  - @landing-ui/theme@2.1.8
  - @landing-ui/react-utils@2.0.8
  - @landing-ui/shared-utils@2.0.3

## 2.1.8

### Patch Changes

- [#1589](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/1589) [`1612532ee`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/1612532eeeabbc49165546b1a2e7aebf89e7a1c2) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - React aria packages upgraded

- Updated dependencies [[`a3be419cb`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/a3be419cb3c693ae8cace15f9a863274d759ddb1), [`5c30e0481`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/5c30e04811ef9f973d6b59107c909db72d9876b5), [`1612532ee`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/1612532eeeabbc49165546b1a2e7aebf89e7a1c2)]:
  - @landing-ui/theme@2.1.7
  - @landing-ui/popover@2.1.7
  - @landing-ui/menu@2.0.9
  - @landing-ui/system@2.0.8

## 2.1.7

### Patch Changes

- Updated dependencies [[`7c8341035`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/7c8341035dbdd120cd78221b3cabab2e40e7478d)]:
  - @landing-ui/theme@2.1.6
  - @landing-ui/menu@2.0.8
  - @landing-ui/popover@2.1.6

## 2.1.6

### Patch Changes

- Updated dependencies [[`d61428d9e`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/d61428d9e6c1c0590593fb1f0136e226051b7e23), [`4db10a47e`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/4db10a47e96ad8315b5b96c2ff15574ac0fdeecc)]:
  - @landing-ui/theme@2.1.5
  - @landing-ui/system@2.0.7
  - @landing-ui/menu@2.0.7
  - @landing-ui/popover@2.1.5

## 2.1.5

### Patch Changes

- Updated dependencies [[`043b8420c`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/043b8420cfb659cbb6bb36404807ec3cc8ac8592), [`641bf0885`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/641bf0885b6af2d7f36f27d83716a441975a5ca5)]:
  - @landing-ui/theme@2.1.4
  - @landing-ui/system@2.0.6
  - @landing-ui/popover@2.1.4
  - @landing-ui/menu@2.0.6

## 2.1.4

### Patch Changes

- Updated dependencies [[`5702287e5`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/5702287e5622a8f0a0326c7cc0c200808c7971a8)]:
  - @landing-ui/theme@2.1.3
  - @landing-ui/menu@2.0.5
  - @landing-ui/popover@2.1.3

## 2.1.3

### Patch Changes

- Updated dependencies [[`904f53877`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/904f5387793cf8cc594d4ff8c32e378439a8e4fa)]:
  - @landing-ui/menu@2.0.4

## 2.1.2

### Patch Changes

- [#1458](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/1458) [`4e94c115`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/4e94c115281c2774424d687877e036a9af1bce01) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix dropdown trigger events and popover arrow styles

- Updated dependencies [[`4e94c115`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/4e94c115281c2774424d687877e036a9af1bce01)]:
  - @landing-ui/popover@2.1.2
  - @landing-ui/menu@2.0.3
  - @landing-ui/theme@2.1.2

## 2.1.1

### Patch Changes

- Updated dependencies [[`cc839cdd`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/cc839cdd1fd54931bfba137e2f9b5e8007a7e47d)]:
  - @landing-ui/theme@2.1.1
  - @landing-ui/menu@2.0.2
  - @landing-ui/popover@2.1.1

## 2.1.0

### Minor Changes

- [#1313](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/1313) [`baec5502`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/baec55029de7f17ba84d3e6c8c98358fd1f2695e) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - New components:

  - Select
  - Listbox
  - ScrollShadow

### Patch Changes

- Updated dependencies [[`baec5502`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/baec55029de7f17ba84d3e6c8c98358fd1f2695e)]:
  - @landing-ui/popover@2.1.0
  - @landing-ui/theme@2.1.0
  - @landing-ui/menu@2.0.1
  - @landing-ui/react-utils@2.0.7

## 2.0.13

### Patch Changes

- Updated dependencies [[`6e7e834c2`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/6e7e834c2dc14c21b087da792c0576ab464a4a4a)]:
  - @landing-ui/popover@2.0.12

## 2.0.12

### Patch Changes

- Updated dependencies [[`406336269`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/40633626991d11f251619508f151dd7f435bda25)]:
  - @landing-ui/popover@2.0.11
  - @landing-ui/divider@2.0.10
  - @landing-ui/react-utils@2.0.6

## 2.0.11

### Patch Changes

- Updated dependencies [[`d0341020`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/d0341020e6d865ad3f0d3646fa70a24de75a722b)]:
  - @landing-ui/theme@2.0.5
  - @landing-ui/divider@2.0.9
  - @landing-ui/popover@2.0.10

## 2.0.10

### Patch Changes

- [#1377](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/1377) [`fd4e01dc`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/fd4e01dcfa5039e363089ada2bd18d7f57ef2d42) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - fix #1376 Dropdown item spread key warning

## 2.0.9

### Patch Changes

- Updated dependencies []:
  - @landing-ui/divider@2.0.8
  - @landing-ui/react-utils@2.0.5
  - @landing-ui/popover@2.0.9

## 2.0.8

### Patch Changes

- [#1359](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/1359) [`a30cec48`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/a30cec4810988fb1962f3a61e0fc0362de08b171) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - \n

  - react-aria packages upgraded to the latest version
  - image storybooks fixed
  - other bug fixes..

- Updated dependencies [[`a30cec48`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/a30cec4810988fb1962f3a61e0fc0362de08b171)]:
  - @landing-ui/aria-utils@2.0.5
  - @landing-ui/use-is-mobile@2.0.3
  - @landing-ui/divider@2.0.7
  - @landing-ui/popover@2.0.8
  - @landing-ui/system@2.0.5

## 2.0.7

### Patch Changes

- Updated dependencies [[`710395f3`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/710395f3a2ca44238332237a49e948c933abe63d)]:
  - @landing-ui/system@2.0.4
  - @landing-ui/popover@2.0.7
  - @landing-ui/aria-utils@2.0.4

## 2.0.6

### Patch Changes

- Updated dependencies []:
  - @landing-ui/divider@2.0.6
  - @landing-ui/react-utils@2.0.4
  - @landing-ui/popover@2.0.6

## 2.0.5

### Patch Changes

- Updated dependencies []:
  - @landing-ui/divider@2.0.5
  - @landing-ui/react-utils@2.0.3
  - @landing-ui/popover@2.0.5

## 2.0.4

### Patch Changes

- [#1301](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/1301) [`d794225c`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/d794225cb75121db3a72f430739b4eaacd1cf8b7) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Plugin types adapted to work with latest version of postcss

- Updated dependencies [[`d794225c`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/d794225cb75121db3a72f430739b4eaacd1cf8b7)]:
  - @landing-ui/divider@2.0.4
  - @landing-ui/popover@2.0.4
  - @landing-ui/theme@2.0.4

## 2.0.3

### Patch Changes

- [#1289](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/1289) [`eefda8d6`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/eefda8d6e2088526e0dbb2026d807b53d2a97782) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - - "use client" directive removed from components that didn't need it

  - packages adapted to support RSC imports
  - filterDomProps function was modified to enable/disabled it

- [`e3e13a09`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/e3e13a095f2347ff279c85e6a5d3798f36c6533f) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - New package created to exports system RSC-compatible functions
  Component exports changed to named exports
- Updated dependencies [[`eefda8d6`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/eefda8d6e2088526e0dbb2026d807b53d2a97782), [`e3e13a09`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/e3e13a095f2347ff279c85e6a5d3798f36c6533f)]:
  - @landing-ui/react-utils@2.0.2
  - @landing-ui/divider@2.0.3
  - @landing-ui/system@2.0.3
  - @landing-ui/popover@2.0.3
  - @landing-ui/theme@2.0.3
  - @landing-ui/use-is-mobile@2.0.2
  - @landing-ui/aria-utils@2.0.3
  - @landing-ui/shared-utils@2.0.2

## 2.0.2

### Patch Changes

- [`459ac5ed`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/459ac5ed4537942517803ba14129226a791d6feb) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - - Modal

  Outside scroll fixed on mobile devices

  - Dropdown

  Next.js key destructuring warning fixed

- Updated dependencies [[`459ac5ed`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/459ac5ed4537942517803ba14129226a791d6feb)]:
  - @landing-ui/theme@2.0.2
  - @landing-ui/divider@2.0.2
  - @landing-ui/popover@2.0.2
  - @landing-ui/system@2.0.2
  - @landing-ui/aria-utils@2.0.2

## 2.0.1

### Patch Changes

- [`e940ec06`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/e940ec06ac5e46340d5956fb7c455a6ab3de3140) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Introducing NextUI v2.0

- [`e940ec06`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/e940ec06ac5e46340d5956fb7c455a6ab3de3140) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Introducing v2 - Readmes updated

- Updated dependencies [[`e940ec06`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/e940ec06ac5e46340d5956fb7c455a6ab3de3140), [`e940ec06`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/e940ec06ac5e46340d5956fb7c455a6ab3de3140)]:
  - @landing-ui/shared-utils@2.0.1
  - @landing-ui/react-utils@2.0.1
  - @landing-ui/aria-utils@2.0.1
  - @landing-ui/use-is-mobile@2.0.1
  - @landing-ui/divider@2.0.1
  - @landing-ui/popover@2.0.1
  - @landing-ui/system@2.0.1
  - @landing-ui/theme@2.0.1
