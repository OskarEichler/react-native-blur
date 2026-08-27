"use strict";

import React, { forwardRef, memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { getBlurLayerStyle, useBackdropFilterSupport } from "./webBlurUtils.js";

/** Ref to the root view of the web blur view. */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Web implementation of BlurView using CSS `backdrop-filter`.
 *
 * Renders a container with an absolutely-filled layer carrying a
 * `backdrop-filter: blur() saturate()` plus a semi-transparent background tint
 * derived from `blurType`, approximating the native UIVisualEffectView /
 * QmBlurView look. Children render above the blur, sharp, exactly like the
 * native positioning pattern. In browsers without backdrop-filter support (and
 * during server-side rendering) only the tint remains.
 *
 * `blurRounds`, `reducedTransparencyFallbackColor` and `ignoreSafeArea` are
 * native-only and accepted for API compatibility.
 */
const BlurViewComponent = /*#__PURE__*/forwardRef(({
  blurType = 'xlight',
  blurAmount = 10,
  overlayColor,
  style,
  children,
  // Native-only props, accepted for API compatibility
  blurRounds: _blurRounds,
  reducedTransparencyFallbackColor: _reducedTransparencyFallbackColor,
  ignoreSafeArea: _ignoreSafeArea,
  ...props
}, ref) => {
  const hasBackdropFilter = useBackdropFilterSupport();
  const blurLayerStyle = useMemo(() => [StyleSheet.absoluteFill, styles.layer, getBlurLayerStyle(blurType, blurAmount, hasBackdropFilter)], [blurType, blurAmount, hasBackdropFilter]);
  const overlayLayerStyle = useMemo(() => [StyleSheet.absoluteFill, styles.layer, {
    backgroundColor: overlayColor
  }], [overlayColor]);
  return /*#__PURE__*/_jsxs(View, {
    ref: ref,
    style: [styles.container, style],
    ...props,
    children: [/*#__PURE__*/_jsx(View, {
      style: blurLayerStyle
    }), overlayColor != null && /*#__PURE__*/_jsx(View, {
      style: overlayLayerStyle
    }), children]
  });
});
BlurViewComponent.displayName = 'BlurView';
export const BlurView = /*#__PURE__*/memo(BlurViewComponent);
export default BlurView;
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    overflow: 'hidden'
  },
  layer: {
    pointerEvents: 'none'
  }
});
//# sourceMappingURL=BlurView.web.js.map