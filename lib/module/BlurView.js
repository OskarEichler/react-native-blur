"use strict";

import React, { Children, forwardRef, memo, useMemo } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import ReactNativeBlurView from './ReactNativeBlurViewNativeComponent';

/** Ref to the underlying native blur view. */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * A cross-platform blur view component that provides native blur effects.
 *
 * On iOS, this uses UIVisualEffectView for true blur effects.
 * On Android, this uses the BlurView library for hardware-accelerated blur effects.
 *
 * This component automatically handles the proper positioning pattern where the blur
 * effect is positioned absolutely behind the content, ensuring interactive elements
 * work correctly.
 *
 * A forwarded ref resolves to the underlying native blur view.
 *
 * @example
 * ```tsx
 * <BlurView
 *   blurType="light"
 *   blurAmount={20}
 *   style={{ flex: 1 }}
 * >
 *   <Text>Content on top of blur</Text>
 *   <Button title="Interactive Button" onPress={() => {}} />
 * </BlurView>
 * ```
 */
const BlurViewComponent = /*#__PURE__*/forwardRef(({
  blurType = 'xlight',
  blurAmount = 10,
  blurRounds = 5,
  reducedTransparencyFallbackColor = '#FFFFFF',
  overlayColor,
  style,
  children,
  ignoreSafeArea = true,
  ...props
}, ref) => {
  const overlay = useMemo(() => ({
    backgroundColor: overlayColor
  }), [overlayColor]);
  const commonProps = useMemo(() => ({
    blurType,
    blurAmount,
    blurRounds,
    ignoreSafeArea,
    reducedTransparencyFallbackColor
  }), [blurType, blurAmount, blurRounds, ignoreSafeArea, reducedTransparencyFallbackColor]);

  // If no children, render the blur view directly (for background use)
  if (!Children.count(children)) {
    return /*#__PURE__*/_jsx(ReactNativeBlurView, {
      ref: ref,
      style: [style, overlay],
      ...commonProps,
      ...props
    });
  }

  // If children exist, use the style default for Android
  if (Platform.OS === 'android') {
    return /*#__PURE__*/_jsxs(ReactNativeBlurView, {
      ref: ref,
      style: style,
      ...commonProps,
      ...props,
      children: [/*#__PURE__*/_jsx(View, {
        style: [StyleSheet.absoluteFill, overlay]
      }), children]
    });
  }

  // If children exist, use the absolute positioning pattern for iOS and others
  return /*#__PURE__*/_jsxs(View, {
    style: [styles.container, style, overlay],
    children: [/*#__PURE__*/_jsx(ReactNativeBlurView, {
      ref: ref,
      style: StyleSheet.absoluteFill,
      ...commonProps,
      ...props
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
  }
});
//# sourceMappingURL=BlurView.js.map