"use strict";

import React, { forwardRef, memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { BLUR_TYPE_TO_BACKGROUND, getProgressiveLayers, getProgressiveTintGradient, useBackdropFilterSupport } from "./webBlurUtils.js";

/** Ref to the root view of the web progressive blur view. */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Web implementation of ProgressiveBlurView.
 *
 * A single CSS `backdrop-filter` cannot vary its radius across an element, so
 * this stacks several absolutely-filled backdrop-filter layers, each masked
 * with a `linear-gradient` band and blurring at half the radius of the one
 * before. Composited, they produce a genuine blur-radius ramp from
 * `blurAmount` px at the blurred edge down to sharp at the clear edge —
 * matching the native variable blur rather than fading a constant blur in and
 * out. A gradient of the `blurType` tint fades along the same direction, and
 * children render above everything, sharp.
 *
 * Without backdrop-filter support (old browsers, server-side rendering) only
 * the tint gradient remains. `blurRounds` and
 * `reducedTransparencyFallbackColor` are native-only and accepted for API
 * compatibility.
 */
const ProgressiveBlurViewComponent = /*#__PURE__*/forwardRef(({
  blurType = 'regular',
  blurAmount = 20,
  direction = 'blurredTopClearBottom',
  startOffset = 0.0,
  overlayColor,
  style,
  children,
  // Native-only props, accepted for API compatibility
  blurRounds: _blurRounds,
  reducedTransparencyFallbackColor: _reducedTransparencyFallbackColor,
  ...props
}, ref) => {
  const canUseBackdropFilter = useBackdropFilterSupport();
  const blurLayerStyles = useMemo(() => {
    if (!canUseBackdropFilter) return [];
    return getProgressiveLayers(direction, startOffset, blurAmount).map(layer => {
      const filter = `blur(${layer.radius}px)`;
      return {
        backdropFilter: filter,
        WebkitBackdropFilter: filter,
        maskImage: layer.maskImage,
        WebkitMaskImage: layer.maskImage
      };
    });
  }, [canUseBackdropFilter, direction, startOffset, blurAmount]);
  const tintLayerStyle = useMemo(() => {
    const tint = BLUR_TYPE_TO_BACKGROUND[blurType] ?? BLUR_TYPE_TO_BACKGROUND.regular;
    return {
      backgroundImage: getProgressiveTintGradient(direction, startOffset, tint)
    };
  }, [blurType, direction, startOffset]);
  const overlayLayerStyle = useMemo(() => [StyleSheet.absoluteFill, styles.layer, {
    backgroundColor: overlayColor
  }], [overlayColor]);
  return /*#__PURE__*/_jsxs(View, {
    ref: ref,
    style: [styles.container, style],
    ...props,
    children: [blurLayerStyles.map((layerStyle, index) => /*#__PURE__*/_jsx(View, {
      style: [StyleSheet.absoluteFill, styles.layer, layerStyle]
    }, index)), /*#__PURE__*/_jsx(View, {
      style: [StyleSheet.absoluteFill, styles.layer, tintLayerStyle]
    }), overlayColor != null && /*#__PURE__*/_jsx(View, {
      style: overlayLayerStyle
    }), children]
  });
});
ProgressiveBlurViewComponent.displayName = 'ProgressiveBlurView';
export const ProgressiveBlurView = /*#__PURE__*/memo(ProgressiveBlurViewComponent);
export default ProgressiveBlurView;
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    overflow: 'hidden'
  },
  layer: {
    pointerEvents: 'none'
  }
});
//# sourceMappingURL=ProgressiveBlurView.web.js.map