# @nextui-org/popover

## 2.3.7

### Patch Changes

- Updated dependencies [[`78c0928`](https://github.com/nextui-org/nextui/commit/78c09280e30113bd648057ad64ad6198d1e5d58f)]:
  - @nextui-org/use-aria-button@2.2.3
  - @nextui-org/aria-utils@2.2.5
  - @nextui-org/button@2.2.7

## 2.3.6

### Patch Changes

- Updated dependencies [[`5598806`](https://github.com/nextui-org/nextui/commit/5598806216166dc9fff36cafd9112412486b747f)]:
  - @nextui-org/button@2.2.6

## 2.3.5

### Patch Changes

- Updated dependencies [[`dfefdd6`](https://github.com/nextui-org/nextui/commit/dfefdd6250eb81ae653e611a8dff12b2ae29a09c)]:
  - @nextui-org/button@2.2.5

## 2.3.4

### Patch Changes

- [#4258](https://github.com/nextui-org/nextui/pull/4258) [`1031e98`](https://github.com/nextui-org/nextui/commit/1031e985b71e69b8a7189ea049b9616257f820b3) Thanks [@wingkwong](https://github.com/wingkwong)! - sync with upstream RA versions

- Updated dependencies [[`1031e98`](https://github.com/nextui-org/nextui/commit/1031e985b71e69b8a7189ea049b9616257f820b3)]:
  - @nextui-org/use-aria-button@2.2.2
  - @nextui-org/aria-utils@2.2.4
  - @nextui-org/button@2.2.4
  - @nextui-org/framer-utils@2.1.4

## 2.3.3

### Patch Changes

- [#4255](https://github.com/nextui-org/nextui/pull/4255) [`6a94a12`](https://github.com/nextui-org/nextui/commit/6a94a125d4836b0a18d9cd2cb521c85a6bfa9050) Thanks [@wingkwong](https://github.com/wingkwong)! - fixed incorrect peerDependencies for theme and system package (#4254)

- Updated dependencies [[`6a94a12`](https://github.com/nextui-org/nextui/commit/6a94a125d4836b0a18d9cd2cb521c85a6bfa9050)]:
  - @nextui-org/button@2.2.3
  - @nextui-org/aria-utils@2.2.3
  - @nextui-org/framer-utils@2.1.3

## 2.3.2

### Patch Changes

- [#4247](https://github.com/nextui-org/nextui/pull/4247) [`551ab18`](https://github.com/nextui-org/nextui/commit/551ab184060b24b2c3a89598f84d4c18599649d0) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix peerDeps & core package client on export \*

- Updated dependencies [[`551ab18`](https://github.com/nextui-org/nextui/commit/551ab184060b24b2c3a89598f84d4c18599649d0)]:
  - @nextui-org/button@2.2.2
  - @nextui-org/aria-utils@2.2.2
  - @nextui-org/framer-utils@2.1.2

## 2.3.1

### Patch Changes

- [`d6eee4a`](https://github.com/nextui-org/nextui/commit/d6eee4a8767556152f47f06dcf04940951abc5af) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - v2.6.2

- Updated dependencies [[`d6eee4a`](https://github.com/nextui-org/nextui/commit/d6eee4a8767556152f47f06dcf04940951abc5af)]:
  - @nextui-org/button@2.2.1
  - @nextui-org/use-aria-button@2.2.1
  - @nextui-org/use-safe-layout-effect@2.1.1
  - @nextui-org/aria-utils@2.2.1
  - @nextui-org/dom-animation@2.1.1
  - @nextui-org/framer-utils@2.1.1
  - @nextui-org/react-utils@2.1.1
  - @nextui-org/shared-utils@2.1.1

## 2.3.0

### Minor Changes

- [`5786897`](https://github.com/nextui-org/nextui/commit/5786897b9950d95c12351dacd2fb41bb1e298201) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - This release includes several improvements and bug fixes:

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

- [#4206](https://github.com/nextui-org/nextui/pull/4206) [`44958bf`](https://github.com/nextui-org/nextui/commit/44958bf91a1677becd5e9f3c420b7956cf0244d8) Thanks [@vinroger](https://github.com/vinroger)! - Fix typecheck

- [#4226](https://github.com/nextui-org/nextui/pull/4226) [`6c0213d`](https://github.com/nextui-org/nextui/commit/6c0213dfc805aa3c793763c0b25f53b2b80c24dc) Thanks [@wingkwong](https://github.com/wingkwong)! - bump `@react-aria/utils` version (#4212)

- [#4198](https://github.com/nextui-org/nextui/pull/4198) [`ffb1e55`](https://github.com/nextui-org/nextui/commit/ffb1e554f7d6b5b1ede66d0838b3b1edeeccdf6b) Thanks [@winchesHe](https://github.com/winchesHe)! - Fix forwardRef render functions not using ref

- Updated dependencies [[`6c0213d`](https://github.com/nextui-org/nextui/commit/6c0213dfc805aa3c793763c0b25f53b2b80c24dc), [`5786897`](https://github.com/nextui-org/nextui/commit/5786897b9950d95c12351dacd2fb41bb1e298201)]:
  - @nextui-org/use-aria-button@2.2.0
  - @nextui-org/aria-utils@2.2.0
  - @nextui-org/button@2.2.0
  - @nextui-org/use-safe-layout-effect@2.1.0
  - @nextui-org/dom-animation@2.1.0
  - @nextui-org/framer-utils@2.1.0
  - @nextui-org/react-utils@2.1.0
  - @nextui-org/shared-utils@2.1.0

## 2.2.0-beta.12

### Patch Changes

- Updated dependencies [[`17bf65799`](https://github.com/nextui-org/nextui/commit/17bf65799c39c2ee44ea9c0b23aa80315b2a5083)]:
  - @nextui-org/button@2.1.0-beta.10
  - @nextui-org/aria-utils@2.1.0-beta.11
  - @nextui-org/framer-utils@2.0.26-beta.11

## 2.2.0-beta.11

### Patch Changes

- [`9869f2b91`](https://github.com/nextui-org/nextui/commit/9869f2b91d0829f9c7f0500ba05745707820bf27) Thanks [@wingkwong](https://github.com/wingkwong)! - bump version

- Updated dependencies [[`9869f2b91`](https://github.com/nextui-org/nextui/commit/9869f2b91d0829f9c7f0500ba05745707820bf27)]:
  - @nextui-org/button@2.1.0-beta.9
  - @nextui-org/use-aria-button@2.1.0-beta.8
  - @nextui-org/use-safe-layout-effect@2.0.7-beta.5
  - @nextui-org/aria-utils@2.1.0-beta.10
  - @nextui-org/dom-animation@2.0.1-beta.7
  - @nextui-org/framer-utils@2.0.26-beta.10
  - @nextui-org/react-utils@2.0.18-beta.8
  - @nextui-org/shared-utils@2.0.9-beta.8

## 2.2.0-beta.10

### Patch Changes

- [#3036](https://github.com/nextui-org/nextui/pull/3036) [`eafdb7d47`](https://github.com/nextui-org/nextui/commit/eafdb7d475a7fcaa7671af77e86fcdf62f14ae00) Thanks [@ryo-manba](https://github.com/ryo-manba)! - update react-aria version

- Updated dependencies [[`eafdb7d47`](https://github.com/nextui-org/nextui/commit/eafdb7d475a7fcaa7671af77e86fcdf62f14ae00)]:
  - @nextui-org/button@2.1.0-beta.8
  - @nextui-org/use-aria-button@2.1.0-beta.7
  - @nextui-org/aria-utils@2.1.0-beta.9
  - @nextui-org/framer-utils@2.0.26-beta.9

## 2.2.0-beta.9

### Patch Changes

- Updated dependencies []:
  - @nextui-org/button@2.1.0-beta.7
  - @nextui-org/aria-utils@2.1.0-beta.8
  - @nextui-org/framer-utils@2.0.26-beta.8

## 2.2.0-beta.8

### Patch Changes

- [#4092](https://github.com/nextui-org/nextui/pull/4092) [`528668db8`](https://github.com/nextui-org/nextui/commit/528668db85b98b46473cb1e214780b7468cdadba) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Test new runner

- Updated dependencies [[`528668db8`](https://github.com/nextui-org/nextui/commit/528668db85b98b46473cb1e214780b7468cdadba)]:
  - @nextui-org/button@2.1.0-beta.7
  - @nextui-org/use-aria-button@2.1.0-beta.6
  - @nextui-org/use-safe-layout-effect@2.0.7-beta.4
  - @nextui-org/aria-utils@2.1.0-beta.7
  - @nextui-org/dom-animation@2.0.1-beta.6
  - @nextui-org/framer-utils@2.0.26-beta.7
  - @nextui-org/react-utils@2.0.18-beta.7
  - @nextui-org/shared-utils@2.0.9-beta.7

## 2.2.0-beta.7

### Patch Changes

- [#4086](https://github.com/nextui-org/nextui/pull/4086) [`f69fe47b5`](https://github.com/nextui-org/nextui/commit/f69fe47b5b8f6f3a77a7a8c20d8715263fa32acb) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Pnpm clean

- Updated dependencies [[`f69fe47b5`](https://github.com/nextui-org/nextui/commit/f69fe47b5b8f6f3a77a7a8c20d8715263fa32acb)]:
  - @nextui-org/button@2.1.0-beta.6
  - @nextui-org/use-aria-button@2.1.0-beta.5
  - @nextui-org/use-safe-layout-effect@2.0.7-beta.3
  - @nextui-org/aria-utils@2.1.0-beta.6
  - @nextui-org/dom-animation@2.0.1-beta.5
  - @nextui-org/framer-utils@2.0.26-beta.6
  - @nextui-org/react-utils@2.0.18-beta.6
  - @nextui-org/shared-utils@2.0.9-beta.6

## 2.2.0-beta.6

### Patch Changes

- [#4083](https://github.com/nextui-org/nextui/pull/4083) [`35058262c`](https://github.com/nextui-org/nextui/commit/35058262c61628fb42907f529c4417886aa12bb2) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix build

- Updated dependencies [[`35058262c`](https://github.com/nextui-org/nextui/commit/35058262c61628fb42907f529c4417886aa12bb2)]:
  - @nextui-org/button@2.1.0-beta.5
  - @nextui-org/use-aria-button@2.1.0-beta.4
  - @nextui-org/use-safe-layout-effect@2.0.7-beta.2
  - @nextui-org/aria-utils@2.1.0-beta.5
  - @nextui-org/dom-animation@2.0.1-beta.4
  - @nextui-org/framer-utils@2.0.26-beta.5
  - @nextui-org/react-utils@2.0.18-beta.5
  - @nextui-org/shared-utils@2.0.9-beta.5

## 2.2.0-beta.5

### Patch Changes

- Updated dependencies [[`5339b2571`](https://github.com/nextui-org/nextui/commit/5339b2571e6d73ca6efe2acd34d88669419db9f7)]:
  - @nextui-org/shared-utils@2.0.9-beta.4
  - @nextui-org/button@2.1.0-beta.4
  - @nextui-org/aria-utils@2.1.0-beta.4
  - @nextui-org/framer-utils@2.0.26-beta.4
  - @nextui-org/react-utils@2.0.18-beta.4

## 2.2.0-beta.4

### Patch Changes

- [#4010](https://github.com/nextui-org/nextui/pull/4010) [`ef432eb53`](https://github.com/nextui-org/nextui/commit/ef432eb539714fded6cab86a2185956fb103e0df) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - framer-motion alpha version added

- Updated dependencies [[`ef432eb53`](https://github.com/nextui-org/nextui/commit/ef432eb539714fded6cab86a2185956fb103e0df)]:
  - @nextui-org/button@2.1.0-beta.3
  - @nextui-org/use-aria-button@2.1.0-beta.3
  - @nextui-org/use-safe-layout-effect@2.0.7-beta.1
  - @nextui-org/aria-utils@2.1.0-beta.3
  - @nextui-org/dom-animation@2.0.1-beta.3
  - @nextui-org/framer-utils@2.0.26-beta.3
  - @nextui-org/react-utils@2.0.18-beta.3
  - @nextui-org/shared-utils@2.0.9-beta.3

## 2.2.0-beta.3

### Patch Changes

- [#4008](https://github.com/nextui-org/nextui/pull/4008) [`7c1c0dd8f`](https://github.com/nextui-org/nextui/commit/7c1c0dd8fef3ea72996c1095b919574c4b7f9b89) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - React 19 added to peerDeps

- Updated dependencies [[`7c1c0dd8f`](https://github.com/nextui-org/nextui/commit/7c1c0dd8fef3ea72996c1095b919574c4b7f9b89)]:
  - @nextui-org/button@2.1.0-beta.2
  - @nextui-org/use-aria-button@2.1.0-beta.2
  - @nextui-org/use-safe-layout-effect@2.0.7-beta.0
  - @nextui-org/aria-utils@2.1.0-beta.2
  - @nextui-org/dom-animation@2.0.1-beta.2
  - @nextui-org/framer-utils@2.0.26-beta.2
  - @nextui-org/react-utils@2.0.18-beta.2
  - @nextui-org/shared-utils@2.0.9-beta.2

## 2.2.0-beta.2

### Patch Changes

- [#4003](https://github.com/nextui-org/nextui/pull/4003) [`563c1585a`](https://github.com/nextui-org/nextui/commit/563c1585a3c1a32e8272ec4641cfabeaaac3296c) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix: element.ref was removed in React 19

## 2.2.0-beta.1

### Patch Changes

- [#3990](https://github.com/nextui-org/nextui/pull/3990) [`cb5bc4c74`](https://github.com/nextui-org/nextui/commit/cb5bc4c74f00caaee80dca89c1f02038db315b85) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Beta 1

- Updated dependencies [[`cb5bc4c74`](https://github.com/nextui-org/nextui/commit/cb5bc4c74f00caaee80dca89c1f02038db315b85)]:
  - @nextui-org/button@2.1.0-beta.1
  - @nextui-org/use-aria-button@2.1.0-beta.1
  - @nextui-org/aria-utils@2.1.0-beta.1
  - @nextui-org/dom-animation@2.0.1-beta.1
  - @nextui-org/framer-utils@2.0.26-beta.1
  - @nextui-org/react-utils@2.0.18-beta.1
  - @nextui-org/shared-utils@2.0.9-beta.1

## 2.2.0-beta.0

### Minor Changes

- [#3732](https://github.com/nextui-org/nextui/pull/3732) [`67ea2f65e`](https://github.com/nextui-org/nextui/commit/67ea2f65e17f913bdffae4690586a6ae202c8f7d) Thanks [@ryo-manba](https://github.com/ryo-manba)! - update react-aria version

### Patch Changes

- [#3595](https://github.com/nextui-org/nextui/pull/3595) [`9f6839faf`](https://github.com/nextui-org/nextui/commit/9f6839faf9fe05c766571bcb71028bd3236d6e3a) Thanks [@awesome-pro](https://github.com/awesome-pro)! - added `shouldCloseOnScroll` to control the popover closing on scroll (#3594)

- [#3523](https://github.com/nextui-org/nextui/pull/3523) [`3f0d81b56`](https://github.com/nextui-org/nextui/commit/3f0d81b560e7ef3eb315bd98407249c0eb4ed5eb) Thanks [@wingkwong](https://github.com/wingkwong)! - framer motion optimization (#3340)

- [#3523](https://github.com/nextui-org/nextui/pull/3523) [`3f0d81b56`](https://github.com/nextui-org/nextui/commit/3f0d81b560e7ef3eb315bd98407249c0eb4ed5eb) Thanks [@wingkwong](https://github.com/wingkwong)! - update `framer-motion` versions

- Updated dependencies [[`0cf91395c`](https://github.com/nextui-org/nextui/commit/0cf91395c7c66a69fb05c7fca4a30cbad9e1e0f8), [`781b85566`](https://github.com/nextui-org/nextui/commit/781b85566ee5eac3f505625462c4f5f14e36ed3a), [`67ea2f65e`](https://github.com/nextui-org/nextui/commit/67ea2f65e17f913bdffae4690586a6ae202c8f7d), [`38a54ab49`](https://github.com/nextui-org/nextui/commit/38a54ab497781e17799b37f0061ba50f2dc44e09), [`af3c4f706`](https://github.com/nextui-org/nextui/commit/af3c4f706bb88eae02eee594a6db68cdd33bbe88), [`ae73de1a6`](https://github.com/nextui-org/nextui/commit/ae73de1a61c26e78235ce2d4c38159d486b55d56), [`ad6393ab3`](https://github.com/nextui-org/nextui/commit/ad6393ab33362119203455ef5c8ffbfe1ffa96a1), [`3f0d81b56`](https://github.com/nextui-org/nextui/commit/3f0d81b560e7ef3eb315bd98407249c0eb4ed5eb), [`cb1b3135b`](https://github.com/nextui-org/nextui/commit/cb1b3135bc7e811c9c2e163d4778f9f6eb2ef8c8), [`a5cac4561`](https://github.com/nextui-org/nextui/commit/a5cac45619e529cf9850f02f416b6bc7cba77f3f), [`d90ad05b1`](https://github.com/nextui-org/nextui/commit/d90ad05b13b36617009cb0e5f57f299aa7bb7bd0), [`a0d7141db`](https://github.com/nextui-org/nextui/commit/a0d7141db314c6bea27df6b8beb15dae3b1bcb93), [`3f0d81b56`](https://github.com/nextui-org/nextui/commit/3f0d81b560e7ef3eb315bd98407249c0eb4ed5eb), [`3f0d81b56`](https://github.com/nextui-org/nextui/commit/3f0d81b560e7ef3eb315bd98407249c0eb4ed5eb), [`8a33eabb2`](https://github.com/nextui-org/nextui/commit/8a33eabb2583202fcc8fbc33e8f2ed23bb45f1a4), [`559436d46`](https://github.com/nextui-org/nextui/commit/559436d462bdb8739d8c817d1aa98607969d8a07)]:
  - @nextui-org/theme@2.3.0-beta.0
  - @nextui-org/button@2.1.0-beta.0
  - @nextui-org/system@2.3.0-beta.0
  - @nextui-org/use-aria-button@2.1.0-beta.0
  - @nextui-org/aria-utils@2.1.0-beta.0
  - @nextui-org/shared-utils@2.0.9-beta.0
  - @nextui-org/dom-animation@2.0.1-beta.0
  - @nextui-org/framer-utils@2.0.26-beta.0
  - @nextui-org/react-utils@2.0.18-beta.0

## 2.1.29

### Patch Changes

- [#3756](https://github.com/nextui-org/nextui/pull/3756) [`4c01d1824`](https://github.com/nextui-org/nextui/commit/4c01d1824d4dde22d89232968a3a4c48fe04678f) Thanks [@wingkwong](https://github.com/wingkwong)! - rollback PR3307. rescheduled to v2.5.0.

- [#3759](https://github.com/nextui-org/nextui/pull/3759) [`229388422`](https://github.com/nextui-org/nextui/commit/2293884229541e363b1983fea88ba6e3bee6be14) Thanks [@wingkwong](https://github.com/wingkwong)! - rollback pr3467. rescheduled to v2.5.0.

- Updated dependencies [[`229388422`](https://github.com/nextui-org/nextui/commit/2293884229541e363b1983fea88ba6e3bee6be14)]:
  - @nextui-org/aria-utils@2.0.26
  - @nextui-org/button@2.0.38

## 2.1.28

### Patch Changes

- [#3467](https://github.com/nextui-org/nextui/pull/3467) [`123b7fbc9`](https://github.com/nextui-org/nextui/commit/123b7fbc9fb51613d7568572a00982ad230d02ae) Thanks [@chirokas](https://github.com/chirokas)! - Refactor overlays to reduce its complexity, while improving stability.

- [#3307](https://github.com/nextui-org/nextui/pull/3307) [`19c331be7`](https://github.com/nextui-org/nextui/commit/19c331be75f1d03048c7b2dc92c2c9b62865cc11) Thanks [@chirokas](https://github.com/chirokas)! - Use `usePreventScroll` instead of `react-remove-scroll`; Add `shouldBlockScroll` prop to `Tooltip` (#3474).

- Updated dependencies [[`123b7fbc9`](https://github.com/nextui-org/nextui/commit/123b7fbc9fb51613d7568572a00982ad230d02ae), [`f36df4362`](https://github.com/nextui-org/nextui/commit/f36df4362f572e8e233d4357f43600265cd5b8d5)]:
  - @nextui-org/use-aria-overlay@2.0.1
  - @nextui-org/aria-utils@2.0.25
  - @nextui-org/shared-utils@2.0.8
  - @nextui-org/button@2.0.38
  - @nextui-org/framer-utils@2.0.25
  - @nextui-org/react-utils@2.0.17

## 2.1.27

### Patch Changes

- [#3512](https://github.com/nextui-org/nextui/pull/3512) [`2d2d300a1`](https://github.com/nextui-org/nextui/commit/2d2d300a12dbe20ca7ebd125daf3dce74efcbf34) Thanks [@wingkwong](https://github.com/wingkwong)! - fix conflicting versions in npm

- Updated dependencies [[`2d2d300a1`](https://github.com/nextui-org/nextui/commit/2d2d300a12dbe20ca7ebd125daf3dce74efcbf34)]:
  - @nextui-org/button@2.0.37
  - @nextui-org/use-aria-button@2.0.10
  - @nextui-org/use-safe-layout-effect@2.0.6
  - @nextui-org/aria-utils@2.0.24
  - @nextui-org/framer-utils@2.0.24
  - @nextui-org/react-utils@2.0.16
  - @nextui-org/shared-utils@2.0.7

## 2.1.26

### Patch Changes

- Updated dependencies []:
  - @nextui-org/button@2.0.36
  - @nextui-org/aria-utils@2.0.23
  - @nextui-org/framer-utils@2.0.23

## 2.1.25

### Patch Changes

- [#3311](https://github.com/nextui-org/nextui/pull/3311) [`0462dde0a`](https://github.com/nextui-org/nextui/commit/0462dde0a752e5ee5341c372834be5496296a6cc) Thanks [@wingkwong](https://github.com/wingkwong)! - add `disableDialogFocus` to free-solo-popover (#3225, #3124, #3203)

- [#3414](https://github.com/nextui-org/nextui/pull/3414) [`444d320db`](https://github.com/nextui-org/nextui/commit/444d320dbc146399eb937c219ce983d427675425) Thanks [@wingkwong](https://github.com/wingkwong)! - close popover on scroll (#3265)

- Updated dependencies [[`60bb09fe6`](https://github.com/nextui-org/nextui/commit/60bb09fe6455475a16225e776348e9acf0537f9b), [`f5d94f96e`](https://github.com/nextui-org/nextui/commit/f5d94f96e4cffed1d4aeef971c89f8d283effd49)]:
  - @nextui-org/aria-utils@2.0.22
  - @nextui-org/shared-utils@2.0.6
  - @nextui-org/button@2.0.35
  - @nextui-org/framer-utils@2.0.22
  - @nextui-org/react-utils@2.0.15

## 2.1.24

### Patch Changes

- [#3240](https://github.com/nextui-org/nextui/pull/3240) [`47c2472fb`](https://github.com/nextui-org/nextui/commit/47c2472fb22bfe1c0c357b5ba12e5606eba0d65b) Thanks [@wingkwong](https://github.com/wingkwong)! - Fix popover focus issue (#3171, #2992)

- [#3240](https://github.com/nextui-org/nextui/pull/3240) [`47c2472fb`](https://github.com/nextui-org/nextui/commit/47c2472fb22bfe1c0c357b5ba12e5606eba0d65b) Thanks [@wingkwong](https://github.com/wingkwong)! - remove `disableFocusManagement` from Overlay

- [#3240](https://github.com/nextui-org/nextui/pull/3240) [`47c2472fb`](https://github.com/nextui-org/nextui/commit/47c2472fb22bfe1c0c357b5ba12e5606eba0d65b) Thanks [@wingkwong](https://github.com/wingkwong)! - bump react-aria dependencies

- Updated dependencies [[`47c2472fb`](https://github.com/nextui-org/nextui/commit/47c2472fb22bfe1c0c357b5ba12e5606eba0d65b), [`47c2472fb`](https://github.com/nextui-org/nextui/commit/47c2472fb22bfe1c0c357b5ba12e5606eba0d65b), [`b9bb06ff3`](https://github.com/nextui-org/nextui/commit/b9bb06ff37f99bfc438e848706ec79b4c7b7c5d3)]:
  - @nextui-org/aria-utils@2.0.21
  - @nextui-org/button@2.0.34
  - @nextui-org/use-aria-button@2.0.9
  - @nextui-org/react-utils@2.0.14
  - @nextui-org/framer-utils@2.0.21

## 2.1.23

### Patch Changes

- [#3119](https://github.com/nextui-org/nextui/pull/3119) [`685995a12`](https://github.com/nextui-org/nextui/commit/685995a125cc3db26c6adb67ed9f7245b87e792a) Thanks [@wingkwong](https://github.com/wingkwong)! - bump `@react-aria/utils` version to `3.24.1` and bump `@react-types/shared` to `3.23.1`

- Updated dependencies [[`685995a12`](https://github.com/nextui-org/nextui/commit/685995a125cc3db26c6adb67ed9f7245b87e792a)]:
  - @nextui-org/button@2.0.33
  - @nextui-org/use-aria-button@2.0.8
  - @nextui-org/aria-utils@2.0.20
  - @nextui-org/framer-utils@2.0.20

## 2.1.22

### Patch Changes

- [#2854](https://github.com/nextui-org/nextui/pull/2854) [`3b14c21e0`](https://github.com/nextui-org/nextui/commit/3b14c21e02fedf15d7d22e911109dac60c4e780e) Thanks [@wingkwong](https://github.com/wingkwong)! - Revise popover-based focus behaviours (#2849, #2834, #2779, #2962, #2872, #2974, #1920, #1287, #3060)

- [#2929](https://github.com/nextui-org/nextui/pull/2929) [`422770cc6`](https://github.com/nextui-org/nextui/commit/422770cc6bcdd1d4c51257654ab718f3c19d6cb2) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Add support for disabling the animations globally.

- Updated dependencies [[`3b14c21e0`](https://github.com/nextui-org/nextui/commit/3b14c21e02fedf15d7d22e911109dac60c4e780e), [`422770cc6`](https://github.com/nextui-org/nextui/commit/422770cc6bcdd1d4c51257654ab718f3c19d6cb2)]:
  - @nextui-org/aria-utils@2.0.19
  - @nextui-org/button@2.0.32
  - @nextui-org/framer-utils@2.0.19

## 2.1.21

### Patch Changes

- Updated dependencies []:
  - @nextui-org/button@2.0.31

## 2.1.20

### Patch Changes

- [#2784](https://github.com/nextui-org/nextui/pull/2784) [`183a4a6cf`](https://github.com/nextui-org/nextui/commit/183a4a6cfda193a076a4a30550ab93b72d51002d) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix `isDisabled` prop warning on NextUI components that don't support this property, it is also fixed for non-NextUI components.

- Updated dependencies [[`eccc2f2f3`](https://github.com/nextui-org/nextui/commit/eccc2f2f3d856eefb2cc7c07b94e1c4cefd4d7d0)]:
  - @nextui-org/aria-utils@2.0.18
  - @nextui-org/framer-utils@2.0.18
  - @nextui-org/react-utils@2.0.13
  - @nextui-org/button@2.0.30

## 2.1.19

### Patch Changes

- [`9e5dd8ce3`](https://github.com/nextui-org/nextui/commit/9e5dd8ce37c94c9ca1ba7b2049a6e55f1803fee9) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix ref not beign passed

## 2.1.18

### Patch Changes

- [#2741](https://github.com/nextui-org/nextui/pull/2741) [`f89356691`](https://github.com/nextui-org/nextui/commit/f89356691cecb8e54f5f820b2b4491537e7c11f3) Thanks [@wingkwong](https://github.com/wingkwong)! - Fixes isDisabled prop on a DOM element

## 2.1.17

### Patch Changes

- Updated dependencies []:
  - @nextui-org/button@2.0.29
  - @nextui-org/aria-utils@2.0.17
  - @nextui-org/framer-utils@2.0.17
  - @nextui-org/react-utils@2.0.12

## 2.1.16

### Patch Changes

- [#2618](https://github.com/nextui-org/nextui/pull/2618) [`dc0bcf13a`](https://github.com/nextui-org/nextui/commit/dc0bcf13a5e9aa0450938bcca47cd4c696066f14) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - v2.3.0

- [#2618](https://github.com/nextui-org/nextui/pull/2618) [`dc0bcf13a`](https://github.com/nextui-org/nextui/commit/dc0bcf13a5e9aa0450938bcca47cd4c696066f14) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fixed the issue where only two keyframes were supported with spring and inertia animations.

- [#2618](https://github.com/nextui-org/nextui/pull/2618) [`dc0bcf13a`](https://github.com/nextui-org/nextui/commit/dc0bcf13a5e9aa0450938bcca47cd4c696066f14) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - - Calendar component added

  - objectToDeps function applied all across components
  - `useMeasure` hook added
  - `useIntersectionObserver` hook added
  - `framer-transitions` renamed to `framer-utils`
  - `ResizablePanel` component added to `framer-utils`
  - `test-utils` updated

- [#2494](https://github.com/nextui-org/nextui/pull/2494) [`a05aef0ac`](https://github.com/nextui-org/nextui/commit/a05aef0acb5a7b000c8131e8ba4f50f0adec01e5) Thanks [@wingkwong](https://github.com/wingkwong)! - fixed popover closing issue in autocomplete with open modal (#2475, #2082, #1987)

- [#2536](https://github.com/nextui-org/nextui/pull/2536) [`2b9f89023`](https://github.com/nextui-org/nextui/commit/2b9f89023ac087016083dcc205703ae1b2bc9cb8) Thanks [@wingkwong](https://github.com/wingkwong)! - revise shouldCloseOnInteractOutside for FreeSoloPopover

- [#2522](https://github.com/nextui-org/nextui/pull/2522) [`c5049edfd`](https://github.com/nextui-org/nextui/commit/c5049edfde7edaee2081d70e581739be9dcae2f9) Thanks [@wingkwong](https://github.com/wingkwong)! - Fixed unexpected props on a DOM element (#2474)

- [#2611](https://github.com/nextui-org/nextui/pull/2611) [`8761168d3`](https://github.com/nextui-org/nextui/commit/8761168d3459cd83ce571f4e65eb8ea6db8516ef) Thanks [@wingkwong](https://github.com/wingkwong)! - Fixed lazy motion forwardRef issue

- [#2616](https://github.com/nextui-org/nextui/pull/2616) [`eb51bf226`](https://github.com/nextui-org/nextui/commit/eb51bf226170e4bb37ae30990d1c3aa26d8c504b) Thanks [@wingkwong](https://github.com/wingkwong)! - Fixed incorrect level of m.div

- [#2458](https://github.com/nextui-org/nextui/pull/2458) [`7263daca0`](https://github.com/nextui-org/nextui/commit/7263daca08674338eb28529315070337ba0dfc17) Thanks [@wingkwong](https://github.com/wingkwong)! - fix(autocomplete): support isReadOnly for dynamic collections in Autocomplete

- [#2464](https://github.com/nextui-org/nextui/pull/2464) [`2894aecca`](https://github.com/nextui-org/nextui/commit/2894aecca1a2ef0dfb3066b9b8df24ce48c99dae) Thanks [@mezotv](https://github.com/mezotv)! - Changes the motion important to the more lightweight m component in framer motion to only load the required features.

- Updated dependencies [[`dc0bcf13a`](https://github.com/nextui-org/nextui/commit/dc0bcf13a5e9aa0450938bcca47cd4c696066f14), [`dc0bcf13a`](https://github.com/nextui-org/nextui/commit/dc0bcf13a5e9aa0450938bcca47cd4c696066f14)]:
  - @nextui-org/button@2.0.28
  - @nextui-org/use-aria-button@2.0.7
  - @nextui-org/aria-utils@2.0.16
  - @nextui-org/framer-utils@2.0.16
  - @nextui-org/react-utils@2.0.11
  - @nextui-org/shared-utils@2.0.5
  - @nextui-org/use-safe-layout-effect@2.0.5

## 2.1.15

### Patch Changes

- [#2390](https://github.com/nextui-org/nextui/pull/2390) [`a235e324b`](https://github.com/nextui-org/nextui/commit/a235e324b9ee0c7d4f6af23b086860ac112ff633) Thanks [@u3u](https://github.com/u3u)! - Add `updatePositionDeps` prop to popover component

- [#2032](https://github.com/nextui-org/nextui/pull/2032) [`01aedcf09`](https://github.com/nextui-org/nextui/commit/01aedcf09b63daafef9ff5e0465040c0c91c809e) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix #2025 isDismissable prop passed to the aria-popover hook.

- Updated dependencies []:
  - @nextui-org/button@2.0.27

## 2.1.14

### Patch Changes

- Updated dependencies []:
  - @nextui-org/button@2.0.26
  - @nextui-org/aria-utils@2.0.15
  - @nextui-org/framer-utils@2.0.15

## 2.1.13

### Patch Changes

- Updated dependencies []:
  - @nextui-org/button@2.0.25
  - @nextui-org/aria-utils@2.0.14
  - @nextui-org/framer-utils@2.0.14

## 2.1.12

### Patch Changes

- [#1877](https://github.com/nextui-org/nextui/pull/1877) [`44ed1056e`](https://github.com/nextui-org/nextui/commit/44ed1056e717c56633f60cf289f78e9c7b83b648) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Peer dependencies updated, changeset config changed to update peer dependencies only when out of range

- Updated dependencies [[`44ed1056e`](https://github.com/nextui-org/nextui/commit/44ed1056e717c56633f60cf289f78e9c7b83b648)]:
  - @nextui-org/button@2.0.24
  - @nextui-org/aria-utils@2.0.13
  - @nextui-org/framer-utils@2.0.13

## 2.1.11

### Patch Changes

- [#1874](https://github.com/nextui-org/nextui/pull/1874) [`38af48faf`](https://github.com/nextui-org/nextui/commit/38af48faf5b62d2f81f2402f3d83d78991eb46e0) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Peer dependencies updated to avoid the peer conflicts issue.

- Updated dependencies [[`38af48faf`](https://github.com/nextui-org/nextui/commit/38af48faf5b62d2f81f2402f3d83d78991eb46e0)]:
  - @nextui-org/button@2.0.23
  - @nextui-org/system@2.0.12
  - @nextui-org/aria-utils@2.0.12
  - @nextui-org/framer-utils@2.0.12

## 2.1.10

### Patch Changes

- [`25e86fb41`](https://github.com/nextui-org/nextui/commit/25e86fb41770d3cdae6dfdb79306b78fa02d8187) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - New version v2.2.0

- Updated dependencies [[`25e86fb41`](https://github.com/nextui-org/nextui/commit/25e86fb41770d3cdae6dfdb79306b78fa02d8187)]:
  - @nextui-org/button@2.0.22
  - @nextui-org/system@2.0.11
  - @nextui-org/theme@2.1.10
  - @nextui-org/use-aria-button@2.0.6
  - @nextui-org/aria-utils@2.0.11
  - @nextui-org/framer-utils@2.0.11
  - @nextui-org/react-utils@2.0.10
  - @nextui-org/shared-utils@2.0.4

## 2.1.9

### Patch Changes

- Updated dependencies [[`ceddd0d1d`](https://github.com/nextui-org/nextui/commit/ceddd0d1d941a669bab78ef7439a29531cff99a2), [`425a034bc`](https://github.com/nextui-org/nextui/commit/425a034bca4aa5a86cfe4bc47c084366a7ad7e87)]:
  - @nextui-org/button@2.0.21
  - @nextui-org/theme@2.1.9
  - @nextui-org/system@2.0.10
  - @nextui-org/react-utils@2.0.9
  - @nextui-org/aria-utils@2.0.10
  - @nextui-org/framer-utils@2.0.10

## 2.1.8

### Patch Changes

- [#1600](https://github.com/nextui-org/nextui/pull/1600) [`b1b30b797`](https://github.com/nextui-org/nextui/commit/b1b30b7976f1d6652808fbf12ffde044f0861572) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix npm deploy

- Updated dependencies [[`b1b30b797`](https://github.com/nextui-org/nextui/commit/b1b30b7976f1d6652808fbf12ffde044f0861572)]:
  - @nextui-org/button@2.0.20
  - @nextui-org/system@2.0.9
  - @nextui-org/theme@2.1.8
  - @nextui-org/use-aria-button@2.0.5
  - @nextui-org/aria-utils@2.0.9
  - @nextui-org/framer-utils@2.0.9
  - @nextui-org/react-utils@2.0.8
  - @nextui-org/shared-utils@2.0.3

## 2.1.7

### Patch Changes

- [#1589](https://github.com/nextui-org/nextui/pull/1589) [`1612532ee`](https://github.com/nextui-org/nextui/commit/1612532eeeabbc49165546b1a2e7aebf89e7a1c2) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - React aria packages upgraded

- Updated dependencies [[`a3be419cb`](https://github.com/nextui-org/nextui/commit/a3be419cb3c693ae8cace15f9a863274d759ddb1), [`5c30e0481`](https://github.com/nextui-org/nextui/commit/5c30e04811ef9f973d6b59107c909db72d9876b5), [`1612532ee`](https://github.com/nextui-org/nextui/commit/1612532eeeabbc49165546b1a2e7aebf89e7a1c2)]:
  - @nextui-org/theme@2.1.7
  - @nextui-org/use-aria-button@2.0.4
  - @nextui-org/aria-utils@2.0.8
  - @nextui-org/button@2.0.19
  - @nextui-org/system@2.0.8
  - @nextui-org/framer-utils@2.0.8

## 2.1.6

### Patch Changes

- Updated dependencies [[`7c8341035`](https://github.com/nextui-org/nextui/commit/7c8341035dbdd120cd78221b3cabab2e40e7478d)]:
  - @nextui-org/theme@2.1.6
  - @nextui-org/button@2.0.18

## 2.1.5

### Patch Changes

- Updated dependencies [[`d61428d9e`](https://github.com/nextui-org/nextui/commit/d61428d9e6c1c0590593fb1f0136e226051b7e23), [`4db10a47e`](https://github.com/nextui-org/nextui/commit/4db10a47e96ad8315b5b96c2ff15574ac0fdeecc)]:
  - @nextui-org/theme@2.1.5
  - @nextui-org/system@2.0.7
  - @nextui-org/button@2.0.17
  - @nextui-org/aria-utils@2.0.7
  - @nextui-org/framer-utils@2.0.7

## 2.1.4

### Patch Changes

- Updated dependencies [[`043b8420c`](https://github.com/nextui-org/nextui/commit/043b8420cfb659cbb6bb36404807ec3cc8ac8592), [`641bf0885`](https://github.com/nextui-org/nextui/commit/641bf0885b6af2d7f36f27d83716a441975a5ca5)]:
  - @nextui-org/theme@2.1.4
  - @nextui-org/system@2.0.6
  - @nextui-org/button@2.0.16
  - @nextui-org/aria-utils@2.0.6
  - @nextui-org/framer-utils@2.0.6

## 2.1.3

### Patch Changes

- Updated dependencies [[`5702287e5`](https://github.com/nextui-org/nextui/commit/5702287e5622a8f0a0326c7cc0c200808c7971a8)]:
  - @nextui-org/theme@2.1.3
  - @nextui-org/button@2.0.15

## 2.1.2

### Patch Changes

- [#1458](https://github.com/nextui-org/nextui/pull/1458) [`4e94c115`](https://github.com/nextui-org/nextui/commit/4e94c115281c2774424d687877e036a9af1bce01) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix dropdown trigger events and popover arrow styles

- Updated dependencies [[`4e94c115`](https://github.com/nextui-org/nextui/commit/4e94c115281c2774424d687877e036a9af1bce01)]:
  - @nextui-org/button@2.0.14
  - @nextui-org/theme@2.1.2

## 2.1.1

### Patch Changes

- Updated dependencies [[`cc839cdd`](https://github.com/nextui-org/nextui/commit/cc839cdd1fd54931bfba137e2f9b5e8007a7e47d)]:
  - @nextui-org/theme@2.1.1
  - @nextui-org/button@2.0.13

## 2.1.0

### Minor Changes

- [#1313](https://github.com/nextui-org/nextui/pull/1313) [`baec5502`](https://github.com/nextui-org/nextui/commit/baec55029de7f17ba84d3e6c8c98358fd1f2695e) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - New components:

  - Select
  - Listbox
  - ScrollShadow

### Patch Changes

- Updated dependencies [[`baec5502`](https://github.com/nextui-org/nextui/commit/baec55029de7f17ba84d3e6c8c98358fd1f2695e)]:
  - @nextui-org/theme@2.1.0
  - @nextui-org/button@2.0.12
  - @nextui-org/react-utils@2.0.7

## 2.0.12

### Patch Changes

- [#1410](https://github.com/nextui-org/nextui/pull/1410) [`6e7e834c2`](https://github.com/nextui-org/nextui/commit/6e7e834c2dc14c21b087da792c0576ab464a4a4a) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Popover style prop merged with the one returned by react-aria, other components merge props improvements

## 2.0.11

### Patch Changes

- [`406336269`](https://github.com/nextui-org/nextui/commit/40633626991d11f251619508f151dd7f435bda25) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - fix #1386 useLayoutEffect on the server warning

- Updated dependencies []:
  - @nextui-org/react-utils@2.0.6
  - @nextui-org/button@2.0.11

## 2.0.10

### Patch Changes

- Updated dependencies [[`d0341020`](https://github.com/nextui-org/nextui/commit/d0341020e6d865ad3f0d3646fa70a24de75a722b)]:
  - @nextui-org/theme@2.0.5
  - @nextui-org/button@2.0.10

## 2.0.9

### Patch Changes

- Updated dependencies []:
  - @nextui-org/react-utils@2.0.5
  - @nextui-org/button@2.0.9

## 2.0.8

### Patch Changes

- [#1359](https://github.com/nextui-org/nextui/pull/1359) [`a30cec48`](https://github.com/nextui-org/nextui/commit/a30cec4810988fb1962f3a61e0fc0362de08b171) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - \n

  - react-aria packages upgraded to the latest version
  - image storybooks fixed
  - other bug fixes..

- Updated dependencies [[`a30cec48`](https://github.com/nextui-org/nextui/commit/a30cec4810988fb1962f3a61e0fc0362de08b171)]:
  - @nextui-org/framer-utils@2.0.5
  - @nextui-org/use-aria-button@2.0.3
  - @nextui-org/aria-utils@2.0.5
  - @nextui-org/button@2.0.8
  - @nextui-org/system@2.0.5

## 2.0.7

### Patch Changes

- Updated dependencies [[`710395f3`](https://github.com/nextui-org/nextui/commit/710395f3a2ca44238332237a49e948c933abe63d)]:
  - @nextui-org/system@2.0.4
  - @nextui-org/button@2.0.7
  - @nextui-org/aria-utils@2.0.4
  - @nextui-org/framer-utils@2.0.4

## 2.0.6

### Patch Changes

- Updated dependencies []:
  - @nextui-org/react-utils@2.0.4
  - @nextui-org/button@2.0.6

## 2.0.5

### Patch Changes

- Updated dependencies []:
  - @nextui-org/react-utils@2.0.3
  - @nextui-org/button@2.0.5

## 2.0.4

### Patch Changes

- [#1301](https://github.com/nextui-org/nextui/pull/1301) [`d794225c`](https://github.com/nextui-org/nextui/commit/d794225cb75121db3a72f430739b4eaacd1cf8b7) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Plugin types adapted to work with latest version of postcss

- Updated dependencies [[`d794225c`](https://github.com/nextui-org/nextui/commit/d794225cb75121db3a72f430739b4eaacd1cf8b7)]:
  - @nextui-org/button@2.0.4
  - @nextui-org/theme@2.0.4

## 2.0.3

### Patch Changes

- [`e3e13a09`](https://github.com/nextui-org/nextui/commit/e3e13a095f2347ff279c85e6a5d3798f36c6533f) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - New package created to exports system RSC-compatible functions
  Component exports changed to named exports
- Updated dependencies [[`eefda8d6`](https://github.com/nextui-org/nextui/commit/eefda8d6e2088526e0dbb2026d807b53d2a97782), [`e3e13a09`](https://github.com/nextui-org/nextui/commit/e3e13a095f2347ff279c85e6a5d3798f36c6533f)]:
  - @nextui-org/react-utils@2.0.2
  - @nextui-org/button@2.0.3
  - @nextui-org/system@2.0.3
  - @nextui-org/theme@2.0.3
  - @nextui-org/use-aria-button@2.0.2
  - @nextui-org/aria-utils@2.0.3
  - @nextui-org/framer-utils@2.0.3
  - @nextui-org/shared-utils@2.0.2

## 2.0.2

### Patch Changes

- Updated dependencies [[`459ac5ed`](https://github.com/nextui-org/nextui/commit/459ac5ed4537942517803ba14129226a791d6feb)]:
  - @nextui-org/theme@2.0.2
  - @nextui-org/button@2.0.2
  - @nextui-org/system@2.0.2
  - @nextui-org/aria-utils@2.0.2
  - @nextui-org/framer-utils@2.0.2

## 2.0.1

### Patch Changes

- [`e940ec06`](https://github.com/nextui-org/nextui/commit/e940ec06ac5e46340d5956fb7c455a6ab3de3140) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Introducing NextUI v2.0

- [`e940ec06`](https://github.com/nextui-org/nextui/commit/e940ec06ac5e46340d5956fb7c455a6ab3de3140) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Introducing v2 - Readmes updated

- Updated dependencies [[`e940ec06`](https://github.com/nextui-org/nextui/commit/e940ec06ac5e46340d5956fb7c455a6ab3de3140), [`e940ec06`](https://github.com/nextui-org/nextui/commit/e940ec06ac5e46340d5956fb7c455a6ab3de3140)]:
  - @nextui-org/framer-utils@2.0.1
  - @nextui-org/shared-utils@2.0.1
  - @nextui-org/use-aria-button@2.0.1
  - @nextui-org/react-utils@2.0.1
  - @nextui-org/aria-utils@2.0.1
  - @nextui-org/button@2.0.1
  - @nextui-org/system@2.0.1
  - @nextui-org/theme@2.0.1