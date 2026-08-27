"use strict";

import React, { forwardRef, memo } from 'react';
import { Platform, StyleSheet } from 'react-native';
import ReactNativeVibrancyView from './ReactNativeVibrancyViewNativeComponent';
import BlurView from './BlurView';

/**
 * A component that applies a vibrancy effect to its content.
 *
 * On iOS, this uses UIVibrancyEffect.
 * On Android, this falls back to a simple View (or BlurView behavior if implemented).
 */
/**
 * Ref to the underlying native vibrancy view. On Android (which falls back to
 * BlurView) the ref is not attached.
 */
import { jsx as _jsx } from "react/jsx-runtime";
const VibrancyViewComponent = /*#__PURE__*/forwardRef(({
  blurType = 'xlight',
  blurAmount = 10,
  style,
  children,
  ...props
}, ref) => {
  if (Platform.OS === 'android') {
    return /*#__PURE__*/_jsx(BlurView, {
      blurType: blurType,
      blurAmount: blurAmount,
      style: style,
      ...props,
      children: children
    });
  }
  return /*#__PURE__*/_jsx(ReactNativeVibrancyView, {
    ref: ref,
    blurType: blurType,
    blurAmount: blurAmount,
    style: [styles.container, style],
    ...props,
    children: children
  });
});
VibrancyViewComponent.displayName = 'VibrancyView';
export const VibrancyView = /*#__PURE__*/memo(VibrancyViewComponent);
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent'
  }
});
export default VibrancyView;
//# sourceMappingURL=VibrancyView.js.map