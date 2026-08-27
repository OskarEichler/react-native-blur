import React from 'react';
import type { ViewStyle, StyleProp, ColorValue, ViewProps } from 'react-native';
import ReactNativeBlurView, { type BlurType } from './ReactNativeBlurViewNativeComponent';
export interface BlurViewProps extends ViewProps {
    /**
     * @description The type of blur effect to apply
     *
     * @default 'xlight'
     */
    blurType?: BlurType;
    /**
     * @description The intensity of the blur effect (0-100)
     *
     * @default 10
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
     * @description style object for the blur view
     *
     * @default undefined
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @description Whether the blur view should ignore safe area insets
     *
     * @default true
     */
    ignoreSafeArea?: boolean;
    /**
     * @description Child components to render inside the blur view
     *
     * @default undefined
     */
    children?: React.ReactNode;
}
/** Ref to the underlying native blur view. */
export type BlurViewRef = React.ComponentRef<typeof ReactNativeBlurView>;
export declare const BlurView: React.NamedExoticComponent<BlurViewProps & React.RefAttributes<React.Component<import("./ReactNativeBlurViewNativeComponent").NativeProps, {}, any> & import("react-native").ReactNativeElement>>;
export default BlurView;
//# sourceMappingURL=BlurView.d.ts.map