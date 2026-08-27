import React from 'react';
import type { ViewStyle, StyleProp, ColorValue, ViewProps } from 'react-native';
import ReactNativeProgressiveBlurView, { type BlurType, type ProgressiveBlurDirection } from './ReactNativeProgressiveBlurViewNativeComponent';
export interface ProgressiveBlurViewProps extends ViewProps {
    /**
     * @description The type of blur effect to apply
     *
     * @default 'regular'
     */
    blurType?: BlurType;
    /**
     * @description The maximum intensity of the blur effect (in pixels)
     * This is the blur radius at the most blurred part of the gradient
     *
     * @default 20
     */
    blurAmount?: number;
    /**
     * @description The number of blur interactions to perform for a smoother
     * effect (1-15)
     *
     * @default 5
     *
     * @platform Android
     */
    blurRounds?: number;
    /**
     * @description The direction of the progressive blur gradient
     * - 'blurredTopClearBottom': Blur starts at top, clear at bottom
     * - 'blurredBottomClearTop': Blur starts at bottom, clear at top
     * - 'blurredCenterClearTopAndBottom': Blur peaks at center, clear at both edges
     *
     * @default 'blurredTopClearBottom'
     */
    direction?: ProgressiveBlurDirection;
    /**
     * @description Plateau size (0.0 to 1.0) reserved before the fade begins,
     * with the same meaning on all platforms. For edge directions it grows the
     * fully-blurred zone from the blurred edge; 0.0 spreads the fade across the
     * whole view. For the center direction the fade always occupies fixed ~20%
     * bands at the clear edges around a blurred center plateau; startOffset
     * insets where those bands start (clamped to 0.3), so 0.0 keeps them at the
     * very edges rather than spreading the fade
     *
     * @default 0.0
     */
    startOffset?: number;
    /**
     * @description Fallback color when reduced transparency is enabled
     *
     * @default '#FFFFFF'
     *
     * @platform iOS
     */
    reducedTransparencyFallbackColor?: string;
    /**
     * @description The overlay color to apply on top of the blur effect
     *
     * @default undefined
     */
    overlayColor?: ColorValue;
    /**
     * @description style object for the progressive blur view
     *
     * @default undefined
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @description Child components to render inside the progressive blur view
     *
     * @default undefined
     */
    children?: React.ReactNode;
}
/** Ref to the underlying native progressive blur view. */
export type ProgressiveBlurViewRef = React.ComponentRef<typeof ReactNativeProgressiveBlurView>;
export declare const ProgressiveBlurView: React.NamedExoticComponent<ProgressiveBlurViewProps & React.RefAttributes<React.Component<import("./ReactNativeProgressiveBlurViewNativeComponent").NativeProps, {}, any> & import("react-native").ReactNativeElement>>;
export default ProgressiveBlurView;
//# sourceMappingURL=ProgressiveBlurView.d.ts.map