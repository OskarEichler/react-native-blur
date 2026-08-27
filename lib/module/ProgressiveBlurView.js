"use strict";

import React, { Children, forwardRef, memo, useMemo } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import ReactNativeProgressiveBlurView from './ReactNativeProgressiveBlurViewNativeComponent';

/** Ref to the underlying native progressive blur view. */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * A progressive blur view component that provides variable/gradient blur effects.
 *
 * This component applies a blur effect that gradually changes intensity across the view,
 * creating a smooth gradient from fully blurred to clear (or vice versa).
 *
 * **Platform Support:**
 * - iOS: Full support using private Core Animation filters
 * - Android: Supported using QmBlurView's ProgressiveBlurView
 *
 * This component uses the same positioning pattern as BlurView where the blur
 * effect is positioned absolutely behind the content.
 *
 * A forwarded ref resolves to the underlying native progressive blur view.
 *
 * @example
 * ```tsx
 * // Blur that fades from top (blurred) to bottom (clear)
 * <ProgressiveBlurView
 *   blurType="light"
 *   blurAmount={30}
 *   direction="blurredTopClearBottom"
 *   startOffset={0.2}
 *   style={{ height: 200 }}
 * >
 *   <Text>Content on top of progressive blur</Text>
 * </ProgressiveBlurView>
 * ```
 */
const ProgressiveBlurViewComponent = /*#__PURE__*/forwardRef(({
  blurType = 'regular',
  blurAmount = 20,
  blurRounds = 5,
  direction = 'blurredTopClearBottom',
  startOffset = 0.0,
  reducedTransparencyFallbackColor = '#FFFFFF',
  overlayColor,
  style,
  children,
  ...props
}, ref) => {
  const overlay = useMemo(() => ({
    backgroundColor: overlayColor
  }), [overlayColor]);

  // If no children, render the blur view directly (for background use)
  if (!Children.count(children)) {
    return /*#__PURE__*/_jsx(ReactNativeProgressiveBlurView, {
      ref: ref,
      blurType: blurType,
      blurAmount: blurAmount,
      blurRounds: blurRounds,
      direction: direction,
      startOffset: startOffset,
      reducedTransparencyFallbackColor: reducedTransparencyFallbackColor,
      style: [style, overlay],
      ...props
    });
  }

  // On Android the children must live INSIDE the native view: the blur
  // captures the screen content behind it, and children hoisted as siblings
  // get baked into that captured backdrop as a blurred ghost copy under
  // their sharp selves. The native view draws direct children unmasked on
  // top of the effect and excludes its whole subtree from captures.
  if (Platform.OS === 'android') {
    return /*#__PURE__*/_jsx(ReactNativeProgressiveBlurView, {
      ref: ref,
      blurType: blurType,
      blurAmount: blurAmount,
      blurRounds: blurRounds,
      direction: direction,
      startOffset: startOffset,
      reducedTransparencyFallbackColor: reducedTransparencyFallbackColor,
      style: [styles.container, style, overlay],
      ...props,
      children: children
    });
  }

  // If children exist, use the absolute positioning pattern
  return /*#__PURE__*/_jsxs(View, {
    style: [styles.container, style, overlay],
    children: [/*#__PURE__*/_jsx(ReactNativeProgressiveBlurView, {
      ref: ref,
      blurType: blurType,
      blurAmount: blurAmount,
      blurRounds: blurRounds,
      direction: direction,
      startOffset: startOffset,
      reducedTransparencyFallbackColor: reducedTransparencyFallbackColor,
      style: StyleSheet.absoluteFill,
      ...props
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
  }
});
//# sourceMappingURL=ProgressiveBlurView.js.map