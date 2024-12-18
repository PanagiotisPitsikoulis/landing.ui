# @landing-ui/pagination

## 2.2.6

### Patch Changes

- [#4314](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/4314) [`5598806`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/5598806216166dc9fff36cafd9112412486b747f) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix build

## 2.2.5

### Patch Changes

- [#4286](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/4286) [`11eae5c`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/11eae5cc808e10db07b509f4e06d30441bb1937a) Thanks [@macci001](https://github.com/macci001)! - Reverts the PR-4168 (#4256, #4246, #4244)

## 2.2.4

### Patch Changes

- [#4258](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/4258) [`1031e98`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/1031e985b71e69b8a7189ea049b9616257f820b3) Thanks [@wingkwong](https://github.com/wingkwong)! - sync with upstream RA versions

- Updated dependencies [[`1031e98`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/1031e985b71e69b8a7189ea049b9616257f820b3)]:
  - @landing-ui/use-intersection-observer@2.2.2
  - @landing-ui/use-pagination@2.2.2

## 2.2.3

### Patch Changes

- [#4255](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/4255) [`6a94a12`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/6a94a125d4836b0a18d9cd2cb521c85a6bfa9050) Thanks [@wingkwong](https://github.com/wingkwong)! - fixed incorrect peerDependencies for theme and system package (#4254)

## 2.2.2

### Patch Changes

- [#4247](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/4247) [`551ab18`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/551ab184060b24b2c3a89598f84d4c18599649d0) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix peerDeps & core package client on export \*

## 2.2.1

### Patch Changes

- [`d6eee4a`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/d6eee4a8767556152f47f06dcf04940951abc5af) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - v2.6.2

- Updated dependencies [[`d6eee4a`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/d6eee4a8767556152f47f06dcf04940951abc5af)]:
  - @landing-ui/use-intersection-observer@2.2.1
  - @landing-ui/use-pagination@2.2.1
  - @landing-ui/react-utils@2.1.1
  - @landing-ui/shared-icons@2.1.1
  - @landing-ui/shared-utils@2.1.1

## 2.2.0

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

- [#4226](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/4226) [`6c0213d`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/6c0213dfc805aa3c793763c0b25f53b2b80c24dc) Thanks [@wingkwong](https://github.com/wingkwong)! - bump `@react-aria/utils` version (#4212)

- [#4222](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/4222) [`adbd85e`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/adbd85ee95b67ee779401307c49596dd45e062fc) Thanks [@Peterl561](https://github.com/Peterl561)! - fix pagination cursor position on first load

- Updated dependencies [[`6c0213d`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/6c0213dfc805aa3c793763c0b25f53b2b80c24dc), [`5786897`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/5786897b9950d95c12351dacd2fb41bb1e298201)]:
  - @landing-ui/use-intersection-observer@2.2.0
  - @landing-ui/use-pagination@2.2.0
  - @landing-ui/react-utils@2.1.0
  - @landing-ui/shared-icons@2.1.0
  - @landing-ui/shared-utils@2.1.0

## 2.1.0-beta.11

### Patch Changes

- [#4168](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/4168) [`0b5ceb93c`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/0b5ceb93ce098e5d76409190f2d57cd89c06b7e9) Thanks [@macci001](https://github.com/macci001)! - Fixes missing `<li>` wrapper when `href` prop is passed in `ListboxItem`, `MenuItem`, and `PaginationItem` (#4147)

- Updated dependencies [[`004c4a4b3`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/004c4a4b3e44477f148937b12bb542e4b27fd322)]:
  - @landing-ui/shared-icons@2.0.10-beta.8

## 2.1.0-beta.10

### Patch Changes

- [`9869f2b91`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/9869f2b91d0829f9c7f0500ba05745707820bf27) Thanks [@wingkwong](https://github.com/wingkwong)! - bump version

- Updated dependencies [[`9869f2b91`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/9869f2b91d0829f9c7f0500ba05745707820bf27)]:
  - @landing-ui/use-pagination@2.1.0-beta.9
  - @landing-ui/react-utils@2.0.18-beta.8
  - @landing-ui/shared-icons@2.0.10-beta.7
  - @landing-ui/shared-utils@2.0.9-beta.8

## 2.1.0-beta.9

### Patch Changes

- [#3036](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/3036) [`eafdb7d47`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/eafdb7d475a7fcaa7671af77e86fcdf62f14ae00) Thanks [@ryo-manba](https://github.com/ryo-manba)! - update react-aria version

- Updated dependencies [[`eafdb7d47`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/eafdb7d475a7fcaa7671af77e86fcdf62f14ae00)]:
  - @landing-ui/use-pagination@2.1.0-beta.8

## 2.1.0-beta.8

### Patch Changes

- [#4092](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/4092) [`528668db8`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/528668db85b98b46473cb1e214780b7468cdadba) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Test new runner

- Updated dependencies [[`528668db8`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/528668db85b98b46473cb1e214780b7468cdadba)]:
  - @landing-ui/use-pagination@2.1.0-beta.7
  - @landing-ui/react-utils@2.0.18-beta.7
  - @landing-ui/shared-icons@2.0.10-beta.6
  - @landing-ui/shared-utils@2.0.9-beta.7

## 2.1.0-beta.7

### Patch Changes

- [#4086](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/4086) [`f69fe47b5`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/f69fe47b5b8f6f3a77a7a8c20d8715263fa32acb) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Pnpm clean

- Updated dependencies [[`f69fe47b5`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/f69fe47b5b8f6f3a77a7a8c20d8715263fa32acb)]:
  - @landing-ui/use-pagination@2.1.0-beta.6
  - @landing-ui/react-utils@2.0.18-beta.6
  - @landing-ui/shared-icons@2.0.10-beta.5
  - @landing-ui/shared-utils@2.0.9-beta.6

## 2.1.0-beta.6

### Patch Changes

- [#4083](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/4083) [`35058262c`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/35058262c61628fb42907f529c4417886aa12bb2) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix build

- Updated dependencies [[`35058262c`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/35058262c61628fb42907f529c4417886aa12bb2)]:
  - @landing-ui/use-pagination@2.1.0-beta.5
  - @landing-ui/react-utils@2.0.18-beta.5
  - @landing-ui/shared-icons@2.0.10-beta.4
  - @landing-ui/shared-utils@2.0.9-beta.5

## 2.1.0-beta.5

### Patch Changes

- Updated dependencies [[`0f55c491b`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/0f55c491b73da8944f9b38f2ad7486d1b89f8b7a)]:
  - @landing-ui/shared-icons@2.0.10-beta.3

## 2.1.0-beta.4

### Patch Changes

- Updated dependencies [[`5339b2571`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/5339b2571e6d73ca6efe2acd34d88669419db9f7)]:
  - @landing-ui/shared-utils@2.0.9-beta.4
  - @landing-ui/use-pagination@2.1.0-beta.4
  - @landing-ui/react-utils@2.0.18-beta.4

## 2.1.0-beta.3

### Patch Changes

- [#4010](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/4010) [`ef432eb53`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/ef432eb539714fded6cab86a2185956fb103e0df) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - framer-motion alpha version added

- Updated dependencies [[`ef432eb53`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/ef432eb539714fded6cab86a2185956fb103e0df)]:
  - @landing-ui/use-pagination@2.1.0-beta.3
  - @landing-ui/react-utils@2.0.18-beta.3
  - @landing-ui/shared-icons@2.0.10-beta.2
  - @landing-ui/shared-utils@2.0.9-beta.3

## 2.1.0-beta.2

### Patch Changes

- [#4008](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/4008) [`7c1c0dd8f`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/7c1c0dd8fef3ea72996c1095b919574c4b7f9b89) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - React 19 added to peerDeps

- Updated dependencies [[`7c1c0dd8f`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/7c1c0dd8fef3ea72996c1095b919574c4b7f9b89)]:
  - @landing-ui/use-pagination@2.1.0-beta.2
  - @landing-ui/react-utils@2.0.18-beta.2
  - @landing-ui/shared-icons@2.0.10-beta.1
  - @landing-ui/shared-utils@2.0.9-beta.2

## 2.1.0-beta.1

### Patch Changes

- [#3990](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/3990) [`cb5bc4c74`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/cb5bc4c74f00caaee80dca89c1f02038db315b85) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Beta 1

- Updated dependencies [[`cb5bc4c74`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/cb5bc4c74f00caaee80dca89c1f02038db315b85)]:
  - @landing-ui/use-pagination@2.1.0-beta.1
  - @landing-ui/react-utils@2.0.18-beta.1
  - @landing-ui/shared-icons@2.0.10-beta.0
  - @landing-ui/shared-utils@2.0.9-beta.1

## 2.1.0-beta.0

### Minor Changes

- [#3732](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/3732) [`67ea2f65e`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/67ea2f65e17f913bdffae4690586a6ae202c8f7d) Thanks [@ryo-manba](https://github.com/ryo-manba)! - update react-aria version

### Patch Changes

- Updated dependencies [[`0cf91395c`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/0cf91395c7c66a69fb05c7fca4a30cbad9e1e0f8), [`781b85566`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/781b85566ee5eac3f505625462c4f5f14e36ed3a), [`67ea2f65e`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/67ea2f65e17f913bdffae4690586a6ae202c8f7d), [`38a54ab49`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/38a54ab497781e17799b37f0061ba50f2dc44e09), [`af3c4f706`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/af3c4f706bb88eae02eee594a6db68cdd33bbe88), [`ae73de1a6`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/ae73de1a61c26e78235ce2d4c38159d486b55d56), [`ad6393ab3`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/ad6393ab33362119203455ef5c8ffbfe1ffa96a1), [`3f0d81b56`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/3f0d81b560e7ef3eb315bd98407249c0eb4ed5eb), [`cb1b3135b`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/cb1b3135bc7e811c9c2e163d4778f9f6eb2ef8c8), [`a5cac4561`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/a5cac45619e529cf9850f02f416b6bc7cba77f3f), [`d90ad05b1`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/d90ad05b13b36617009cb0e5f57f299aa7bb7bd0), [`a0d7141db`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/a0d7141db314c6bea27df6b8beb15dae3b1bcb93), [`3f0d81b56`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/3f0d81b560e7ef3eb315bd98407249c0eb4ed5eb), [`3f0d81b56`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/3f0d81b560e7ef3eb315bd98407249c0eb4ed5eb), [`8a33eabb2`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/8a33eabb2583202fcc8fbc33e8f2ed23bb45f1a4), [`559436d46`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/559436d462bdb8739d8c817d1aa98607969d8a07)]:
  - @landing-ui/theme@2.3.0-beta.0
  - @landing-ui/system@2.3.0-beta.0
  - @landing-ui/use-pagination@2.1.0-beta.0
  - @landing-ui/shared-utils@2.0.9-beta.0
  - @landing-ui/react-utils@2.0.18-beta.0

## 2.0.36

### Patch Changes

- Updated dependencies [[`f36df4362`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/f36df4362f572e8e233d4357f43600265cd5b8d5)]:
  - @landing-ui/shared-utils@2.0.8
  - @landing-ui/react-utils@2.0.17
  - @landing-ui/use-pagination@2.0.10

## 2.0.35

### Patch Changes

- [#3512](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/3512) [`2d2d300a1`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/2d2d300a12dbe20ca7ebd125daf3dce74efcbf34) Thanks [@wingkwong](https://github.com/wingkwong)! - fix conflicting versions in npm

- Updated dependencies [[`2d2d300a1`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/2d2d300a12dbe20ca7ebd125daf3dce74efcbf34)]:
  - @landing-ui/use-pagination@2.0.9
  - @landing-ui/react-utils@2.0.16
  - @landing-ui/shared-icons@2.0.9
  - @landing-ui/shared-utils@2.0.7

## 2.0.34

### Patch Changes

- Updated dependencies [[`f5d94f96e`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/f5d94f96e4cffed1d4aeef971c89f8d283effd49)]:
  - @landing-ui/shared-utils@2.0.6
  - @landing-ui/use-pagination@2.0.8
  - @landing-ui/react-utils@2.0.15

## 2.0.33

### Patch Changes

- [#3144](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/3144) [`68d1629e7`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/68d1629e778723c85825463ef0d2cdd66c1a4aff) Thanks [@wingkwong](https://github.com/wingkwong)! - Fixed pagination missing animation (#3138)

- [#3240](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/3240) [`47c2472fb`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/47c2472fb22bfe1c0c357b5ba12e5606eba0d65b) Thanks [@wingkwong](https://github.com/wingkwong)! - bump react-aria dependencies

- Updated dependencies [[`3500147d7`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/3500147d7fbe53bc01ae24749fdeaf87c37c0d12), [`47c2472fb`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/47c2472fb22bfe1c0c357b5ba12e5606eba0d65b), [`b9bb06ff3`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/b9bb06ff37f99bfc438e848706ec79b4c7b7c5d3)]:
  - @landing-ui/shared-icons@2.0.8
  - @landing-ui/use-pagination@2.0.7
  - @landing-ui/react-utils@2.0.14

## 2.0.32

### Patch Changes

- [#3119](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/3119) [`685995a12`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/685995a125cc3db26c6adb67ed9f7245b87e792a) Thanks [@wingkwong](https://github.com/wingkwong)! - bump `@react-aria/utils` version to `3.24.1` and bump `@react-types/shared` to `3.23.1`

- [#3119](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/3119) [`685995a12`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/685995a125cc3db26c6adb67ed9f7245b87e792a) Thanks [@wingkwong](https://github.com/wingkwong)! - Add missing router.open parameters due to router change

## 2.0.31

### Patch Changes

- [#2929](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/2929) [`422770cc6`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/422770cc6bcdd1d4c51257654ab718f3c19d6cb2) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Add support for disabling the animations globally.

## 2.0.30

### Patch Changes

- Updated dependencies [[`eccc2f2f3`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/eccc2f2f3d856eefb2cc7c07b94e1c4cefd4d7d0)]:
  - @landing-ui/react-utils@2.0.13

## 2.0.29

### Patch Changes

- Updated dependencies []:
  - @landing-ui/react-utils@2.0.12

## 2.0.28

### Patch Changes

- [#2618](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/2618) [`dc0bcf13a`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/dc0bcf13a5e9aa0450938bcca47cd4c696066f14) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - v2.3.0

- [#2618](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/2618) [`dc0bcf13a`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/dc0bcf13a5e9aa0450938bcca47cd4c696066f14) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - - Calendar component added
  - objectToDeps function applied all across components
  - `useMeasure` hook added
  - `useIntersectionObserver` hook added
  - `framer-transitions` renamed to `framer-utils`
  - `ResizablePanel` component added to `framer-utils`
  - `test-utils` updated
- Updated dependencies [[`dc0bcf13a`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/dc0bcf13a5e9aa0450938bcca47cd4c696066f14), [`dc0bcf13a`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/dc0bcf13a5e9aa0450938bcca47cd4c696066f14)]:
  - @landing-ui/use-pagination@2.0.6
  - @landing-ui/react-utils@2.0.11
  - @landing-ui/shared-icons@2.0.7
  - @landing-ui/shared-utils@2.0.5

## 2.0.27

### Patch Changes

- [#2393](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/2393) [`dec7d411b`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/dec7d411b5c9cf1ddb9d74bf8ac897f306017835) Thanks [@wingkwong](https://github.com/wingkwong)! - fixed inversed RTL pagination arrows (#2292)

- Updated dependencies [[`dec7d411b`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/dec7d411b5c9cf1ddb9d74bf8ac897f306017835)]:
  - @landing-ui/use-pagination@2.0.5

## 2.0.26

### Patch Changes

- Updated dependencies [[`9189b3fbf`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/9189b3fbf2d6d6cc6566009c71b37d5fcc566291)]:
  - @landing-ui/shared-icons@2.0.6

## 2.0.25

### Patch Changes

- [#1877](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/1877) [`44ed1056e`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/44ed1056e717c56633f60cf289f78e9c7b83b648) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Peer dependencies updated, changeset config changed to update peer dependencies only when out of range

## 2.0.24

### Patch Changes

- [#1874](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/1874) [`38af48faf`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/38af48faf5b62d2f81f2402f3d83d78991eb46e0) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Peer dependencies updated to avoid the peer conflicts issue.

- Updated dependencies []:
  - @landing-ui/system@2.0.12

## 2.0.23

### Patch Changes

- [`25e86fb41`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/25e86fb41770d3cdae6dfdb79306b78fa02d8187) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - New version v2.2.0

- Updated dependencies [[`25e86fb41`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/25e86fb41770d3cdae6dfdb79306b78fa02d8187)]:
  - @landing-ui/system@2.0.11
  - @landing-ui/theme@2.1.10
  - @landing-ui/use-aria-press@2.0.1
  - @landing-ui/use-pagination@2.0.4
  - @landing-ui/react-utils@2.0.10
  - @landing-ui/shared-icons@2.0.5
  - @landing-ui/shared-utils@2.0.4

## 2.0.22

### Patch Changes

- Updated dependencies [[`425a034bc`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/425a034bca4aa5a86cfe4bc47c084366a7ad7e87)]:
  - @landing-ui/theme@2.1.9
  - @landing-ui/system@2.0.10
  - @landing-ui/react-utils@2.0.9

## 2.0.21

### Patch Changes

- [#1600](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/1600) [`b1b30b797`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/b1b30b7976f1d6652808fbf12ffde044f0861572) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix npm deploy

- Updated dependencies [[`b1b30b797`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/b1b30b7976f1d6652808fbf12ffde044f0861572)]:
  - @landing-ui/system@2.0.9
  - @landing-ui/theme@2.1.8
  - @landing-ui/use-pagination@2.0.3
  - @landing-ui/react-utils@2.0.8
  - @landing-ui/shared-icons@2.0.4
  - @landing-ui/shared-utils@2.0.3

## 2.0.20

### Patch Changes

- [#1589](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/1589) [`1612532ee`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/1612532eeeabbc49165546b1a2e7aebf89e7a1c2) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - React aria packages upgraded

- Updated dependencies [[`a3be419cb`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/a3be419cb3c693ae8cace15f9a863274d759ddb1), [`5c30e0481`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/5c30e04811ef9f973d6b59107c909db72d9876b5), [`1612532ee`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/1612532eeeabbc49165546b1a2e7aebf89e7a1c2)]:
  - @landing-ui/theme@2.1.7
  - @landing-ui/system@2.0.8

## 2.0.19

### Patch Changes

- [#1558](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/1558) [`7c8341035`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/7c8341035dbdd120cd78221b3cabab2e40e7478d) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Pagination changeset

- Updated dependencies [[`7c8341035`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/7c8341035dbdd120cd78221b3cabab2e40e7478d)]:
  - @landing-ui/theme@2.1.6

## 2.0.18

### Patch Changes

- [#1555](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/1555) [`d61428d9e`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/d61428d9e6c1c0590593fb1f0136e226051b7e23) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - fix: fixed pagination scale animation

  For animations of the pagination cursor to be enabled data-moving needs to be set to true.
  We are now setting the data-moving to false 300ms after setting the cursor scale to 1.

- [`4db10a47e`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/4db10a47e96ad8315b5b96c2ff15574ac0fdeecc) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Pagination changes reverted

- Updated dependencies [[`d61428d9e`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/d61428d9e6c1c0590593fb1f0136e226051b7e23), [`4db10a47e`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/4db10a47e96ad8315b5b96c2ff15574ac0fdeecc)]:
  - @landing-ui/theme@2.1.5
  - @landing-ui/system@2.0.7

## 2.0.17

### Patch Changes

- Updated dependencies [[`043b8420c`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/043b8420cfb659cbb6bb36404807ec3cc8ac8592), [`641bf0885`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/641bf0885b6af2d7f36f27d83716a441975a5ca5)]:
  - @landing-ui/theme@2.1.4
  - @landing-ui/system@2.0.6

## 2.0.16

### Patch Changes

- Updated dependencies [[`5702287e5`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/5702287e5622a8f0a0326c7cc0c200808c7971a8)]:
  - @landing-ui/theme@2.1.3

## 2.0.15

### Patch Changes

- [#1458](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/1458) [`4e94c115`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/4e94c115281c2774424d687877e036a9af1bce01) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix dropdown trigger events and popover arrow styles

- Updated dependencies [[`4e94c115`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/4e94c115281c2774424d687877e036a9af1bce01)]:
  - @landing-ui/theme@2.1.2

## 2.0.14

### Patch Changes

- Updated dependencies [[`cc839cdd`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/cc839cdd1fd54931bfba137e2f9b5e8007a7e47d)]:
  - @landing-ui/theme@2.1.1

## 2.0.13

### Patch Changes

- Updated dependencies [[`baec5502`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/baec55029de7f17ba84d3e6c8c98358fd1f2695e)]:
  - @landing-ui/theme@2.1.0
  - @landing-ui/shared-icons@2.0.3
  - @landing-ui/react-utils@2.0.7

## 2.0.12

### Patch Changes

- Updated dependencies []:
  - @landing-ui/react-utils@2.0.6

## 2.0.11

### Patch Changes

- Updated dependencies [[`d0341020`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/d0341020e6d865ad3f0d3646fa70a24de75a722b)]:
  - @landing-ui/theme@2.0.5

## 2.0.10

### Patch Changes

- Updated dependencies []:
  - @landing-ui/react-utils@2.0.5

## 2.0.9

### Patch Changes

- [#1359](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/1359) [`a30cec48`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/a30cec4810988fb1962f3a61e0fc0362de08b171) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - \n

  - react-aria packages upgraded to the latest version
  - image storybooks fixed
  - other bug fixes..

- Updated dependencies [[`a30cec48`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/a30cec4810988fb1962f3a61e0fc0362de08b171)]:
  - @landing-ui/system@2.0.5

## 2.0.8

### Patch Changes

- Updated dependencies [[`710395f3`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/710395f3a2ca44238332237a49e948c933abe63d)]:
  - @landing-ui/system@2.0.4

## 2.0.7

### Patch Changes

- Updated dependencies []:
  - @landing-ui/react-utils@2.0.4

## 2.0.6

### Patch Changes

- Updated dependencies []:
  - @landing-ui/react-utils@2.0.3

## 2.0.5

### Patch Changes

- [`8de209bf`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/8de209bff75e7e1b8126f89e4a5c3e6d515c316f) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Pagination warnings fixed

## 2.0.4

### Patch Changes

- [#1301](https://github.com/PanagiotisPitsikoulis/landing.ui/pull/1301) [`d794225c`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/d794225cb75121db3a72f430739b4eaacd1cf8b7) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Plugin types adapted to work with latest version of postcss

- Updated dependencies [[`d794225c`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/d794225cb75121db3a72f430739b4eaacd1cf8b7)]:
  - @landing-ui/theme@2.0.4

## 2.0.3

### Patch Changes

- [`e3e13a09`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/e3e13a095f2347ff279c85e6a5d3798f36c6533f) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - New package created to exports system RSC-compatible functions
  Component exports changed to named exports
- Updated dependencies [[`eefda8d6`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/eefda8d6e2088526e0dbb2026d807b53d2a97782), [`e3e13a09`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/e3e13a095f2347ff279c85e6a5d3798f36c6533f)]:
  - @landing-ui/react-utils@2.0.2
  - @landing-ui/system@2.0.3
  - @landing-ui/theme@2.0.3
  - @landing-ui/use-pagination@2.0.2
  - @landing-ui/shared-icons@2.0.2
  - @landing-ui/shared-utils@2.0.2

## 2.0.2

### Patch Changes

- Updated dependencies [[`459ac5ed`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/459ac5ed4537942517803ba14129226a791d6feb)]:
  - @landing-ui/theme@2.0.2
  - @landing-ui/system@2.0.2

## 2.0.1

### Patch Changes

- [`e940ec06`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/e940ec06ac5e46340d5956fb7c455a6ab3de3140) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Introducing NextUI v2.0

- [`e940ec06`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/e940ec06ac5e46340d5956fb7c455a6ab3de3140) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Introducing v2 - Readmes updated

- Updated dependencies [[`e940ec06`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/e940ec06ac5e46340d5956fb7c455a6ab3de3140), [`e940ec06`](https://github.com/PanagiotisPitsikoulis/landing.ui/commit/e940ec06ac5e46340d5956fb7c455a6ab3de3140)]:
  - @landing-ui/shared-icons@2.0.1
  - @landing-ui/shared-utils@2.0.1
  - @landing-ui/react-utils@2.0.1
  - @landing-ui/use-pagination@2.0.1
  - @landing-ui/system@2.0.1
  - @landing-ui/theme@2.0.1
