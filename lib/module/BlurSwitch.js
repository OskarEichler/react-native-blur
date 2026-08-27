"use strict";

import React, { memo, useCallback, useLayoutEffect, useRef, useState } from 'react';
import { Platform, StyleSheet, Switch } from 'react-native';
import ReactNativeBlurSwitch, { Commands } from './ReactNativeBlurSwitchNativeComponent';
import { jsx as _jsx } from "react/jsx-runtime";
export const toColorString = (color, fallback) => {
  if (typeof color === 'string') return color;
  return fallback;
};
/**
 * A cross-platform blur switch component.
 *
 * On iOS, this uses the native Switch component.
 * On Android, this uses QmBlurView's BlurSwitchButtonView for blur effects.
 *
 * Note: On Android, you only need to set the base color (`trackColor.true`),
 * and QmBlurView will automatically calculate the colors for on/off states.
 * The `thumbColor` and `trackColor.false` props are only supported on iOS.
 *
 * @example
 * ```tsx
 * <BlurSwitch
 *   value={isEnabled}
 *   onValueChange={setIsEnabled}
 *   blurAmount={20}
 *   trackColor={{ true: '#34C759' }}
 * />
 * ```
 */
const BlurSwitchComponent = ({
  value = false,
  blurAmount = 10,
  blurRounds = 5,
  onValueChange,
  thumbColor = '#FFFFFF',
  trackColor = {
    false: '#E5E5EA',
    true: '#34C759'
  },
  disabled = false,
  style,
  ...props
}) => {
  const nativeRef = useRef(null);
  // A new object records every native event, including repeated rejected toggles.
  const [native, setNative] = useState(null);
  const handleNativeValueChange = useCallback(event => {
    onValueChange?.(event.nativeEvent.value);
    setNative({
      value: event.nativeEvent.value
    });
  }, [onValueChange]);
  useLayoutEffect(() => {
    if (native != null && native.value !== value && nativeRef.current != null) {
      Commands.setNativeValue(nativeRef.current, value);
    }
  }, [native, value]);
  if (Platform.OS === 'ios') {
    return /*#__PURE__*/_jsx(Switch, {
      value: value,
      onValueChange: onValueChange,
      thumbColor: thumbColor,
      trackColor: trackColor,
      disabled: disabled,
      style: style,
      ...props
    });
  }
  return /*#__PURE__*/_jsx(ReactNativeBlurSwitch, {
    ref: nativeRef,
    style: [styles.switch, style],
    value: value,
    onValueChange: handleNativeValueChange,
    blurAmount: blurAmount,
    blurRounds: blurRounds,
    thumbColor: toColorString(thumbColor, '#FFFFFF'),
    trackColorOff: toColorString(trackColor?.false, '#E5E5EA'),
    trackColorOn: toColorString(trackColor?.true, '#34C759'),
    disabled: disabled,
    ...props
  });
};
BlurSwitchComponent.displayName = 'BlurSwitch';
export const BlurSwitch = /*#__PURE__*/memo(BlurSwitchComponent);
const styles = StyleSheet.create({
  switch: {
    width: 65,
    height: 36
  }
});
export default BlurSwitch;
//# sourceMappingURL=BlurSwitch.js.map