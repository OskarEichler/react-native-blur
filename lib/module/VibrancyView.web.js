"use strict";

import React, { forwardRef, memo } from 'react';
import BlurView from "./BlurView.web.js";

/** Ref to the root view of the web vibrancy view. */
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * Web implementation of VibrancyView.
 *
 * iOS uses UIVibrancyEffect, which has no web equivalent, so this delegates to
 * BlurView — the same strategy as the native Android fallback.
 */
const VibrancyViewComponent = /*#__PURE__*/forwardRef(({
  blurType = 'xlight',
  blurAmount = 10,
  style,
  children,
  ...props
}, ref) => {
  return /*#__PURE__*/_jsx(BlurView, {
    ref: ref,
    blurType: blurType,
    blurAmount: blurAmount,
    style: style,
    ...props,
    children: children
  });
});
VibrancyViewComponent.displayName = 'VibrancyView';
export const VibrancyView = /*#__PURE__*/memo(VibrancyViewComponent);
export default VibrancyView;
//# sourceMappingURL=VibrancyView.web.js.map