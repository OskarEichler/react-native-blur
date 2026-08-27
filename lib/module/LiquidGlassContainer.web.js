"use strict";

import React, { forwardRef, memo } from 'react';
import { View } from 'react-native';

/** Ref to the root view of the web liquid glass container. */
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * Web implementation of LiquidGlassContainer.
 *
 * The iOS 26+ UIGlassContainerEffect (which merges nearby glass views) has no
 * web equivalent, so this renders a plain View — the same fallback the native
 * component uses on Android and older iOS. `spacing` is native-only and
 * accepted for API compatibility.
 */
const LiquidGlassContainerComponent = /*#__PURE__*/forwardRef(({
  spacing: _spacing,
  style,
  children,
  ...rest
}, ref) => {
  return /*#__PURE__*/_jsx(View, {
    ref: ref,
    style: style,
    ...rest,
    children: children
  });
});
LiquidGlassContainerComponent.displayName = 'LiquidGlassContainer';
export const LiquidGlassContainer = /*#__PURE__*/memo(LiquidGlassContainerComponent);
export default LiquidGlassContainer;
//# sourceMappingURL=LiquidGlassContainer.web.js.map