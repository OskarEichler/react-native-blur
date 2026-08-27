"use strict";

import React, { forwardRef, memo } from 'react';
import { Platform, View } from 'react-native';
import ReactNativeLiquidGlassContainer from './ReactNativeLiquidGlassContainerNativeComponent';

/**
 * LiquidGlassContainer component
 *
 * A UIKit-based container that applies the iOS 26+ UIGlassContainerEffect.
 * This component uses the liquid glass container effect with configurable spacing.
 *
 * Platform: iOS only (iOS 26+)
 *
 * @platform ios
 *
 * @example
 * ```tsx
 * <LiquidGlassContainer spacing={20} style={{ flex: 1 }}>
 *   <Text>Content inside glass container</Text>
 * </LiquidGlassContainer>
 * ```
 */
/**
 * Ref to the underlying native glass container. On the fallback path
 * (non-iOS or iOS < 26, which render a plain View) the ref is not attached.
 */
import { jsx as _jsx } from "react/jsx-runtime";
const LiquidGlassContainerComponent = /*#__PURE__*/forwardRef(({
  spacing = 0,
  style,
  children,
  ...rest
}, ref) => {
  const isCompatibleIOS = Platform.OS === 'ios' && parseInt(Platform.Version, 10) >= 26;
  if (!isCompatibleIOS) {
    // Fallback to regular View on non-iOS platforms or older iOS versions
    return /*#__PURE__*/_jsx(View, {
      style: style,
      ...rest,
      children: children
    });
  }
  return /*#__PURE__*/_jsx(ReactNativeLiquidGlassContainer, {
    ref: ref,
    spacing: spacing,
    style: style,
    ...rest,
    children: children
  });
});
LiquidGlassContainerComponent.displayName = 'LiquidGlassContainer';
export const LiquidGlassContainer = /*#__PURE__*/memo(LiquidGlassContainerComponent);
export default LiquidGlassContainer;
//# sourceMappingURL=LiquidGlassContainer.js.map